import {
	ThirdwebProvider,
	metamaskWallet,
	walletConnect,
	smartWallet,
	paperWallet,
	localWallet,
} from '@thirdweb-dev/react';
import { Mumbai } from '@thirdweb-dev/chains';

import {
	WALLET_CONNECT_PROJECT_ID,
	ACCOUNT_FACTORY_ADDRESS,
	TW_API_KEY,
	PAPER_API_KEY,
} from '@/utils/config';

import { ReactNode } from 'react';
interface Props {
	children: ReactNode;
}

const metadata = {
	name: 'checkinxyz',
	description: 'A gasless web3 guestbook',
	logoUrl: 'https://example.com/logo.png',
	url: 'https://checkinxyz.vercel.app',
	isDarkMode: true,
};

const Web3Provider = ({ children }: Props) => {
	return (
		<ThirdwebProvider
			activeChain={Mumbai}
			autoConnect={false}
			dAppMeta={metadata}
			supportedWallets={[
				smartWallet({
					factoryAddress: ACCOUNT_FACTORY_ADDRESS,
					gasless: true,
					thirdwebApiKey: TW_API_KEY,
					personalWallets: [
						metamaskWallet(),
						walletConnect(),
						localWallet({ persist: true }),
					],
				}),
				metamaskWallet(),
				walletConnect({
					projectId: WALLET_CONNECT_PROJECT_ID,
				}),
				paperWallet({
					clientId: PAPER_API_KEY,
				}),
				localWallet({ persist: true }),
			]}
		>
			{children}
		</ThirdwebProvider>
	);
};

export default Web3Provider;

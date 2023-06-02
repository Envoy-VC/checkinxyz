import {
	ThirdwebProvider,
	metamaskWallet,
	walletConnect,
} from '@thirdweb-dev/react';
import { Mumbai } from '@thirdweb-dev/chains';

import { WALLET_CONNECT_PROJECT_ID } from '@/utils/config';

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
				metamaskWallet(),
				walletConnect({
					projectId: WALLET_CONNECT_PROJECT_ID,
				}),
			]}
		>
			{children}
		</ThirdwebProvider>
	);
};

export default Web3Provider;

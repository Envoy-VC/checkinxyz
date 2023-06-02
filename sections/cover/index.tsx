import { ConnectWallet } from '@thirdweb-dev/react';
import { Image } from '@nextui-org/react';
import { useTheme } from 'next-themes';

import coverImage from '@/assets/cover.jpg';

const Cover = () => {
	const { theme } = useTheme();
	return (
		<div className='!h-full min-h-[400px] lg:min-h-[800px] relative'>
			<div className='absolute z-[10000] flex justify-end pr-8 pt-4 w-full'>
				<ConnectWallet
					theme={theme === 'dark' ? 'dark' : 'light'}
					btnTitle='Connect'
				/>
			</div>

			<Image
				src={coverImage.src}
				alt='Astronaut'
				className='h-[400px] lg:h-[800px] rounded-[48px]'
				objectFit='cover'
			/>
		</div>
	);
};

export default Cover;

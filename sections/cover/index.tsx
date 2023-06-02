import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Image } from '@nextui-org/react';

import coverImage from '@/assets/cover.jpg';

const Cover = () => {
	return (
		<div className='!h-full min-h-[400px] lg:min-h-[800px] relative'>
			<div className='absolute z-[10000] flex justify-end pr-8 pt-4 w-full'>
				<ConnectButton />
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

import { Inter } from 'next/font/google';

import { Cover } from '@/sections';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='p-8'>
			<div className='max-w-screen-xl mx-auto rounded-[48px]'>
				<div className='flex flex-col lg:flex-row gap-6'>
					<div className='basis-1/2 order-2 lg:order-1 shadow-lg rounded-[48px]'>
						Hello
					</div>
					<div className='basis-1/2 order-1 lg:order-2'>
						<Cover />
					</div>
				</div>
			</div>
		</main>
	);
}

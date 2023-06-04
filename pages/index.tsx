import { Cover, Guestbook } from '@/sections';
import { SEO } from '@/components';

export default function Home() {
	return (
		<main className='p-8 pt-16'>
			<SEO />
			<div className='max-w-screen-xl mx-auto rounded-[48px]'>
				<div className='flex flex-col lg:flex-row gap-2'>
					<div className='basis-1/2 order-2 lg:order-1 rounded-[48px] shadow-lg'>
						<Guestbook />
					</div>
					<div className='basis-1/2 order-1 lg:order-2'>
						<Cover />
					</div>
				</div>
			</div>
		</main>
	);
}

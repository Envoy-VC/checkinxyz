import React from 'react';

import { Input, Textarea, Button } from '@nextui-org/react';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const GuestbookForm = () => {
	return (
		<div>
			<div
				className={`${inter.className} text-7xl font-extrabold text-center pt-12`}
			>
				Hi there!
			</div>
			<div
				className={`${inter.className} text-xl font-medium text-center pt-4`}
			>
				The guestbook that&lsquo;s always open, always free, and always secure
			</div>
			<div>
				<form className='flex flex-col gap-6 mt-12'>
					<Input placeholder='Name' />
					<Textarea placeholder='Enter your amazing ideas.' minRows={4} />
					<Button
						color='secondary'
						size='lg'
						className='text-white bg-[#9750DD] !w-fit mx-auto mt-16'
					>
						Sign
					</Button>
				</form>
			</div>
		</div>
	);
};

export default GuestbookForm;

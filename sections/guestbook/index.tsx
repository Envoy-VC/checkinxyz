import React from 'react';

import { Input, Textarea, Button, Navbar } from '@nextui-org/react';
import { ThemeSwitcher, GuestbookForm, Entries } from '@/components';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Guestbook = () => {
	const [activeTab, setActiveTab] = React.useState<'guestbook' | 'entries'>(
		'guestbook'
	);
	return (
		<div className='p-8 !h-full min-h-[800px]'>
			<div className='flex justify-between'>
				<div className='uppercase font-repleteSansBold text-[2.5rem] leading-[2]'>
					checkin
				</div>
				<div>
					<ThemeSwitcher />
				</div>
			</div>
			<Navbar variant='floating' disableBlur disableShadow className='z-[1]'>
				<Navbar.Content
					activeColor='secondary'
					variant='underline'
					className='mx-auto'
				>
					<Navbar.Link
						isActive={activeTab === 'guestbook'}
						onClick={() => setActiveTab('guestbook')}
					>
						Guestbook
					</Navbar.Link>
					<Navbar.Link
						isActive={activeTab === 'entries'}
						onClick={() => setActiveTab('entries')}
					>
						Entries
					</Navbar.Link>
				</Navbar.Content>
			</Navbar>
			{activeTab === 'guestbook' ? <GuestbookForm /> : <Entries />}
		</div>
	);
};

export default Guestbook;

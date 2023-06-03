import { ReactEventHandler, useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface FormProps {
	name: string;
	message: string;
}

const GuestbookForm = () => {
	const [form, setForm] = useState<FormProps>({
		name: '',
		message: '',
	});

	function handleFormChange(fieldName: string, value: string) {
		setForm({ ...form, [fieldName]: value });
	}

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
				<form
					className='flex flex-col gap-6 mt-12'
					onSubmit={(e) => {
						e.preventDefault();
						console.log(form);
					}}
				>
					<Input
						required={true}
						placeholder='Name'
						onChange={(e) => handleFormChange('name', e.target.value)}
					/>
					<Textarea
						required={true}
						placeholder='Enter your amazing ideas.'
						minRows={4}
						onChange={(e) => handleFormChange('message', e.target.value)}
					/>
					<Button
						color='secondary'
						size='lg'
						type='submit'
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

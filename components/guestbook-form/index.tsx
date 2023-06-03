import { useState } from 'react';
import { Input, Textarea, Button, Loading } from '@nextui-org/react';
import {
	useContract,
	useContractWrite,
	useStorage,
	useAddress,
} from '@thirdweb-dev/react';

import toast, { Toaster } from 'react-hot-toast';

import { Inter } from 'next/font/google';
import { GUESTBOOK_CONTRACT_ADDRESS, ABI } from '@/utils/config';
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
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const address = useAddress();
	const storage = useStorage();

	const { contract, isLoading: isInitialized } = useContract(
		GUESTBOOK_CONTRACT_ADDRESS,
		ABI
	);

	const { mutateAsync: writeAsync } = useContractWrite(contract, 'createEntry');

	function handleFormChange(fieldName: string, value: string) {
		setForm({ ...form, [fieldName]: value });
	}

	async function handleSubmit(form: FormProps) {
		try {
			setIsLoading(true);
			if (!address) {
				toast.error('Please Connect Wallet');
				throw new Error('No address found');
			}
			const timestamp = Math.floor(Date.now() / 1000);
			const metadata = {
				name: form.name,
				message: form.message,
				timestamp: timestamp,
			};
			const uri = await storage?.upload(metadata, {
				alwaysUpload: false,
				uploadWithoutDirectory: true,
			});
			await writeAsync({
				args: [uri!.split('ipfs://')[1]],
			});
			toast.success('Success!');
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
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
					onSubmit={async (e) => {
						e.preventDefault();
						await handleSubmit(form);
					}}
				>
					<Input
						aria-label='Name'
						required={true}
						placeholder='Name'
						onChange={(e) => handleFormChange('name', e.target.value)}
					/>
					<Textarea
						aria-label='Message'
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
						disabled={isInitialized}
					>
						{isInitialized || isLoading ? (
							<Loading type='points' color='currentColor' size='sm' />
						) : (
							'Sign'
						)}
					</Button>
				</form>
			</div>
			<Toaster position='bottom-left' />
		</div>
	);
};

export default GuestbookForm;

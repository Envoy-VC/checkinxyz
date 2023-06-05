import React, { useState, useEffect } from 'react';
import { useContract, useContractRead, useStorage } from '@thirdweb-dev/react';

import EntryCard from '../entry-card';

import { GUESTBOOK_CONTRACT_ADDRESS, ABI } from '@/utils/config';

interface EntryProps {
	name: string;
	message: string;
	timestamp: number;
}

const Entries = () => {
	const [entries, setEntries] = useState<EntryProps[]>([]);
	const { contract } = useContract(GUESTBOOK_CONTRACT_ADDRESS, ABI);
	const storage = useStorage();

	const { data, isLoading } = useContractRead(contract, 'getEntries');

	useEffect(() => {
		async function resolveEntries() {
			for (let i = 0; i < data.length; ++i) {
				const entry = await storage?.downloadJSON(`ipfs://${data[i]}`);
				setEntries((entries) => [...entries, entry]);
			}
		}
		if (data) {
			resolveEntries();
			console.log(entries);
		}
	}, [data]);

	return (
		<div className='max-h-[575px] overflow-scroll no-scrollbar'>
			<div className='flex flex-col gap-2 pt-12'>
				{isLoading
					? Array(1, 2, 3, 4).map((index) => <EntryCard key={index} />)
					: entries
							?.reverse()
							?.map((entry: EntryProps, index: number) => (
								<EntryCard
									key={index}
									name={entry.name}
									message={entry.message}
								/>
							))}
			</div>
		</div>
	);
};

export default Entries;

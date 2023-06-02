import React from 'react';

import EntryCard from '../entry-card';

const Entries = () => {
	return (
		<div className='max-h-[575px] overflow-scroll no-scrollbar'>
			<div className='flex flex-col gap-2 pt-12'>
				{Array(3, 4, 5).map((card, index) => (
					<EntryCard
						key={index}
						name='Vedant Chainani'
						message='lorem ipsum dollar butter danduhan adau ja'
					/>
				))}
			</div>
		</div>
	);
};

export default Entries;

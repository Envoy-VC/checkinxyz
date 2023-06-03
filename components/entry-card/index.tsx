import { Card } from '@nextui-org/react';

import { Inter } from 'next/font/google';
import React from 'react';

import { StyledImageSkeleton } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

interface Props {
	name?: string;
	message?: string;
}

const EntryCard = ({ name, message }: Props) => {
	return (
		<div>
			<Card
				css={{
					mw: 'fit',
					background: 'none',
					border: 'none',
					boxShadow: '$xs',
					minHeight: '100px',
				}}
				variant='flat'
			>
				<Card.Body>
					<p className={`${inter.className} font-medium text-lg`}>
						{name || <StyledImageSkeleton />}
					</p>
					<div className={`${inter.className} font-regular text-md`}>
						{message || <StyledImageSkeleton />}
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default EntryCard;

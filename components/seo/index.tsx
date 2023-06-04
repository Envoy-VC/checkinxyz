import { NextSeo } from 'next-seo';

const SEO = () => (
	<>
		<NextSeo
			title='Checkin'
			description='Checkin is a gasless guestbook for the decentralized web. Sign in without fees and leave your mark on the blockchain.'
			openGraph={{
				url: 'https://checkinxyz.vercel.app',
				title: 'Checkin - The Gasless Guestbook for the Web3 Era',
				description:
					'Checkin is a gasless guestbook for the decentralized web. Sign in without fees and leave your mark on the blockchain.',
				images: [
					{
						url: 'https://i.ibb.co/zf6Q79D/og.png',
						width: 1200,
						height: 630,
						alt: 'Checkin Open Graph Image',
						type: 'image/png',
					},
				],
				siteName: 'Checkin',
			}}
			twitter={{
				handle: '@Envoy_1084',
				cardType: 'summary_large_image',
			}}
		/>
	</>
);

export default SEO;

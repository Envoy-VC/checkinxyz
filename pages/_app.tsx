import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Web3Provider } from '@/providers';

const lightTheme = createTheme({
	type: 'light',
});

const darkTheme = createTheme({
	type: 'dark',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextThemesProvider
			defaultTheme='light'
			enableSystem={false}
			attribute='class'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<Web3Provider>
				<NextUIProvider>
					<Component {...pageProps} />
				</NextUIProvider>
			</Web3Provider>
		</NextThemesProvider>
	);
}

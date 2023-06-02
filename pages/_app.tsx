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
			defaultTheme='system'
			attribute='class'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>
				<Web3Provider>
					<Component {...pageProps} />
				</Web3Provider>
			</NextUIProvider>
		</NextThemesProvider>
	);
}

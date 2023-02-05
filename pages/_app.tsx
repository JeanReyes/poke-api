import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { darkTheme } from '@/themes';

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}


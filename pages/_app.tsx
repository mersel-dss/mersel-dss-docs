import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function Nextra({ Component, pageProps }: AppPropsWithLayout): ReactElement {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}


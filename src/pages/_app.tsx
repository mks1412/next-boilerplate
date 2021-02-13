import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { config } from '@site.config'
import '@src/styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon shortcut" type="image/png" href={`${config.siteRoot}/logo.png`} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '@fontsource/ibm-plex-serif/400.css'
import '@fontsource/ibm-plex-serif/700.css'

import themes from '../lib/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <Head>
        <title>Rivo Wowor</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

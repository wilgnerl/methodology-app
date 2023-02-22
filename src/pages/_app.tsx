import { theme } from '@/styles/default'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@fontsource/montserrat'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

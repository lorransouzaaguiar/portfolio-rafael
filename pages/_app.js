import {ChakraProvider} from '@chakra-ui/react'
import Theme from '../src/theme/theme'

import '@fontsource/roboto'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

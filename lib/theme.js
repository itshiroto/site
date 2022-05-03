import { extendTheme } from '@chakra-ui/react'

const themes = extendTheme({
  fonts: {
    heading: 'IBM Plex Serif, serif',
    body: 'IBM Plex Serif, serif',
  },
  initialColorMode: 'system',
  useSystemColorMode: true,
})

export default themes;
import { Box } from '@chakra-ui/react'
import Nav from './Nav'

export default function Layout({ children, ...props }) {
  return (
    <>
      <Nav />
      <Box {...props}>
        {children}
      </Box>
    </>
  )
}
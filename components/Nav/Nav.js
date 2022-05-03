import { Flex, Spacer, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')
  return (
    <Flex h="50px" w="full" bgColor={bg} position="fixed" align="center" px="5" zIndex="999" gap="2">
      <Link href="/" passHref>
        <Button variant="ghost" fontWeight="200">Home</Button>
      </Link>

      <Link href="/todo" passHref>
        <Button variant="ghost" fontWeight="200">Blog</Button>
      </Link>
      <Link href="/todo" passHref>
        <Button variant="ghost" fontWeight="200">Contact</Button>
      </Link>

      <Spacer />
      <Button variant="ghost" fontWeight="200" px="2" onClick={toggleColorMode}>
        {colorMode === 'light' ?
          <Icon fontSize="1.2em" icon="fa6-solid:moon" /> :
          <Icon fontSize="1.2em" icon="fa6-solid:sun" />
        }
      </Button>
    </Flex>
  )
}

import { Center, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Todo() {
  return (
    <Layout>
      <Center h="100vh" flexDirection="column">
        <Heading>Coming soon!</Heading>
        <Link href="/" passHref>
          <Button mt="5">Go back to home</Button>
        </Link>
      </Center>
    </Layout>
  )
}
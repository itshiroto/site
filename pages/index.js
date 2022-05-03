import {
  Box, Container, Flex, Heading,
  Text, Button, useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link'
import { Icon } from '@iconify/react';

import Layout from '../components/Layout';
import { RepoList } from './../components/RepoList';

function SocialList() {
  return (
    <Flex direction="row" justify="left" gap="3" fontSize="1.7em" >
      <Link href="https://www.instagram.com/itshiroto7/" passHref>
        <Button as="a" variant="ghost" fontWeight="200" p="0" fontSize="inherit" target="_blank" rel="noopener noreferrer">
          <Icon icon="fa6-brands:instagram" />
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/rivowowor/" passHref>
        <Button as="a" variant="ghost" fontWeight="200" p="0" fontSize="inherit" target="_blank" rel="noopener noreferrer">
          <Icon icon="fa6-brands:linkedin" />
        </Button>
      </Link>
      <Link href="https://www.github.com/itshiroto/" passHref>
        <Button as="a" variant="ghost" fontWeight="200" p="0" fontSize="inherit" target="_blank" rel="noopener noreferrer">
          <Icon icon="fa6-brands:github" />
        </Button>
      </Link>
    </Flex>
  )
}

function AboutMe({ }) {
  const grayText = useColorModeValue('gray.500', 'gray.400')
  return (<Flex direction={{
    base: "column",
    md: "row"
  }} my="auto" gap="5" align="center">
    <Flex justify="center" position="relative" mx="10">
      <Box position="relative" w="170px" h="170px">
        <Box position="absolute" bgColor="gray.500" w="full" h="full" borderRadius="100%" zIndex="1" overflow="hidden" right="15%">
          <Image src="/images/rivo.jpg" layout='fill' objectFit='cover' alt="hiroto" />
        </Box>
        <Box bgGradient='linear(to-br, cyan.400, blue.600)' w="full" h="full" borderRadius="100%" zIndex="-1" position="absolute" left="15%"></Box>
      </Box>
    </Flex>
    <Flex direction="column" justifyContent="space-between" gap="3">
      <Text fontSize="small" color={grayText}>Hi, my name is</Text>
      <Heading fontWeight={700}>Rivo Juicer Wowor</Heading>
      <Text>
        A skilled Computer Science student in Multimedia Nusantara University
        with a big passion for studying and demonstrated history of working in
        the online media industry.
      </Text>
      <SocialList />
      {/* Bikin list icon social media, pakai library icon Chakra
      atau pakai Iconify */}
    </Flex>
  </Flex>);
}

export default function Home() {
  return (
    <Layout>
      <Container maxW="container.md" h="100vh" centerContent>
        <AboutMe />
      </Container>
      <Box bgColor={useColorModeValue('gray.100', 'gray.700')} py="10">
        <Container maxW="container.lg" minH="75vh">
          <Heading>Recent Repositories</Heading>
          <Text
            mt="2"
          >
            Repositories that I recently working on
          </Text>
          <RepoList />

          {/* TODO: bikin grid repositories diurutin berdasarkan waktu commitnya
          dan diambil dari API Github */}

        </Container>
      </Box>
    </Layout>
  )
}


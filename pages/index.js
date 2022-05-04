import {
  Box, Button, Container, Fade, Flex, Heading, keyframes, Text, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { RepoList } from './../components/RepoList';
import { AboutMe } from '../components/Home';

export default function Home() {
  return (
    <Layout>
      <Container maxW="container.md" h="100vh" centerContent>
        <AboutMe />
      </Container>
      <Box bgColor={useColorModeValue('gray.100', 'gray.700')} py="10">
        <Container maxW="container.lg" minH="75vh">
          <Heading>Recent Repositories</Heading>
          <Text mt="2">
            Repositories that I recently working on
          </Text>
          <RepoList />
        </Container>
      </Box>
    </Layout>
  )
}


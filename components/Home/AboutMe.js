import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { BoxAnimate } from '../FramerFactory';
import { SocialList } from './SocialList'

export function AboutMe({ }) {
  const grayText = useColorModeValue('gray.500', 'gray.400');

  const parentFade = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
    hidden: { opacity: 0 },
  };

  const img = {
    visible: {
      opacity: 1, x: 0,
      transition: {
        duration: 0.6,
      }
    },
    hidden: { opacity: 0, x: -50 },
  };

  return (<BoxAnimate display="flex" flexDirection={{
    base: "column",
    md: "row"
  }} my="auto" gap="5" alignItems="center"
    initial="hidden" whileInView="visible"
    variants={parentFade}>
    <Flex justify="center" position="relative" mx="10">
      <BoxAnimate position="relative" w="170px" h="170px" variants={parentFade}>
        <BoxAnimate variants={img} position="absolute" bgColor="gray.500" w="full" h="full" borderRadius="100%" zIndex="1" overflow="hidden" right="15%">
          <Image src="/images/rivo.jpg" layout='fill' objectFit='cover' alt="hiroto" priority />
        </BoxAnimate>
        <BoxAnimate variants={img} bgGradient='linear(to-br, cyan.400, blue.600)' w="full" h="full" borderRadius="100%" zIndex="-1" position="absolute" left="15%"></BoxAnimate>
      </BoxAnimate>
    </Flex>
    <Box display="flex" flexDirection="column" justifyContent="space-between" gap="1">
      <Text fontSize="small" color={grayText}>Hi, my name is</Text>
      <Heading fontWeight={700}>Rivo Juicer Wowor</Heading>
      <Text>
        A skilled Computer Science student in Multimedia Nusantara University
        with a big passion for learning and demonstrated history of working in
        the online media industry.
      </Text>
      <SocialList />
    </Box>
  </BoxAnimate>);
}

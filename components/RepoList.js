import {
  Box,
  Flex, Heading, HStack, SimpleGrid, Tag,
  TagLeftIcon, Text, useColorModeValue
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export function RepoList() {
  const {
    data,
    error
  } = useSWR('https://api.github.com/users/itshiroto/repos?sort=pushed&per_page=6&type=all', fetcher);
  if (error) return console.error("fetching failed");
  if (!data) return console.log("Loading data");
  return <SimpleGrid minChildWidth="280px" gap="10px" mt="5">
    {data.map(repo => <RepoCard key={repo.id} repo={repo} />)}
  </SimpleGrid>;
}

function RepoCard({
  key,
  repo
}) {
  const bg = useColorModeValue('white', 'gray.900');
  const text = useColorModeValue('gray.700', 'gray.300');
  const grayText = useColorModeValue('gray.600', 'gray.400');
  return <Flex as="a" key={key} href={repo.html_url} target="_blank" rel="noopener noreferrer"
    direction="column" textAlign="left" bgColor={bg} p="5" borderRadius="10px" justify="space-around"
    transition="0.2s" _hover={{
      transform: "scale(1.02)",
      transition: "0.2s",
      backgroundColor: useColorModeValue('gray.200', 'gray.800')
    }}>
    <Heading fontWeight={700}>{repo.name}</Heading>
    <Box my="5">
      {repo.description ?
        <Text fontSize="small" color={text}>{repo.description}</Text> :
        <Text fontSize="small" fontStyle="italic" color={grayText}>No Description Provided</Text>}
    </Box>
    <HStack>
      <Tag variant="solid" fontWeight="700">{repo.language}</Tag>
      <Tag>
        <TagLeftIcon>
          <Icon icon="fa6-solid:star" width="100%" height="100%" />
        </TagLeftIcon>
        {repo.stargazers_count}
      </Tag>

    </HStack>
  </Flex>;
}



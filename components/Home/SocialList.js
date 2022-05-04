import { Flex, Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export function SocialList() {
  return <Flex direction="row" justify="left" gap="1" fontSize="1.4em">
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
  </Flex>;
}

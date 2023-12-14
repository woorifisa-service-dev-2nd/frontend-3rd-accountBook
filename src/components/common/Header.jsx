import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg={'white'} as="nav" position="sticky" top={'0'} zIndex={99} alignItems="center" padding="0px" w="full" borderBottomWidth="2px" shadow="0 0 10px 0 rgba(0,0,0, 0.035)">
      <HStack margin="0 auto" maxW="container.lg" w="full" h={20} display="flex" justify={'space-between'} px={{ base: 4, lg: 0 }}>
        <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
          <Heading size={'md'}>{'Account Book'}</Heading>
          <Button colorScheme="blue">추가하기</Button>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Header;

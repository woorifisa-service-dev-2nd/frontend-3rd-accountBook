import React, { useEffect, useContext } from 'react';
import { Box, Button, Flex, Heading, useDisclosure, Link } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import ModalForm from './ModalForm';
import { AccountContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useContext(AccountContext);

  const updateMockData = (newData) => {
    setData((data) => [...data, newData]);
  };

  return (
    <Box bg={'white'} as="nav" position="sticky" top={'0'} zIndex={99} alignItems="center" padding="0px" w="full" borderBottomWidth="2px" shadow="0 0 10px 0 rgba(0,0,0, 0.035)">
      <HStack margin="0 auto" maxW="container.lg" w="full" h={20} display="flex" justify={'space-between'} px={{ base: 4, lg: 0 }}>
        <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
          <Link href='http://localhost:5173/'>
            <Heading size={'md'}>{'Account Book'}</Heading>
          </Link>
          <Button colorScheme="blue" onClick={onOpen}>
            추가하기
          </Button>
          <ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} updateMockData={updateMockData} />
        </Flex>
      </HStack>
    </Box>
  );
};
export default Header;

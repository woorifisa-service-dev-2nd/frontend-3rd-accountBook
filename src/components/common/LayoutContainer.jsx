import { Container, Stack } from '@chakra-ui/react';
import Header from './Header';

const LayoutContainer = ({ children }) => {
  return (
    <>
      <Header />

      <Container maxW="container.lg" w="full" p={0} mt={10}>
        <Stack flex={1} alignItems="stretch" w="full">
          <Stack flex={1} w="full" as="main">
            {children}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default LayoutContainer;

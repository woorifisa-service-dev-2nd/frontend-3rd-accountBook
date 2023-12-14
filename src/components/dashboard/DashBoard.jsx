import { Heading, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react';
import TotalStatus from './TotalStatus';
import Chart from './Chart';
import SelectBox from '../common/SelectBox';

const DashBoard = () => {
  return (
    <>
      <Heading as="h1" size="2xl" my={10}>
        DashBoard
      </Heading>

      <Stack spacing={8}>
        <SelectBox />
        <TotalStatus />
        <Chart />
      </Stack>
    </>
  );
};

export default DashBoard;

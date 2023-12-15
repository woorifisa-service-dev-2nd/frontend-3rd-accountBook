import { Button, Card, Grid, GridItem, HStack, Heading, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import TotalStatus from './TotalStatus';
import Chart from './Chart';
import DataTable from './DataTable';
import { useContext } from 'react';
import { AccountContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const [data] = useContext(AccountContext);
  const recentData = data.slice(0, 3);

  const navigate = useNavigate();

  return (
    <Stack spacing={8}>
      <TotalStatus />

      <Grid templateColumns={'repeat(7,1fr)'} gap={8}>
        <GridItem colSpan={3}>
          <Card p={10}>
            <Stack spacing={12}>
              <Heading as="h4" size="md">
                Charge Overview
              </Heading>
              <Chart />
            </Stack>
          </Card>
        </GridItem>

        {/* Recent Record */}
        <GridItem colSpan={4}>
          <Card p={10}>
            <Stack spacing={12}>
              <HStack justifyContent={'space-between'}>
                <Heading as="h4" size="md">
                  Recent Record
                </Heading>
                <Button
                  onClick={() => {
                    navigate('/list');
                  }}
                >
                  상세보기
                </Button>
              </HStack>
              <DataTable fontSize={'sm'} bgColor={'white'} data={recentData} size={'lg'} />
            </Stack>
          </Card>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default DashBoard;

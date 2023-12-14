import { Badge, Card, Grid, GridItem, HStack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { amountFormat } from '../util/amountFormat';
import { TYPE } from '../constant';
import { useContext } from 'react';
import { AccountContext } from '../../App';

const StatusItem = ({ type, text, amount }) => {
  return (
    <GridItem w="100%">
      <Card padding={8}>
        <Stat>
          <HStack>
            <StatLabel>{text}</StatLabel>
            <Badge colorScheme={type === 'income' ? 'green' : 'purple'}>{TYPE[type]}</Badge>
          </HStack>
          <StatNumber>{`${amountFormat(amount)}원`}</StatNumber>
          {/* TODO */}
          {/* <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText> */}
        </Stat>
      </Card>
    </GridItem>
  );
};

const TotalStatus = () => {
  const today = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const [data] = useContext(AccountContext);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={8}>
      <StatusItem type={'income'} text={`${month}월`} amount={345670} />
      <StatusItem type={'charge'} text={`${month}월`} amount={123456} />
      <StatusItem type={'income'} text={`${today}일`} amount={345670} />
      <StatusItem type={'charge'} text={`${today}일`} amount={123456} />
    </Grid>
  );
};

export default TotalStatus;

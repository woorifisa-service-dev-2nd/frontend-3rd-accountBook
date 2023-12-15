import { Badge, Card, Grid, GridItem, HStack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { amountFormat } from '../util/amountFormat';
import { TYPE } from '../constant';
import { useContext, useEffect, useState } from 'react';
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
  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth() + 1;

  const [data] = useContext(AccountContext);

  const [incomeAmount, setIncomeAmount] = useState({
    today: 0,
    monthly: 0,
  });

  const [chargeAmount, setChargeAmount] = useState({
    today: 0,
    monthly: 0,
  });

  useEffect(() => {
    if (data.length > 0) {
      const todayChargeAmount = data
        .filter((item) => Number(item.date.slice(8)) === todayDate && item.status === 'charge')
        .map((item) => item.amount)
        .reduce((acc, cur) => {
          acc += Number(cur);
          return acc;
        }, 0);

      const todayIncomeAmount = data
        .filter((item) => Number(item.date.slice(8)) === todayDate && item.status === 'income')
        .map((item) => item.amount)
        .reduce((acc, cur) => {
          acc += Number(cur);
          return acc;
        }, 0);

      const montlyChargeAmount = data
        .filter((item) => Number(item.date.slice(5, 7)) === todayMonth && item.status === 'charge')
        .map((item) => item.amount)
        .reduce((acc, cur) => {
          acc += Number(cur);
          return acc;
        }, 0);

      const montlyIncomAmount = data
        .filter((item) => Number(item.date.slice(5, 7)) === todayMonth && item.status === 'income')
        .map((item) => item.amount)
        .reduce((acc, cur) => {
          acc += Number(cur);
          return acc;
        }, 0);

      setChargeAmount({ today: todayChargeAmount, monthly: montlyChargeAmount });
      setIncomeAmount({ today: todayIncomeAmount, monthly: montlyIncomAmount });
    }
  }, [data]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={8}>
      <StatusItem type={'income'} text={`${todayMonth}월`} amount={incomeAmount.monthly} />
      <StatusItem type={'charge'} text={`${todayMonth}월`} amount={chargeAmount.monthly} />

      <StatusItem type={'income'} text={`${todayMonth}월 ${todayDate}일`} amount={incomeAmount.today} />
      <StatusItem type={'charge'} text={`${todayMonth}월 ${todayDate}일`} amount={chargeAmount.today} />
    </Grid>
  );
};

export default TotalStatus;

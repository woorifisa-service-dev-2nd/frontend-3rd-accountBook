import React, { useContext, useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { AccountContext } from '../../App';

const CHART_LIST_ITEMS_AMOUNT = {
  food: 0,
  living: 0,
  transportation: 0,
  etc: 0,
};

const Chart = () => {
  const [data] = useContext(AccountContext);
  const [chartChargeData, setChartChargeData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const _chartData = data
        .filter((item) => item.chargeStatus !== '')
        .reduce((acc, cur) => {
          acc[cur.chargeStatus] += Number(cur.amount);
          return acc;
        }, CHART_LIST_ITEMS_AMOUNT);

      const chargeData = Object.entries(_chartData).map((i) => ({ chargeStatus: i[0], amount: i[1] }));
      setChartChargeData(chargeData);
    }
  }, [data]);

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <BarChart width={300} height={'100%'} data={chartChargeData}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey={'chargeStatus'} />
        <YAxis dataKey="amount" />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;

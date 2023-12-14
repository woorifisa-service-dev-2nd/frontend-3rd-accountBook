import React, { useContext } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { AccountContext } from '../../App';

const Chart = () => {
  const [data] = useContext(AccountContext);

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <BarChart width={300} height={'100%'} data={data}>
        <XAxis dataKey="chargeStatus" />
        <YAxis dataKey="amount" />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;

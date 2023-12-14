import { Card, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Chart = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const URL = 'http://127.0.0.1:5173/mock.json';

    fetch(URL)
      .then((response) => response.json())
      .then((response) => setData(response.mockData));
  }, []);

  console.log(data);

  return (
    <Card padding={10}>
      <Stack spacing={12}>
        <Heading as="h4" size="md">
          Overview
        </Heading>

        {data.length > 0 && (
          <ResponsiveContainer>
            <BarChart width={300} height={200} data={data}>
              <XAxis dataKey="chargeStatus" />
              <YAxis dataKey="amount" />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Stack>
    </Card>
  );
};

export default Chart;

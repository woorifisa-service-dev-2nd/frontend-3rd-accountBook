import DashBoard from './components/dashboard/DashBoard';
import LayoutContainer from './components/common/LayoutContainer';
import { createContext, useEffect, useState } from 'react';

export const AccountContext = createContext();

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('../mock.json');
      const jsonData = await response.json();
      setData(jsonData.mockData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AccountContext.Provider value={[data, setData]}>
      <LayoutContainer>
        <DashBoard />
      </LayoutContainer>
    </AccountContext.Provider>
  );
}

export default App;

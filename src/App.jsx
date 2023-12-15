import DashBoard from './components/dashboard/DashBoard';
import LayoutContainer from './components/common/LayoutContainer';
import DataList from './components/dashboard/DataList';
import ModalForm from './components/common/ModalForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import { createContext, useEffect, useState } from 'react';

export const URL = 'http://localhost:5008/mockData';

export const AccountContext = createContext();

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AccountContext.Provider value={[data, setData]}>
      <BrowserRouter>
        <LayoutContainer>
          <Routes>
            <Route path="/" element={<DashBoard />}></Route>
            <Route path="/list" element={<DataList />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <ModalForm />
        </LayoutContainer>
      </BrowserRouter>
    </AccountContext.Provider>
  );
}

export default App;

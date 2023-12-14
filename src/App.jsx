import DashBoard from './components/dashboard/DashBoard';
import LayoutContainer from './components/common/LayoutContainer';
import DataList from './components/dashboard/DataList';
import ModalForm from './components/common/ModalForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
    
function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/list" element={<DataList />}></Route>
			  	<Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ModalForm></ModalForm>
      </LayoutContainer>
    </BrowserRouter>
  );
};

export default App

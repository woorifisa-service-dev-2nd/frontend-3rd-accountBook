import DashBoard from './components/dashboard/DashBoard';
import LayoutContainer from './components/common/LayoutContainer';
import DataList from './components/dashboard/DataList';
import ModalForm from './components/common/ModalForm';
    
function App() {
  return (
    <LayoutContainer>
      <DashBoard />
      <DataList />
      <ModalForm></ModalForm>
    </LayoutContainer>
  );
}

export default App

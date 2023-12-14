
import DashBoard from './components/dashboard/DashBoard';
import LayoutContainer from './components/common/LayoutContainer';
import DataList from './components/dashboard/DataList';

function App() {
  return (
    <LayoutContainer>
      <DashBoard />
      <DataList />
    </LayoutContainer>
  );
}

export default App;

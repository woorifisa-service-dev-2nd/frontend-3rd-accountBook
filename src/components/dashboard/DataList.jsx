import { useState, useEffect, useContext } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import DataTable from './DataTable';
import { AccountContext } from '../../App';

const DataList = ({ updatedData }) => {
  const [data, setData] = useContext(AccountContext);
  const [checkedItems, setCheckedItems] = useState([]);

  // 삭제
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setCheckedItems(newData.map(() => false));
  };
  // 체크박스
  const toggleAllCheckboxes = (isChecked) => {
    setCheckedItems(Array(data.length).fill(isChecked));
  };
  const toggleSingleCheckbox = (index, isChecked) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;
    setCheckedItems(newCheckedItems);
  };
  const isAnyItemChecked = () => checkedItems.some(Boolean);
  // 모두 삭제
  const handleDeleteChecked = () => {
    const newData = data.filter((item, index) => !checkedItems[index]);
    setData(newData);
    setCheckedItems(newData.map(() => false));
  };
  // 수정
  const handleEdit = () => {
    console.log('edit');
  };
  return (
    <Flex direction="column">
      <Flex justifyContent="end">
        <Button colorScheme={isAnyItemChecked() ? 'red' : 'gray'} m={4} onClick={handleDeleteChecked} isDisabled={!isAnyItemChecked()}>
          모두 삭제
        </Button>
      </Flex>
      <DataTable data={data} checkedItems={checkedItems} toggleAllCheckboxes={toggleAllCheckboxes} toggleSingleCheckbox={toggleSingleCheckbox} handleEdit={handleEdit} handleDelete={handleDelete} />
    </Flex>
  );
};
export default DataList;

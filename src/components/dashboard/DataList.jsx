import { useState, useEffect, useContext } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import DataTable from './DataTable';
import { AccountContext } from '../../App';
import { URL } from '../../App';


const DataList = ({ updatedData }) => {
  const [data, setData] = useContext(AccountContext);
  const [checkedItems, setCheckedItems] = useState([]);

  // 삭제
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setCheckedItems(newData.map(() => false));

    fetchAPI(id);
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
    const checkedData = data.filter((item, index) => checkedItems[index]);
    const uncheckedData = data.filter((item, index) => !checkedItems[index]);

    Promise.all(checkedData.map((item) => fetchAPI(item.id)))
        .then(() => {
            setData(uncheckedData);
            setCheckedItems(uncheckedData.map(() => false));
        })
        .catch((e) => console.log(e));
    };

  const fetchAPI = (id) => {
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .catch((e) => console.log(e));
  };
  
  // // 수정
  // const handleEdit = () => {
  //   console.log('edit');
  // };

  return (
    <Flex direction="column">
      {/* NOTE : 일괄 삭제 임시 주석 */}
      <Flex justifyContent="end">
        <Button colorScheme={isAnyItemChecked() ? 'red' : 'gray'} m={4} onClick={handleDeleteChecked} isDisabled={!isAnyItemChecked()}>
          모두 삭제
        </Button>
      </Flex>

      {/* 데이터 테이블 */}
      <DataTable
        data={data}
        // NOTE : 일괄 삭제 임시 주석
        checkedItems={checkedItems}
        toggleAllCheckboxes={toggleAllCheckboxes}
        toggleSingleCheckbox={toggleSingleCheckbox}
        // handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </Flex>
  );
};
export default DataList;

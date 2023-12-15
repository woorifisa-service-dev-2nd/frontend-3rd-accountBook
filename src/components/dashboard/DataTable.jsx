import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button, Text, useDisclosure } from '@chakra-ui/react';
import { amountFormat } from '../util/amountFormat';
import ModalForm from '../common/ModalForm';

export const CHARGE_LIST = {
  food: '식비',
  living: '생활비',
  transportation: '교통비',
  etc: '기타',
  charge: '지출',
  income: '수입',
};

const DataTable = ({ size, fontSize, bgColor, data, checkedItems, toggleAllCheckboxes, toggleSingleCheckbox, handleEdit, handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemToEdit, setItemToEdit] = useState(null);

  // NOTE: 수정 기능 임시 주석
  // const handleEditClick = (item) => {
  //   setItemToEdit(item);
  //   handleEdit(onOpen);
  // };

  return (
    <>
      <Table variant="simple" size={size ? "sm" : size}>
        <Thead>
          <Tr backgroundColor={bgColor ? bgColor : 'skyblue'}>
            {toggleAllCheckboxes && checkedItems && (
              <Th>
                <Checkbox
                  isChecked={checkedItems.every(Boolean)}
                  isIndeterminate={checkedItems.some(Boolean) && !checkedItems.every(Boolean)}
                  onChange={(e) => toggleAllCheckboxes(e.target.checked)}
                ></Checkbox>
              </Th>
            )}
            <Th>
              <Text fontSize={fontSize ? fontSize : 'xl'}>날짜</Text>
            </Th>
            <Th>
              <Text fontSize={fontSize ? fontSize : 'xl'}>구분</Text>
            </Th>
            <Th>
              <Text fontSize={fontSize ? fontSize : 'xl'}>항목</Text>
            </Th>
            <Th>
              <Text fontSize={fontSize ? fontSize : 'xl'}>금액</Text>
            </Th>
            <Th>
              <Text fontSize={fontSize ? fontSize : 'xl'}>메모</Text>
            </Th>
            {/* NOTE : 수정/삭제 기능 임시 주석 */}
            {/* {handleEdit && (
              <Th>
                <Text fontSize={fontSize ? fontSize : 'xl'}>수정</Text>
              </Th>
            )}  */}
            {handleDelete && (
              <Th>
                <Text fontSize="xl">삭제</Text>
              </Th>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {data
            .map((item, index) => (
              <Tr key={item.id}>
                {toggleSingleCheckbox && (
                  <Td>
                    <Checkbox isChecked={checkedItems[index]} onChange={(e) => toggleSingleCheckbox(index, e.target.checked)}></Checkbox>
                  </Td>
                )}
                <Td>{item.date}</Td>
                <Td>{CHARGE_LIST[item.status]}</Td>
                <Td>{CHARGE_LIST[item.chargeStatus]}</Td>
                <Td>{`${amountFormat(Number(item.amount))}원`}</Td>
                <Td>{item.notes}</Td>

                {/* NOTE : 수정/삭제 기능 임시 주석 */}
                {/* {handleEdit && (
                  <Td>
                    <Button colorScheme="blue" onClick={() => handleEditClick(item)}>
                      수정
                    </Button>
                  </Td>
                )} */}
                {handleDelete && (
                  <Td>
                    <Button colorScheme="red" onClick={() => handleDelete(item.id)}>
                      삭제
                    </Button>
                  </Td>
                )}
              </Tr>
            ))
            .reverse()}
        </Tbody>
      </Table>

      <ModalForm isOpen={isOpen} onClose={onClose} itemToEdit={itemToEdit} updateMockData={handleEdit} />
    </>
  );
};
export default DataTable;

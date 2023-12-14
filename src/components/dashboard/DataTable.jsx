import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Checkbox,
    Button,
    Text,
} from '@chakra-ui/react';

const DataTable = ({ data, checkedItems, toggleAllCheckboxes, toggleSingleCheckbox, handleEdit, handleDelete }) => {
    
    // 구분, 항목 한글로
    const changeToKorean = {
        food: '식비',
        living: '생활비',
        transportation: '교통비',
        etc: '기타',
        charge: '지출',
        income: '수입',
    };

    // 콤마, 원 추가
    const addCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
    };

    return (
        <Table variant="simple" size="lg">
            <Thead>
                <Tr backgroundColor="skyblue">
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
                        <Text fontSize="xl">날짜</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xl">구분</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xl">항목</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xl">금액</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xl">메모</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xl">수정</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xl">삭제</Text>
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((item, index) => (
                    <Tr key={item.id}>
                        {toggleSingleCheckbox && (
                            <Td>
                                <Checkbox
                                    isChecked={checkedItems[index]}
                                    onChange={(e) => toggleSingleCheckbox(index, e.target.checked)}
                                ></Checkbox>
                            </Td>
                        )}
                        <Td>{item.date}</Td>
                        <Td>{changeToKorean[item.status]}</Td>
                        <Td>{changeToKorean[item.chargeStatus]}</Td>
                        <Td>{addCommas(item.amount)}</Td>
                        <Td>{item.notes}</Td>
                        <Td>
                            {handleEdit && (
                                <Button colorScheme="blue" onClick={() => handleEdit(item.id)}>
                                    수정
                                </Button>
                            )}
                        </Td>
                        <Td>
                            {handleDelete && (
                                <Button colorScheme="red" onClick={() => handleDelete(item.id)}>
                                    삭제
                                </Button>
                            )}
                        </Td>
                    </Tr>
                )).reverse()}
            </Tbody>
        </Table>
    );
};

export default DataTable;

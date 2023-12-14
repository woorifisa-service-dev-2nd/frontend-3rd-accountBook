import React, { useState, useEffect } from 'react';
import {
    Flex,
    Heading,
    Button
} from '@chakra-ui/react';
import DataTable from './DataTable';

const DataList = () => {
    const [data, setData] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    // 목데이터 불러오기
    const fetchData = async () => {
        try {
            const response = await fetch('../../mock.json');
            const jsonData = await response.json();
            setData(jsonData.mockData);
            setCheckedItems(Array(jsonData.mockData.length).fill(false));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
        console.log('edit')
    }

    return (
        <Flex direction="column">
            <Heading size="lg" m={4}>
                수입/지출 내역
            </Heading>
            <Flex justifyContent="end">
                {isAnyItemChecked() && (
                    <Button colorScheme="red" m={4} onClick={handleDeleteChecked}>
                        모두 삭제
                    </Button>
                )}
            </Flex>
            <DataTable
                data={data}
                checkedItems={checkedItems}
                toggleAllCheckboxes={toggleAllCheckboxes}
                toggleSingleCheckbox={toggleSingleCheckbox}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </Flex>
    );
};

export default DataList;

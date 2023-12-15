import { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { URL } from '../../App';
const ModalForm = ({ isOpen, onOpen, onClose, updateMockData, itemToEdit }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const [expenseType, setExpenseType] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      handleEdit(itemToEdit);
    }
  }, [itemToEdit]);

  const handleExpenseTypeChange = (e) => {
    setExpenseType(e.target.value);
    setExpenseCategory('');
  };

  const handleExpenseCategoryChange = (e) => {
    setExpenseCategory(e.target.value);
  };

  const [formData, setFormData] = useState({
    id: self.crypto.randomUUID(),
    date: '',
    status: '',
    chargeStatus: '',
    amount: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = (itemToEdit) => {
    setFormData({
      id: itemToEdit.id,
      date: itemToEdit.date,
      status: itemToEdit.status,
      chargeStatus: itemToEdit.chargeStatus,
      amount: itemToEdit.amount,
      notes: itemToEdit.notes,
    });

    onOpen();
  };

  const fetchSave = (body) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((e) => console.log(e));
  };

  const handleSave = () => {
    const status = expenseType === 'income' ? 'income' : 'charge';
    const chargeStatus = status === 'charge' ? expenseCategory : '';
    const newData = {
      id: self.crypto.randomUUID(),
      date: formData.date,
      status,
      chargeStatus,
      amount: formData.amount,
      notes: formData.notes,
    };
    fetchSave(newData);

    updateMockData(newData);
    setFormData({
      id: '',
      date: '',
      status: '',
      chargeStatus: '',
      amount: '',
      notes: '',
    });
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>내역 추가</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>날짜</FormLabel>
              <Input type="date" name="date" id="start" value={formData.date} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>유형</FormLabel>
              <Select placeholder="유형을 선택하세요." onChange={handleExpenseTypeChange} value={expenseType}>
                <option value="income">수입</option>
                <option value="charge">지출</option>
              </Select>
            </FormControl>
            {expenseType === 'charge' && (
              <FormControl mt={4}>
                <FormLabel>항목</FormLabel>
                <Select placeholder="항목을 선택하세요." onChange={handleExpenseCategoryChange} value={expenseCategory}>
                  <option value="food">식비</option>
                  <option value="transportation">교통비</option>
                  <option value="living">생활비</option>
                  <option value="etc">기타</option>
                </Select>
              </FormControl>
            )}
            <FormControl mt={4}>
              <FormLabel>메모</FormLabel>
              <Input placeholder="메모를 입력하세요." name="notes" value={formData.notes} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>금액</FormLabel>
              <NumberInput>
                <NumberInputField placeholder="금액을 입력하세요." name="amount" value={formData.amount} onChange={handleInputChange} />
              </NumberInput>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              저장
            </Button>
            <Button onClick={onClose}>취소</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalForm;

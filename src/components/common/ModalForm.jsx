import React from 'react'
import { Input, Button, Select } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

import {
    NumberInput,
    NumberInputField,
  } from '@chakra-ui/react'

const ModalForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>내역 추가</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl mt={4}>
                <FormLabel>날짜</FormLabel>
                {/* 날짜 골라서 입력 */}
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>유형</FormLabel>
                <Select placeholder='유형을 선택하세요.'>
                    <option value='income'>수입</option>
                    <option value='charge'>지출</option>
                </Select>
                </FormControl>

                <FormControl  mt={4}>
                <FormLabel>메모</FormLabel>
                <Input placeholder='메모를 입력하세요.' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>금액</FormLabel>
                <NumberInput>
                    <NumberInputField placeholder='금액을 입력하세요.'/>
                </NumberInput>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                저장
                </Button>
                <Button onClick={onClose}>취소</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
        )
}

export default ModalForm
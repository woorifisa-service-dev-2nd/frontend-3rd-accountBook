import { Select } from '@chakra-ui/react';
import { MONTH_LIST } from '../constant';

const SelectBox = () => {
  const month = new Date().getMonth() + 1;

  return (
    <Select w={120} defaultValue={month} size={'lg'}>
      {MONTH_LIST.map((item, index) => (
        <option key={index} value={item} defaultChecked={month === item}>
          {item}월
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;

import { Button, Flex, Input } from 'antd';
import { useState } from 'react';
import { sendFileReq } from '../net/file.request';
import { genArray, genRequest } from '../util/random.str';

function Board() {
  const [inputValue, setInputValue] = useState('0');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(value) || value === '' || value === '-') {
      setInputValue(value);
    }
  };

  const onClick = () => {
    const num = parseInt(inputValue);
    if (num > 0) {
      const items = genArray(num);
      const request = genRequest(items);
      sendFileReq(request);
    }
  };

  return (
    <div>
      <Flex justify="center">
        <Input
          placeholder="Basic usage"
          onChange={onInputChange}
          value={inputValue}
        />
      </Flex>
      <Flex justify="center">
        <Button type="primary" onClick={onClick}>
          Primary Button
        </Button>
      </Flex>
    </div>
  );
}

export default Board;

import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const WriteInputStyle = styled.div`
  border: 1px solid rgba(231, 231, 234);
  border-radius: 8px;
  height: 48px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 18px;
    border-radius: 8px;
    font-size: 18px;
    overflow: auto;
  }
`;

const ButtonStyle = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
export default function WriteInput(params) {
  const [title, setTitle] = useState('');
  const [over, setOver] = useState(false);

  const handleChangeContnet = (event) => {
    setTitle(event.target.value);
  };

  const saveTodoContent = (e) => {
    e.preventDefault();
    const data = { title, check: false, memo: '' };
    //local storage 사용
    let todoList = localStorage.getItem('todoList');
    if (todoList && Array.isArray(todoList)) {
      data[0].id = todoList.length;
      todoList.push(data);
      localStorage.setItem('todoList');
    } else {
      const arr = [];
      arr.push(data);
      localStorage.setItem('todoList', JSON.stringify(arr));
    }
    window.reload();
  };
  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      saveTodoContent(e);
    }
  };
  return (
    <WriteInputStyle>
      <input
        placeholder="할 일을 입력하세요."
        value={title}
        onChange={handleChangeContnet}
        onKeyUp={onKeyUp}
      />

      <ButtonStyle>
        <FontAwesomeIcon
          icon={faPencil}
          size="2x"
          color={over ? 'brown' : 'gray'}
          onMouseOver={() => {
            setOver(true);
          }}
          onMouseLeave={() => {
            setOver(false);
          }}
          onClick={saveTodoContent}
        />
      </ButtonStyle>
    </WriteInputStyle>
  );
}

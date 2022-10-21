import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faDeleteLeft,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Confirm from './common/Confirm';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { useDispatch } from 'react-redux';
import { ModifyTodo, RemoveTodo } from '../actions/index';

const boxShow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const ListStyle = styled.div`
  margin: 20px 0;
  background-color: white;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(231, 231, 234);
  display: flex;
  animation: ${boxShow} 1s;
  div {
    padding: 10px;
  }
`;
const CheckBox = styled.div`
  flex-grow: 0.5;
`;
const ContentBox = styled.div`
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: larger;
  textarea {
    border: none;
    border-radius: 4px;
    resize: none;
  }
`;
const DeleteBox = styled.div`
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export default function List({ content }) {
  const [deleteOver, setDeleteOver] = useState(false);
  const [saveOver, setOver] = useState(false);

  const [memo, setMemo] = useState(content.memo);
  const dispatch = useDispatch();
  const id = content.id;
  let check = content.check;

  const handleCheckClick = () => {
    dispatch(ModifyTodo(id, !check, memo));
  };

  const deleteTodo = (id) => {
    dispatch(RemoveTodo(id));
  };
  const handleDeleteClick = () => {
    const title = '메모 삭제하기';
    const contents = `${content.title}을(를) 끝내셨나요?`;
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Confirm
            onClose={onClose}
            title={title}
            content={contents}
            arg={id}
            callback={deleteTodo}
          />
        );
      },
    });
  };
  const handleSaveClick = () => {
    dispatch(ModifyTodo(id, check, memo));
  };
  const handleChangeMemo = (event) => {
    setMemo(event.target.value);
  };
  return (
    <ListStyle>
      <CheckBox>
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="2x"
          color={check ? 'green' : 'gray'}
          onClick={handleCheckClick}
        />
      </CheckBox>

      <ContentBox>
        {content.title}
        <textarea
          value={memo}
          placeholder="메모 입력 후 저장을 눌러주세요."
          onChange={handleChangeMemo}
        />
      </ContentBox>
      <DeleteBox>
        <FontAwesomeIcon
          icon={faDeleteLeft}
          size="2x"
          color={deleteOver ? 'pink' : 'gray'}
          onMouseOver={() => {
            setDeleteOver(true);
          }}
          onMouseLeave={() => {
            setDeleteOver(false);
          }}
          onClick={handleDeleteClick}
        />
        <FontAwesomeIcon
          icon={faDownload}
          size="2x"
          color={saveOver ? 'skyblue' : 'gray'}
          onMouseOver={() => {
            setOver(true);
          }}
          onMouseLeave={() => {
            setOver(false);
          }}
          onClick={handleSaveClick}
        />
      </DeleteBox>
    </ListStyle>
  );
}

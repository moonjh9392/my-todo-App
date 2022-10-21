import styled from 'styled-components';
import Header from './common/Header';
import TodoList from './TodoList';
import WriteInput from './WriteInput';

import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, AllChangeTodo } from '../actions/index';
import { useRef } from 'react';

const MainStyle = styled.div`
  .menu {
    position: relative;
    margin: 0 auto;
    max-width: 718px;

    @media screen and (max-width: 768px) {
      padding: 128px 24px;
      top: -128px;
    }
  }

  .background {
    background-color: whitesmoke;
    padding-bottom: 80px;
    padding-top: 40px;
    height: 100vh;
    @media screen and (min-height: 1200px) {
      height: 100%;
    }
  }
`;

const Main = () => {
  const todoList = useSelector((state) => state.todoReducer).todoList;
  const checkbox = useRef();
  const dispatch = useDispatch();
  const AddTodoList = (id, title) => {
    dispatch(AddTodo(id, title));
  };
  const maxId = todoList.length !== 0 ? todoList.slice(-1)[0].id + 1 : 1;
  const allComplet = () => {
    let checked = checkbox.current.checked;
    dispatch(AllChangeTodo(checked));
  };
  return (
    <MainStyle>
      <Header />
      <div className="background">
        <div className="menu">
          <WriteInput AddTodoList={AddTodoList} maxId={maxId} />
          <input type="checkbox" ref={checkbox} onChange={allComplet} />
          {`전체 완료`}
          <TodoList todoList={todoList} />
        </div>
      </div>
    </MainStyle>
  );
};

export default Main;

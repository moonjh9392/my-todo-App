import styled from 'styled-components';
import Loading from './common/Loading';
import List from './List';

const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export default function TodoList({ todoList }) {
  return (
    <TodoListStyle>
      {todoList ? (
        todoList.map((ele) => {
          return <List key={ele.id} content={ele} />;
        })
      ) : (
        <Loading />
      )}
    </TodoListStyle>
  );
}

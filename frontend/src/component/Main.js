import styled from 'styled-components';
import Header from './common/Header';
import TodoList from './TodoList';
import WriteInput from './WriteInput';

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
  return (
    <MainStyle>
      <Header />
      <div className="background">
        <div className="menu">
          {/* <Outlet /> */}
          <WriteInput />
          <TodoList />
        </div>
      </div>
    </MainStyle>
  );
};

export default Main;

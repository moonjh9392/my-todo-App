import styled from 'styled-components';
import { useEffect, useState } from 'react';

const NavBarStyle = styled.nav`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  height: 60px;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 24px;
  }

  .navbar-content {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .navbar-logo-container {
    display: inline-block;

    width: 30px;
    height: 30px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const NavBar = () => {
  const [border, setBorder] = useState(false);

  const onScrollHandler = () => {
    if (window.scrollY > 0) setBorder((prev) => true);
    else setBorder((prev) => false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <NavBarStyle border={border}>
      <ul className="navbar-container">
        <li className="navbar-content">
          <span className="navbar-logo-container"></span>
        </li>
        <li className="navbar-content">배포테스트</li>
      </ul>
    </NavBarStyle>
  );
};

export default NavBar;

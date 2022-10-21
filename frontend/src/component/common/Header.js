import styled from 'styled-components';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  border-bottom: ${(props) =>
    `1px solid ${props.border ? 'rgba(0, 27, 55, 0.1)' : 'transparent'}}`};
`;

const Header = () => {
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
    <HeaderStyle border={border}>
      <NavBar />
    </HeaderStyle>
  );
};

export default Header;

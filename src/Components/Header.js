import React from "react";
import { Logo } from "./Icons";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  padding: 0 1rem;
  background-color: ${props => props.theme.bgColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
`;

const HeaderLeft = styled.div`
  display: flex;
  padding: 1rem 0;
`;

const Header = () => {
  return (
    <Container>
      <HeaderLeft>
        <Logo />
      </HeaderLeft>
    </Container>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: ${props => props.theme.blueColor};
  border-radius: ${props => props.theme.borderRadius};
  color: #fff;
  font-size: 2rem;
  line-height: 4.8rem;
  padding: 0 1.6rem;
  font-weight: 600;
`;

const Button = ({ className, onClick, text }) => {
  return (
    <Container className={className} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;

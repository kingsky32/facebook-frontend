import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.lightGreyColor};
`;

export default () => <Container>Home</Container>;

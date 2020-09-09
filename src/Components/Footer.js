import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 90rem;
  padding-top: 2rem;
  margin: 0 auto;
`;

const Span = styled.span`
  font-size: 1.1rem;
  display: block;
  margin: 2rem 0;
`;

const Footer = () =>
  <Container>
    <Span>Facebook &copy; 2020</Span>
  </Container>;

export default Footer;

import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button";
import Logo from "../../Assets/Images/logo.svg";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";

const Wrapper = styled.div`background-color: ${props => props.theme.lightGreyColor};`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 8rem 0;
  width: 40rem;
  margin: 0 auto;
  align-items: center;
`;

const Image = styled.img`
  width: 25rem;
  margin-bottom: 1.5rem;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  padding: 2.5rem 1.8rem 3rem;
  ${props => props.theme.boxShadow};
`;

const Title = styled.div`
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
`;

const EInput = styled(Input)`
  margin-bottom: 1.5rem;
`;

const LinkContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const ELink = styled(Link)`
  color: ${props => props.theme.blueColor};
  font-size: 1.4rem;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export default () =>
  <Wrapper>
    <Container>
      <Helmet>
        <title>Facebook - Log In or Sign Up</title>
      </Helmet>
      <Image src={Logo} />
      <FormWrapper>
        <Title>Log Into Facebook</Title>
        <Form onSubmit={() => null}>
          <EInput placeholder="Email" />
          <EInput placeholder="Password" />
          <Button onClick={() => null} text="Log In" />
          <LinkContainer>
            <ELink to="#">Forgot account?</ELink> · <ELink to="#">Sign up for Facebook</ELink>
          </LinkContainer>
        </Form>
      </FormWrapper>
    </Container>
  </Wrapper>;

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
  padding: 8rem 0;
  width: 90rem;
  margin: 0 auto;
  align-items: center;
`;

const TitleWrapper = styled.div`flex: 1;`;

const Image = styled.img`
  width: 25rem;
  margin-left: -2.5rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 3.2rem;
  font-weight: 600;
`;

const FormWrapper = styled.div`
  display: flex;
  flex: 0 0 40rem;
  flex-flow: column nowrap;
  margin-left: 2.5rem;
  background-color: #fff;
  padding: 1.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  border-radius: ${props => props.theme.borderRadius};
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
`;

const EInput = styled(Input)`
  margin-bottom: 1.5rem;
`;

const ELink = styled(Link)`
  color: ${props => props.theme.blueColor};
  display: block;
  text-align: center;
  font-size: 1.4rem;
  margin-top: 2rem;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const Hr = styled.hr`
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.lightGreyColor};
`;

const EButton = styled(Button)`
  background-color: ${props => props.theme.greenColor};
  transition: .25s background-color ease;
  font-size: 1.7rem;
  &:hover {
    background-color: ${props => props.theme.darkGreenColor};
  }
`;

export default ({ email, password, onSubmit }) =>
  <Wrapper>
    <Container>
      <Helmet>
        <title>Facebook - Log In or Sign Up</title>
      </Helmet>
      <TitleWrapper>
        <Image src={Logo} />
        <Title>Connect with friends and the world around you on Facebook.</Title>
      </TitleWrapper>
      <FormWrapper>
        <Form onSubmit={onSubmit}>
          <EInput placeholder="Email" value={email.value} onChange={email.onChange} />
          <EInput
            placeholder="Password"
            type="password"
            value={password.value}
            onChange={password.onChange}
          />
          <Button onClick={() => null} text="Log In" />
          <ELink to="#">Forgot account?</ELink>
          <Hr />
          <EButton onClick={() => null} text="Create New Account" />
        </Form>
      </FormWrapper>
    </Container>
  </Wrapper>;

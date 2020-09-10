import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button";
import Logo from "../../Assets/Images/logo.svg";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import ModalSignUp from "../../Components/ModalSignUp";
import PropTypes from "prop-types";

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
  padding: 1.8rem;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.boxShadow};
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

const AuthPresenter = ({
  username,
  firstName,
  lastName,
  email,
  password,
  onSubmit,
  onSignUp,
  isSignUp,
  onToggleSignUp
}) =>
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
          <Button text="Log In" />
        </Form>
        <ELink to="#">Forgot account?</ELink>
        <Hr />
        <EButton onClick={onToggleSignUp} text="Create New Account" />
      </FormWrapper>
    </Container>
    {isSignUp &&
      <ModalSignUp
        username={username}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        onSubmit={onSignUp}
        onToggleSignUp={onToggleSignUp}
      />}
  </Wrapper>;

AuthPresenter.propTypes = {
  username: PropTypes.object.isRequired,
  firstName: PropTypes.object.isRequired,
  lastName: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSignUp: PropTypes.bool.isRequired,
  onToggleSignUp: PropTypes.func.isRequired
};

export default AuthPresenter;

import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button";
import Logo from "../../Assets/Images/Icons/logo.svg";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
  border-radius: ${props => props.theme.borderRadius};
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

const LoginPresenter = ({ onSubmit, email, password }) =>
  <Wrapper>
    <Container>
      <Helmet>
        <title>Prismabook - Log In or Sign Up</title>
      </Helmet>
      <Image src={Logo} />
      <FormWrapper>
        <Title>Log Into Prismabook</Title>
        <Form onSubmit={onSubmit}>
          <EInput placeholder="Email" value={email.value} onChange={email.onChange} required />
          <EInput
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
            required
          />
          <Button text="Log In" />
        </Form>
        <LinkContainer>
          <ELink to="#">Forgot account?</ELink> · <ELink to="#">Sign up for Prismabook</ELink>
        </LinkContainer>
      </FormWrapper>
    </Container>
  </Wrapper>;

LoginPresenter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
};

export default LoginPresenter;

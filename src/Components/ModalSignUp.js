import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .8);
  z-index: 500;
`;

const Container = styled.div`
  width: 43rem;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.boxShadow};
  display: flex;
  flex-flow: column nowrap;
`;

const TitleContainer = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
  position: relative;
`;

const Title = styled.div`
  font-size: 3.2rem;
  line-height: 3rem;
  color: ${props => props.theme.blackColor};
  font-weight: 800;
  margin-bottom: 1rem;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.greyColor};
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  padding: 1.5rem;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  background-color: #f5f6f7;
  border: 1px solid #ccd0d5;
  &::placeholder {
    color: #8d949e;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  ${Input} {
    &:not(:last-child) {
      margin-right: 1.1rem;
    }
  }
  &:not(:last-child) {
    margin-bottom: 1.1rem;
  }
`;

const EButton = styled(Button)`
  background-color: ${props => props.theme.greenColor};
  transition: .25s background-color ease;
  font-size: 1.7rem;
  padding: 0;
  width: 20rem;
  line-height: 3.6rem;
  font-weight: 700;
  margin: .5rem 0;
  &:hover {
    background-color: ${props => props.theme.darkGreenColor};
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: .5;
`;

const ModalSignUp = ({
  onSubmit,
  username,
  firstName,
  lastName,
  email,
  password,
  onToggleSignUp
}) => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <CloseBtn onClick={onToggleSignUp}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </CloseBtn>
          <Title>Sign Up</Title>
          <SubTitle>It's quick and easy.</SubTitle>
        </TitleContainer>
        <Form onSubmit={onSubmit}>
          <Row>
            <Input placeholder="First name" value={firstName.value} onChange={firstName.onChange} />
            <Input placeholder="Last name" value={lastName.value} onChange={lastName.onChange} />
          </Row>
          <Row>
            <Input placeholder="Username" value={username.value} onChange={username.onChange} />
          </Row>
          <Row>
            <Input placeholder="Email" value={email.value} onChange={email.onChange} />
          </Row>
          <Row>
            <Input
              placeholder="New password"
              type="password"
              value={password.value}
              onChange={password.onChange}
            />
          </Row>
          <EButton text="Sign Up" />
        </Form>
      </Container>
    </Wrapper>
  );
};

export default ModalSignUp;

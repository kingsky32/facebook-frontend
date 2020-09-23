import React from "react";
import { useMutation } from "react-apollo-hooks";
import styled from "styled-components";
import { LOG_OUT } from "../../ShardQueries";
import { LogOut } from "../Icons";

const Container = styled.div`
  width: 35rem;
  min-height: 3.6rem;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.boxShadow};
  padding: .8rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 6rem;
  right: 1.5rem;
  z-index: 5;
`;

const Options = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  z-index: 10;
`;

const Option = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: .8rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: .25s background-color ease;
  cursor: pointer;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.lightGreyColor};
  }
`;

const OptionText = styled.span`
  display: block;
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const AccountOption = () => {
  const [logOut] = useMutation(LOG_OUT);
  return (
    <Container>
      <Options>
        <Option onClick={logOut}>
          <LogOut />
          <OptionText>Log Out</OptionText>
        </Option>
      </Options>
    </Container>
  );
};

export default AccountOption;

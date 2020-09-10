import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../Input";

const Container = styled.div`
  ${props => props.theme.feedBox};
  padding: 1rem 1.5rem;
`;

const ELink = styled(Link)`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  overflow: hidden;
  margin-right: 1rem;
  display: block;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

const EInput = styled(Input)`
  flex: 1;
  height: 4rem;
  padding: 1rem;
  border-radius: 4rem;
  background-color: ${props => props.theme.lightGreyColor};
  border: 0;
  font-size: 1.5rem;
  &:focus {
    box-shadow: 0 0 0 0;
  }
`;

const CreatePostFeed = ({ id, avatar, username }) => {
  return (
    <Container>
      <InputArea>
        <ELink to={`/${id}`}>
          <Avatar src={avatar} />
        </ELink>
        <EInput value="" onChange={() => null} placeholder={`What's on your mind, ${username}?`} />
      </InputArea>
    </Container>
  );
};

export default CreatePostFeed;

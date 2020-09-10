import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputHome from "../InputRound";
import PropTypes from "prop-types";

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

const CreatePostFeed = ({ id, avatar, username }) => {
  return (
    <Container>
      <InputArea>
        <ELink to={`/${id}`}>
          <Avatar src={avatar} />
        </ELink>
        <InputHome
          value=""
          onChange={() => null}
          placeholder={`What's on your mind, ${username}?`}
        />
      </InputArea>
    </Container>
  );
};

CreatePostFeed.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default CreatePostFeed;

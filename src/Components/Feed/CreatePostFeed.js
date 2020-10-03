import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputRound from "../InputRound";
import PropTypes from "prop-types";
import CreatePostFeedButton from "./CreatePostFeedButton";
import { LiveVideo, Photo, Feeling } from "../Icons";
import Avatar from "../Avatar";
import { connect } from "react-redux";

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

const ButtonArea = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const EInputRound = styled(InputRound)`
  cursor: pointer;
  transition: .25s background-color ease;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.lightDarkGreyColor};
  }
`;

const CreatePostFeed = ({ prismabook: { me: { id, avatar, username } }, onCreatePost }) => {
  return (
    <Container>
      <InputArea>
        <ELink to={`/profile/${id}/timeline`}>
          <Avatar url={avatar} size="4rem" />
        </ELink>
        <EInputRound
          value=""
          onChange={() => null}
          onClick={onCreatePost}
          placeholder={`What's on your mind, ${username}?`}
        />
      </InputArea>
      <ButtonArea>
        <CreatePostFeedButton
          onClick={() => null}
          icon={<LiveVideo size="2.4rem" />}
          text="Live Video"
        />
        <CreatePostFeedButton
          onClick={() => null}
          icon={<Photo size="2.4rem" />}
          text="Photo/Video"
        />
        <CreatePostFeedButton
          onClick={() => null}
          icon={<Feeling size="2.4rem" />}
          text="Feeling/Activity"
        />
      </ButtonArea>
    </Container>
  );
};

CreatePostFeed.propTypes = {
  onCreatePost: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { prismabook: state };
};

export default connect(mapStateToProps)(CreatePostFeed);

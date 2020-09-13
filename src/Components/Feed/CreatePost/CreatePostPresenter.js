import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../Avatar";
import Button from "../../Button";
import CircleButton from "../../CircleButton";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightGreyColor}75;
  z-index: 10000;
  overflow: hidden;
`;

const Container = styled.form`
  width: 50rem;
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.boxShadow};
  position: relative;
`;

const Title = styled.div`
  height: 6rem;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;

const MetaContainer = styled.div`
  display: flex;
  padding: 1.5rem 0;
`;

const Meta = styled.div`margin-left: .5rem;`;

const Username = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Input = styled.textarea`
  height: 15rem;
  resize: none;
  font-size: 2.4rem;
  line-height: 3rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  padding: 0;
  &::placeholder {
    color: ${props => props.theme.lightDarkGreyColor};
  }
`;

const CloseButton = styled(CircleButton)`
  color: ${props => props.theme.greyColor};
  position: absolute;
  top: 1rem;
  right: 1.5rem;
`;

const CreatePostPresenter = ({
  inputRef,
  id,
  avatar,
  username,
  caption,
  isDisabled,
  onKeyDown,
  onClose,
  modalRef,
  onCreatePost,
  onSubmit
}) => {
  return (
    <Wrapper ref={modalRef} onClick={onClose}>
      <Container onSubmit={onSubmit}>
        <Title>Create Post</Title>
        <CloseButton onClick={onCreatePost} icon={<FontAwesomeIcon icon={faTimes} size="2x" />} />
        <MetaContainer>
          <Link to={id}>
            <Avatar url={avatar} />
          </Link>
          <Meta>
            <Username>
              {username}
            </Username>
          </Meta>
        </MetaContainer>
        <Input
          ref={inputRef}
          value={caption.value}
          onKeyDown={onKeyDown}
          onChange={caption.onChange}
          placeholder={`What's on your mind, ${username}?`}
        />
        <Button text="Post" disabled={isDisabled} />
      </Container>
    </Wrapper>
  );
};

export default CreatePostPresenter;

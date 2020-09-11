import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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

const Icon = styled.div`margin-right: 1rem;`;

const Text = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.greyColor};
`;

const CreatePostFeedButton = ({ icon, text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon>
        {icon}
      </Icon>
      <Text>
        {text}
      </Text>
    </Container>
  );
};

CreatePostFeedButton.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CreatePostFeedButton;

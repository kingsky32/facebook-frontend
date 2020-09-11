import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: .8rem;
  ${props => props.theme.feedBox};
  > a {
    display: flex;
    align-items: center;
    padding: .7rem;
    border-radius: ${props => props.theme.borderRadius};
    transition: .25s background-color ease;
    &:hover {
      transition-duration: 0s;
      background-color: ${props => props.theme.lightGreyColor};
    }
  }
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.blueColor}15;
  color: ${props => props.theme.blueColor};
  margin-right: 1rem;
`;

const TextWrapper = styled.div`flex: 1;`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  color: ${props => props.theme.greyColor};
  margin-bottom: .5rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.greyColor};
`;

const CreateAStory = () => {
  return (
    <Container>
      <Link to="/stories/create">
        <Icon>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </Icon>
        <TextWrapper>
          <Title>Create a Story</Title>
          <Text>Share a photo or write something</Text>
        </TextWrapper>
      </Link>
    </Container>
  );
};

export default CreateAStory;

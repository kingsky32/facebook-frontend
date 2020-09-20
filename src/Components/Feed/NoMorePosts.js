import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 3rem;
  align-items: center;
  ${props => props.theme.feedBox};
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.greyColor};
  text-align: center;
  margin-bottom: .5rem;
`;

const Text = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  color: ${props => props.theme.greyColor};
  text-align: center;
  margin-bottom: 2.5rem;
`;

const EButton = styled(Button)`
  line-height: 3.5rem;
  font-size: 1.5rem;
  &:hover {
    background-color: ${props => props.theme.blueHoverColor};
  }
`;

const NoMorePosts = () => {
  return (
    <Container>
      <Title>No More Posts</Title>
      <Text>Add more friends to see more posts in your News Feed.</Text>
      <Link to="/friends/home">
        <EButton text="Find Friends" />
      </Link>
    </Container>
  );
};

export default NoMorePosts;

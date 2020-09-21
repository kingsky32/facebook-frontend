import React from "react";
import styled from "styled-components";
import FriendsCard from "./FriendsCard";

const Container = styled.div`
  padding: .8rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.lightGreyColor};
  }
`;

const Title = styled.span`
  display: block;
  padding: .8rem .8rem 0;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FriendsNavigationContainer = ({ title, friends }) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      {friends}
    </Container>
  );
};

export default FriendsNavigationContainer;

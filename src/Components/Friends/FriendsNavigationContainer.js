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

const FriendsNavigationContainer = ({
  title,
  friends,
  onConfirm,
  onAddFriend,
  onDelete,
  onRemove,
  paramId
}) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      {friends.map(friend =>
        <FriendsCard
          key={friend.id}
          paramId={paramId}
          uid={friend.opponent.id}
          avatar={friend.opponent.avatar}
          username={friend.opponent.username}
          createdAt={friend.createdAt}
          onConfirm={onConfirm}
          onAddFriend={onAddFriend}
          onDelete={onDelete}
          onRemove={onRemove}
        />
      )}
    </Container>
  );
};

export default FriendsNavigationContainer;

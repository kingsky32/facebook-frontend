import { gql } from "apollo-boost";
import React from "react";
import { useMutation } from "react-apollo-hooks";
import { connect } from "react-redux";
import styled from "styled-components";
import FriendsCard from "./FriendsCard";

const CONFIRM_FRIEND = gql`
  mutation confirmFriend($id: String!) {
    confirmFriend(id: $id)
  }
`;

const Container = styled.div``;

const Title = styled.span`
  display: block;
  padding: 0 1.6rem;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FriendRequests = ({
  facebook: { me: { requestFriends } },
  match: { params: { id: paramId } }
}) => {
  const [confirmFriendMutation] = useMutation(CONFIRM_FRIEND, {
    variables: {
      id: requestFriends.id
    }
  });
  const onConfirm = async e => {
    e.preventDefalut();
    try {
      await confirmFriendMutation();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    requestFriends &&
    requestFriends.length > 0 &&
    <Container>
      <Title>
        {requestFriends.length} Friend Requests
      </Title>
      {requestFriends.map(friend =>
        <FriendsCard
          key={friend.id}
          paramId={paramId}
          uid={friend.opponent.id}
          avatar={friend.opponent.avatar}
          username={friend.opponent.username}
          createdAt={friend.createdAt}
          onConfirm={onConfirm}
        />
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(FriendRequests);

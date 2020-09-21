import { gql } from "apollo-boost";
import React from "react";
import { useMutation } from "react-apollo-hooks";
import { connect } from "react-redux";
import FriendsNavigationContainer from "./FriendsNavigationContainer";

const CONFIRM_FRIEND = gql`
  mutation confirmFriend($id: String!) {
    confirmFriend(id: $id)
  }
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
    <FriendsNavigationContainer
      title={`${requestFriends.length} Friend Requests`}
      friends={requestFriends}
      paramId={paramId}
      onConfirm={onConfirm}
      onDelete={() => null}
    />
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(FriendRequests);

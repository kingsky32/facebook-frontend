import React from "react";
import { connect } from "react-redux";
import FriendsNavigationContainer from "./FriendsNavigationContainer";

const FriendsPeople = ({
  facebook: { me: { requestFriends } },
  match: { params: { id: paramId } }
}) => {
  return (
    requestFriends &&
    requestFriends.length > 0 &&
    <FriendsNavigationContainer
      title="People You May Know"
      friends={requestFriends}
      paramId={paramId}
      onAddFriend={() => null}
      onRemove={() => null}
    />
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(FriendsPeople);

import React from "react";
import { connect } from "react-redux";
import FriendsCard from "./FriendsCard";
import FriendsNavigationContainer from "./FriendsNavigationContainer";

const FriendRequests = ({
  facebook: { me: { requestFriends } },
  match: { params: { id: paramId } }
}) => {
  return requestFriends
    ? requestFriends.length > 0 &&
      <FriendsNavigationContainer
        title={`${requestFriends.length} Friend Requests`}
        friends={requestFriends.map(friend =>
          <FriendsCard
            key={friend.id}
            paramId={paramId}
            uid={friend.opponent.id}
            avatar={friend.opponent.avatar}
            username={friend.opponent.username}
            createdAt={friend.createdAt}
            isFriend={friend.opponent.isFriend}
          />
        )}
      />
    : null;
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(FriendRequests);

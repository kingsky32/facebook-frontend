import React from "react";
import { connect } from "react-redux";
import FriendsCard from "./FriendsCard";
import FriendsNavigationContainer from "./FriendsNavigationContainer";

const FriendRequests = ({ prismabook: { me }, match: { params: { id: paramId } } }) => {
  return me.requestFriends
    ? me.requestFriends.length > 0 &&
      <FriendsNavigationContainer
        title={`${me.requestFriends.length} Friend Requests`}
        friends={me.requestFriends.map(friend =>
          <FriendsCard
            key={friend.id}
            paramId={paramId}
            uid={friend.opponent.id}
            avatar={friend.opponent.avatar}
            username={friend.opponent.username}
            createdAt={friend.createdAt}
            isFriend={friend.opponent.isFriend}
            isRequestFriend={true}
          />
        )}
      />
    : null;
};

const mapStateToProps = state => {
  return { prismabook: state };
};

export default connect(mapStateToProps)(FriendRequests);

import React from "react";
import { connect } from "react-redux";
import FriendsCard from "./FriendsCard";
import FriendsNavigationContainer from "./FriendsNavigationContainer";

const FriendsPeople = ({
  facebook: { me: { peopleYouMayKnow } },
  match: { params: { id: paramId } }
}) => {
  return peopleYouMayKnow
    ? peopleYouMayKnow.length > 0 &&
      <FriendsNavigationContainer
        title="People You May know"
        friends={peopleYouMayKnow.map(friend =>
          <FriendsCard
            key={friend.id}
            paramId={paramId}
            uid={friend.id}
            avatar={friend.avatar}
            username={friend.username}
            createdAt={friend.createdAt}
            isFriend={friend.isFriend}
            isRequestFriend={friend.isRequestFriend}
          />
        )}
      />
    : null;
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(FriendsPeople);

import React from "react";
import FriendsPresenter from "./FriendsPresenter";

const FriendsContainer = ({ match, toggleFriend }) => {
  return <FriendsPresenter match={match} />;
};

export default FriendsContainer;

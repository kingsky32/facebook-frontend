import React from "react";
import { connect } from "react-redux";
import { toggleFriend } from "../../store";
import FriendsPresenter from "./FriendsPresenter";

const FriendsContainer = ({ match, facebook: { me }, toggleFriend }) => {
  return <FriendsPresenter peopleData={me.peopleYouMayKnow} match={match} />;
};

const mapStateToProps = state => {
  return { facebook: state };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFriend: friend => dispatch(toggleFriend(friend))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);

import React from "react";
import { connect } from "react-redux";
import FriendsPresenter from "./FriendsPresenter";

const FriendsContainer = ({ match, facebook: { me } }) => {
  return <FriendsPresenter peopleData={me.peopleYouMayKnow} match={match} />;
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(FriendsContainer);

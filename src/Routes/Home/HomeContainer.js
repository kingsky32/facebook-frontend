import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomePresenter from "./HomePresenter";
import { addFeed } from "../../store";
import { useQuery } from "react-apollo-hooks";
import { SEE_FEED } from "./HomeQueries";

const HomeContainer = ({ facebook: { me, feeds }, addFeed }) => {
  const { data, loading } = useQuery(SEE_FEED);
  useEffect(
    () => {
      !loading && data && data.seeFeed && data.seeFeed.forEach(e => addFeed(e));
    },
    [addFeed, data, loading]
  );

  return <HomePresenter me={me} feeds={feeds} />;
};

const mapStateToProps = state => {
  return { facebook: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeed: feed => dispatch(addFeed(feed))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

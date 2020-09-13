import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import HomePresenter from "./HomePresenter";
import { getFeed, clearFeed } from "../../store";
import { useQuery } from "react-apollo-hooks";
import { SEE_FEED } from "./HomeQueries";

const HomeContainer = ({ facebook: { me, feeds }, getFeed, clearFeed }) => {
  const { data, loading } = useQuery(SEE_FEED);
  const [isCreatePost, setIsCreatePost] = useState(false);
  const inputRef = useRef(null);
  const onCreatePost = e => {
    e && e.preventDefault();
    setIsCreatePost(!isCreatePost);
    if (!isCreatePost) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 50);
    }
  };
  useEffect(
    () => {
      clearFeed();
      !loading && data && data.seeFeed && getFeed(data.seeFeed);
    },
    [getFeed, data, loading, clearFeed]
  );

  return (
    <HomePresenter
      me={me}
      feeds={feeds}
      isCreatePost={isCreatePost}
      onCreatePost={onCreatePost}
      inputRef={inputRef}
    />
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

const mapDispatchToProps = dispatch => {
  return {
    getFeed: feed => dispatch(getFeed(feed)),
    clearFeed: () => dispatch(clearFeed())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

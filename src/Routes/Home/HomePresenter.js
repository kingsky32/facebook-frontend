import React from "react";
import styled from "styled-components";
import CreatePostFeed from "../../Components/Feed/CreatePostFeed";
import PostFeed from "../../Components/Feed/PostFeed";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 7.5rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.lightGreyColor};
  padding-bottom: 1.5rem;
`;

const Container = styled.div`padding-top: 1.5rem;`;

const FeedWrapper = styled.div`
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const HomePresenter = ({ me, feeds }) => {
  return (
    <Wrapper>
      <Container>
        <FeedWrapper>
          <CreatePostFeed {...me} />
          {feeds && feeds.map(feed => <PostFeed key={feed.id} {...feed} />)}
        </FeedWrapper>
      </Container>
    </Wrapper>
  );
};

export default HomePresenter;

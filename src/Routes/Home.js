import React from "react";
import styled from "styled-components";
import CreatePostFeed from "../Components/Feed/CreatePostFeed";
import { connect } from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 7.5rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.lightGreyColor};
`;

const Container = styled.div`padding-top: 1.5rem;`;

const FeedWrapper = styled.div`
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
`;

const Home = ({ facebook: { me } }) => {
  return (
    <Wrapper>
      <Container>
        <FeedWrapper>
          <CreatePostFeed {...me} />
        </FeedWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(Home);

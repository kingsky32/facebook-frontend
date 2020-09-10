import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.lightGreyColor};
`;

const Container = styled.div`padding-top: 1.5rem;`;

const FeedWrapper = styled.div`
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
`;

const CreateWrapper = styled.div``;

export default () => {
  return (
    <Wrapper>
      <Container>
        <FeedWrapper>
          <CreateWrapper>What's on your mind, data.me.username?</CreateWrapper>
        </FeedWrapper>
      </Container>
    </Wrapper>
  );
};

import React from "react";
import styled from "styled-components";
import NullIcon from "../../Assets/Images/Icons/Friends/null_states_people_gray_wash.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const LeftNavigationWrapper = styled.div`
  width: 36rem;
  height: 100vh;
  overflow: hidden;
  padding-top: 6rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.whiteColor};
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 6rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  padding: 2rem 1rem;
`;

const Content = styled.span`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 2rem;
  color: ${props => props.theme.greyColor};
  font-weight: 600;
`;

const ContentIcon = styled.img`
  width: 11.2rem;
  height: 11.2rem;
  margin-bottom: 1.5rem;
`;

const FriendsPresenter = props => {
  return (
    <Wrapper>
      <LeftNavigationWrapper>
        <NavigationTitle>Friends</NavigationTitle>
      </LeftNavigationWrapper>
      <ContentWrapper>
        <ContentContainer>
          <Content>
            <ContentIcon src={NullIcon} alt="icon" />Select people's names to preview their profile.
          </Content>
        </ContentContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FriendsPresenter;

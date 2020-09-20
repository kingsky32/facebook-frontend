import React from "react";
import styled from "styled-components";
import NullIcon from "../../Assets/Images/Icons/Friends/null_states_people_gray_wash.svg";
import FriendRequests from "../../Components/Friends/FriendRequests";
import Profile from "../Profile";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const LeftNavigationWrapper = styled.div`
  width: 36rem;
  height: 100vh;
  overflow-y: auto;
  padding-top: 12.4rem;
  position: relative;
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
  width: 36rem;
  box-sizing: border-box;
  font-size: 2.4rem;
  font-weight: 600;
  padding: 2rem 1rem;
  background-color: ${props => props.theme.whiteColor};
  position: fixed;
  top: 6rem;
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

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -6rem;
`;

const FriendsPresenter = ({ match }) => {
  return (
    <Wrapper>
      <LeftNavigationWrapper>
        <NavigationTitle>Friends</NavigationTitle>
        <FriendRequests match={match} />
      </LeftNavigationWrapper>
      <ContentWrapper>
        {match.params.id !== "home"
          ? <ProfileContainer>
              <Profile match={match} />
            </ProfileContainer>
          : <ContentContainer>
              <Content>
                <ContentIcon src={NullIcon} alt="icon" />Select people's names to preview their
                profile.
              </Content>
            </ContentContainer>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default FriendsPresenter;

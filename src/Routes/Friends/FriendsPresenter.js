import React from "react";
import styled from "styled-components";
import NullIcon from "../../Assets/Images/Icons/Friends/null_states_people_gray_wash.svg";
import FriendRequests from "../../Components/Friends/FriendRequests";
import FriendsButton from "../../Components/Friends/FriendsButton";
import FriendsPeople from "../../Components/Friends/FriendsPeople";
import { FriendAllFriends, FriendHome } from "../../Components/Icons";
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
  padding: 12.4rem .8rem 0;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  ${props => props.theme.boxShadow};
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
  padding-left: 36rem;
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
  width: 23.6rem;
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

const FriendsButtonContainer = styled.div`
  padding-bottom: .8rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.lightGreyColor};
  }
`;

const FriendsPresenter = ({ match, peopleData }) => {
  return (
    <Wrapper>
      <LeftNavigationWrapper>
        <NavigationTitle>Friends</NavigationTitle>
        <FriendsButtonContainer>
          <FriendsButton to="/friends/home" icon={<FriendHome />} text="Home" match={match} />
          <FriendsButton
            to="/friends/list"
            icon={<FriendAllFriends />}
            text="All Friends"
            match={match}
          />
        </FriendsButtonContainer>
        <FriendRequests match={match} />
        {peopleData &&
          peopleData.peopleYouMayKnow &&
          <FriendsPeople friends={peopleData.peopleYouMayKnow} match={match} />}
      </LeftNavigationWrapper>
      <ContentWrapper>
        {match.params.id === "home"
          ? <ContentContainer>
              <Content>
                <ContentIcon src={NullIcon} alt="icon" />Select people's names to preview their
                profile.
              </Content>
            </ContentContainer>
          : match.params.id === "list"
            ? <ContentContainer>
                <Content>
                  <ContentIcon src={NullIcon} alt="icon" />Select people's names to preview their
                  profile.
                </Content>
              </ContentContainer>
            : <ProfileContainer>
                <Profile match={match} />
              </ProfileContainer>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default FriendsPresenter;

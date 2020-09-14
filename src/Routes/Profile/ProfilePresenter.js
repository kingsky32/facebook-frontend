import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import Button from "../../Components/Button";
import Timeline from "../../Components/Profile/Timeline";
import AddFriend from "../../Assets/Images/Icons/Profile/add_friend.png";
import Messenger from "../../Assets/Images/Icons/Profile/messenger.png";
import Follow from "../../Assets/Images/Icons/Profile/follow.png";
import EllipsisH from "../../Assets/Images/Icons/ellipsisH.png";

const Wrapper = styled.div`padding-top: 6rem;`;

const Container = styled.div`width: 100%;`;

const ProfileHead = styled.div`
  width: 100%;
  background-color: ${props => props.theme.whiteColor};
  margin: 0 auto;
`;

const ProfileHeadWrapper = styled.div`
  width: 94rem;
  margin: 0 auto;
  position: relative;
`;

const CoverPhoto = styled.div`
  width: 94rem;
  height: 35rem;
  margin: 0 auto;
  background-color: ${props => props.theme.lightGreyColor};
  border-radius: ${props => props.theme.borderRadius};
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 17.5rem;
  height: 17.5rem;
  justify-content: center;
  border-radius: 17.5rem;
  background-color: ${props => props.theme.whiteColor};
  position: absolute;
  top: 19.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    img {
      filter: brightness(.95);
    }
  }
`;

const ProfileMeta = styled.div`
  padding-top: 3rem;
  padding-bottom: 1.8rem;
  width: 87.6rem;
  margin: 0 auto;
  border-bottom: 1px solid ${props => props.theme.lightDarkGreyColor};
  text-align: center;
`;

const UserName = styled.div`
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Bio = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

const ProfileComponent = styled.div`
  width: 88rem;
  margin: 0 auto;
  padding-top: 1.5rem;
`;

const ProfileNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88rem;
  margin: 0 auto;
`;

const ProfileNavigation = styled.ul`display: flex;`;

const Navigation = styled.li`
  &.active {
    a {
      border-bottom: 3px solid ${props => props.theme.blueColor};
      color: ${props => props.theme.blueColor};
    }
  }
  a {
    display: block;
    line-height: 6rem;
    height: 6rem;
    box-sizing: border-box;
    padding: 0 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const ProfileOption = styled.ul`display: flex;`;

const Option = styled.li`
  &:not(:last-child) {
    margin-right: .8rem;
  }
`;

const OptionButton = styled(Button)`
  background-color: ${props => props.theme.greyColor}25;
  color: ${props => props.theme.blackColor};
  padding: 0 1.5rem;
  height: 3.6rem;
  font-size: 1.5rem;
  transition: .25s background-color ease;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.greyColor}40;
  }
`;

const OptionIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  &:not(:last-child) {
    margin-right: .5rem;
  }
`;

const ProfilePresenter = ({ isSelf, avatar, friendsCount, fullName, bio, posts }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>
          {fullName} | Facebook
        </title>
      </Helmet>
      <Container>
        <ProfileHead>
          <ProfileHeadWrapper>
            <CoverPhoto />
            <AvatarWrapper>
              <Avatar url={avatar} size="16.8rem" />
            </AvatarWrapper>
            <ProfileMeta>
              <UserName>
                {fullName}
              </UserName>
              <Bio>
                {bio}
              </Bio>
            </ProfileMeta>
            <ProfileNavigationContainer>
              <ProfileNavigation>
                <Navigation className="active">
                  <Link to="">Timeline</Link>
                </Navigation>
                <Navigation>
                  <Link to="">About</Link>
                </Navigation>
                <Navigation>
                  <Link to="">
                    Friends {friendsCount}
                  </Link>
                </Navigation>
                <Navigation>
                  <Link to="">Photos</Link>
                </Navigation>
                <Navigation>
                  <Link to="">Videos</Link>
                </Navigation>
                <Navigation>
                  <Link to="">More</Link>
                </Navigation>
              </ProfileNavigation>
              {!isSelf &&
                <ProfileOption>
                  <Option>
                    <OptionButton icon={<OptionIcon src={AddFriend} />} text="Add Friend" />
                  </Option>
                  <Option>
                    <OptionButton icon={<OptionIcon src={Messenger} />} />
                  </Option>
                  <Option>
                    <OptionButton icon={<OptionIcon src={Follow} />} />
                  </Option>
                  <Option>
                    <OptionButton icon={<OptionIcon src={EllipsisH} />} />
                  </Option>
                </ProfileOption>}
            </ProfileNavigationContainer>
          </ProfileHeadWrapper>
        </ProfileHead>
        <ProfileComponent>
          <Timeline isSelf={isSelf} posts={posts} friendsCount={friendsCount} />
        </ProfileComponent>
      </Container>
    </Wrapper>
  );
};

export default ProfilePresenter;

import React from "react";
import styled from "styled-components";
import AddFriend from "../../Assets/Images/Icons/Profile/add_friend.png";
import Messenger from "../../Assets/Images/Icons/Profile/messenger.png";
import Follow from "../../Assets/Images/Icons/Profile/follow.png";
import EllipsisH from "../../Assets/Images/Icons/ellipsisH.png";
import CancelRequest from "../../Assets/Images/Icons/Profile/cancel_request.png";
import isFriendIcon from "../../Assets/Images/Icons/Profile/is_friend.png";
import CallIcon from "../../Assets/Images/Icons/Profile/call.png";
import RespondIcon from "../../Assets/Images/Icons/Profile/respond.png";
import Avatar from "../../Components/Avatar";
import Button from "../../Components/Button";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
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

const RespondOptionButton = styled(OptionButton)`
  background-color: ${props => props.theme.blueColor}25;
  color: ${props => props.theme.blueColor};
  &:hover {
    background-color: ${props => props.theme.blueColor}40;
  }
`;

const RespondOptionIcon = styled(OptionIcon)`
  filter: opacity(.5) drop-shadow(0 0 0 ${props => props.theme.blueColor});
`;

const ProfileHead = ({
  avatar,
  fullName,
  bio,
  friendsCount,
  isSelf,
  isRequestFriend,
  onConfirmFriend,
  isFriend,
  onAddFriend,
  location: { pathname }
}) => {
  const path = pathname.split("/").splice(0, 3).join("/");
  return (
    <Container>
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
            <Navigation className={pathname === `${path}/timeline` && "active"}>
              <Link to={`${path}/timeline`}>Timeline</Link>
            </Navigation>
            <Navigation className={pathname === `${path}/about` && "active"}>
              <Link to={`${path}/about`}>About</Link>
            </Navigation>
            <Navigation className={pathname === `${path}/friends` && "active"}>
              <Link to={`${path}/friends`}>
                Friends {friendsCount}
              </Link>
            </Navigation>
            <Navigation className={pathname === `${path}/photos` && "active"}>
              <Link to={`${path}/photos`}>Photos</Link>
            </Navigation>
            <Navigation className={pathname === `${path}/videos` && "active"}>
              <Link to={`${path}/videos`}>Videos</Link>
            </Navigation>
            <Navigation>
              <Link to="">More</Link>
            </Navigation>
          </ProfileNavigation>
          {!isSelf
            ? isFriend === 2
              ? <ProfileOption>
                  <Option>
                    <OptionButton icon={<OptionIcon text="Message" src={Messenger} />} />
                  </Option>
                  <Option>
                    <OptionButton icon={<OptionIcon src={CallIcon} />} />
                  </Option>
                  <Option>
                    <OptionButton icon={<OptionIcon src={isFriendIcon} />} />
                  </Option>
                  <Option>
                    <OptionButton icon={<OptionIcon src={EllipsisH} />} />
                  </Option>
                </ProfileOption>
              : isRequestFriend
                ? <ProfileOption>
                    <Option>
                      <RespondOptionButton
                        icon={<RespondOptionIcon src={RespondIcon} />}
                        text="Confirm"
                        onClick={onConfirmFriend}
                      />
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
                  </ProfileOption>
                : !isSelf &&
                  <ProfileOption>
                    <Option>
                      {isFriend && isFriend === 1
                        ? <OptionButton
                            icon={<OptionIcon src={CancelRequest} />}
                            text="Cancel Request"
                            onClick={onAddFriend}
                          />
                        : <OptionButton
                            icon={<OptionIcon src={AddFriend} />}
                            text="Add Friend"
                            onClick={onAddFriend}
                          />}
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
                  </ProfileOption>
            : null}
        </ProfileNavigationContainer>
      </ProfileHeadWrapper>
    </Container>
  );
};

export default withRouter(ProfileHead);

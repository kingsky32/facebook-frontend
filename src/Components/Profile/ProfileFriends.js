import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  ${props => props.theme.feedBox};
`;

const MetaTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`;

const MetaLink = styled(Link)`
  font-size: 1.7rem;
  color: ${props => props.theme.blueColor};
`;

const MetaTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

const FriendsCount = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  color: ${props => props.theme.greyColor};
`;

const FriendsContainer = styled.div`
  display: grid;
  padding: 1.6rem 0 1.6rem;
  grid-template-columns: repeat(3, 10rem);
  grid-template-rows: ${props => `repeat(${props.rowLength}, 12rem)`};
  grid-auto-rows: 5rem;
  grid-gap: 1.5rem;
  grid-row-gap: 2rem;
`;

const Friend = styled.div`width: 100%;`;

const AvatarContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  margin-bottom: .5rem;
  background-color: ${props => props.theme.blackColor};
`;

const Avatar = styled.img`
  width: 100%;
  &:hover {
    opacity: .95;
  }
`;

const Username = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileFriends = ({ friendsCount, friends }) => {
  return (
    <Container>
      <MetaTitleContainer>
        <MetaTitle>
          <Link to="">Friends</Link>
        </MetaTitle>
        <MetaLink to="">See All</MetaLink>
      </MetaTitleContainer>
      <FriendsCount>
        {friendsCount} friends
      </FriendsCount>
      <FriendsContainer rowLength={friendsCount < 9 ? parseInt((friendsCount - 1) / 3 + 1) : 3}>
        {friends &&
          friends.length > 0 &&
          friends.map(friend =>
            <Friend key={friend.friend.id}>
              <Link to={`/profile/${friend.friend.id}/timeline`}>
                <AvatarContainer>
                  <Avatar src={friend.friend.avatar} />
                </AvatarContainer>
                <Username>
                  {friend.friend.username}
                </Username>
              </Link>
            </Friend>
          )}
      </FriendsContainer>
    </Container>
  );
};

export default ProfileFriends;

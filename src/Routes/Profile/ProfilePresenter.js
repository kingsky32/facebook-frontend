import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ProfileHead from "../../Components/Profile/ProfileHead";
import Timeline from "../../Components/Profile/Timeline";

const Wrapper = styled.div`padding-top: 6rem;`;

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

const ProfileComponent = styled.div`
  width: 88rem;
  margin: 0 auto;
  padding-top: 1.5rem;
`;

const ProfilePresenter = ({
  isFriendState,
  isSelf,
  avatar,
  friendsCount,
  fullName,
  bio,
  posts,
  friends,
  onAddFriend,
  isRequestFriend,
  onConfirmFriend,
  cate
}) => {
  return (
    <Wrapper>
      <Helmet>
        <title>
          {fullName} | Facebook
        </title>
      </Helmet>
      <Container>
        <ProfileHead
          avatar={avatar}
          fullName={fullName}
          bio={bio}
          friendsCount={friendsCount}
          isSelf={isSelf}
          isRequestFriend={isRequestFriend}
          onConfirmFriend={onConfirmFriend}
          isFriendState={isFriendState}
          onAddFriend={onAddFriend}
        />
        <ProfileComponent>
          {cate === "timeline" &&
            <Timeline
              isSelf={isSelf}
              posts={posts}
              friends={friends}
              friendsCount={friendsCount}
            />}
        </ProfileComponent>
      </Container>
    </Wrapper>
  );
};

export default ProfilePresenter;

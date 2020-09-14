import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";

const Wrapper = styled.div`padding-top: 6rem;`;

const Container = styled.div`width: 100%;`;

const ProfileHead = styled.div`
  width: 100%;
  height: 94rem;
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

const ProfilePresenter = ({ id, avatar, username, bio }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>
          {username} | Facebook
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
                {username}
              </UserName>
              <Bio>
                {bio}
              </Bio>
            </ProfileMeta>
          </ProfileHeadWrapper>
        </ProfileHead>
      </Container>
    </Wrapper>
  );
};

export default ProfilePresenter;

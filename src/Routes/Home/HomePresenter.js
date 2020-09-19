import React from "react";
import styled from "styled-components";
import CreatePostFeed from "../../Components/Feed/CreatePostFeed";
import PostFeed from "../../Components/Feed/Post";
import NavigationButton from "../../Components/Navigation/NavigationButton";
import Avatar from "../../Components/Avatar";
import NoMorePosts from "../../Components/Feed/NoMorePosts";
import FriendsIcon from "../../Assets/Images/Icons/friends.png";
import CreateAStory from "../../Components/Feed/CreateAStory";
import CircleButton from "../../Components/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreatePost from "../../Components/Feed/CreatePost";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 7.5rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.lightGreyColor};
  padding-bottom: 1.5rem;
`;

const Container = styled.div`position: relative;`;

const FeedWrapper = styled.div`
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const NavigationWrapper = styled.div`
  width: 35rem;
  padding: 0 .8rem;
  top: 7.5rem;
  position: fixed;
`;

const LeftNavigationWrapper = styled(NavigationWrapper)`
  left: 0;
`;

const RightNavigationWrapper = styled(NavigationWrapper)`
  right: 0;
`;

const NavigtaionContainer = styled.div`
  &:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.greyColor}35;
  }
`;

const NavigtaionTitle = styled.span`
  font-size: 1.7rem;
  display: block;
  padding: 2rem 0.8rem 1rem;
  color: ${props => props.theme.greyColor};
  font-weight: 600;
`;

const ECircleButton = styled(CircleButton)`
  background-color: ${props => props.theme.lightDarkGreyColor};
  &:hover {
    background-color: ${props => props.theme.lightDarkGreyColor};
  }
`;

const HomePresenter = ({ me, feeds, isCreatePost, onCreatePost, inputRef }) => {
  return (
    <Wrapper>
      {isCreatePost && <CreatePost inputRef={inputRef} onCreatePost={onCreatePost} />}
      <Container>
        <LeftNavigationWrapper>
          <NavigationButton
            to={`/profile/${me.id}`}
            icon={<Avatar url={me.avatar} size="3.6rem" />}
            text={me.username}
          />
          <NavigationButton
            to={"/friends"}
            icon={<Avatar url={FriendsIcon} size="3.6rem" />}
            text="Friends"
          />
        </LeftNavigationWrapper>
        <FeedWrapper>
          <CreateAStory />
          <CreatePostFeed onCreatePost={onCreatePost} />
          {feeds && feeds.map(feed => <PostFeed key={feed.id} {...feed} />)}
          <NoMorePosts />
        </FeedWrapper>
        <RightNavigationWrapper>
          {me &&
            me.friends &&
            me.friends.friend &&
            me.friends.friend.length > 0 &&
            <NavigtaionContainer>
              <NavigtaionTitle>Contacts</NavigtaionTitle>
              {me.friends.friend.map(friend =>
                <NavigationButton
                  key={friend.id}
                  to={`/profile/${friend.id}`}
                  icon={<Avatar url={friend.avatar} size="3.6rem" />}
                  text={friend.username}
                />
              )}
            </NavigtaionContainer>}
          <NavigtaionContainer>
            <NavigtaionTitle>Group Conversations</NavigtaionTitle>
            <NavigationButton
              to={`/`}
              icon={<ECircleButton icon={<FontAwesomeIcon icon={faPlus} size="lg" />} />}
              text="Create New Group"
            />
          </NavigtaionContainer>
        </RightNavigationWrapper>
      </Container>
    </Wrapper>
  );
};

export default HomePresenter;

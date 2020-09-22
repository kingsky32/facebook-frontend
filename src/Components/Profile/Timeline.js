import React, { useRef, useState } from "react";
import styled from "styled-components";
import PostFeed from "../../Components/Feed/Post";
import CreatePostFeed from "../Feed/CreatePostFeed";
import ProfileFriends from "./ProfileFriends";

const Container = styled.div`
  width: 100%;
  max-width: 94rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  & > * > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const MetaContainer = styled.div`width: 36rem;`;

const PostsContainer = styled.div`width: 50rem;`;

const Timeline = ({ posts, friendsCount, friends, isSelf }) => {
  const [isCreatePost, setIsCreatePost] = useState(false);
  const inputRef = useRef(null);
  const onCreatePost = e => {
    e && e.preventDefault();
    setIsCreatePost(!isCreatePost);
    if (!isCreatePost) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 50);
    }
  };
  return (
    <Container>
      <MetaContainer>
        <ProfileFriends friendsCount={friendsCount} friends={friends} />
      </MetaContainer>
      <PostsContainer>
        {isSelf && <CreatePostFeed onCreatePost={onCreatePost} />}
        {posts && posts.map(post => <PostFeed key={post.id} {...post} />)}
      </PostsContainer>
    </Container>
  );
};

export default Timeline;

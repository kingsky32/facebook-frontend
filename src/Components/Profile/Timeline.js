import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostFeed from "../../Components/Feed/Post";
import CreatePostFeed from "../Feed/CreatePostFeed";

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

const FriendsContainer = styled.div`
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

const Timeline = ({ posts, friendsCount }) => {
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
        <FriendsContainer>
          <MetaTitleContainer>
            <MetaTitle>
              <Link to="">Friends</Link>
            </MetaTitle>
            <MetaLink to="">See All</MetaLink>
          </MetaTitleContainer>
          <FriendsCount>
            {friendsCount}
          </FriendsCount>
        </FriendsContainer>
      </MetaContainer>
      <PostsContainer>
        <CreatePostFeed onCreatePost={onCreatePost} />
        {posts && posts.map(post => <PostFeed key={post.id} {...post} />)}
      </PostsContainer>
    </Container>
  );
};

export default Timeline;

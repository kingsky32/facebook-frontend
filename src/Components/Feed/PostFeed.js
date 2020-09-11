import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Timestamp from "../Timestamp";
import EllipsisH from "../../Assets/Images/Icons/ellipsisH.png";
import LikeIco from "../../Assets/Images/Icons/like.svg";
import { Like, Comment, Share } from "../Icons";
import Avatar from "../Avatar";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE } from "./PostQueries";

const Container = styled.div`
  ${props => props.theme.feedBox};
  display: flex;
  flex-flow: column nowrap;
`;

const MetaArea = styled.div`
  padding: 1rem 1.5rem .5rem;
  display: flex;
`;

const AvatarLink = styled(Link)`
  display: block;
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  overflow: hidden;
  background-color: #000;
`;

const EAvatar = styled(Avatar)`
  &:hover {
    opacity: .95;
  }
`;

const Meta = styled.div`
  flex: 1;
  padding-top: .35rem;
`;

const Username = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

const CreatedAt = styled.span``;

const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 3.6rem;
  cursor: pointer;
  transition: .25s background-color ease;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.lightGreyColor};
  }
`;

const Icon = styled.img`
  width: 50%;
  opacity: .75;
`;

const Caption = styled.div`
  padding: .5rem 1.5rem 0;
  font-size: 1.5rem;
`;

const Photo = styled.img`
  width: 100%;
  height: 60rem;
  margin-top: 1.5rem;
  object-fit: cover;
`;

const CountArea = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  margin: 0 1.5rem;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;

const LikeCountArea = styled.div`
  display: flex;
  align-items: center;
`;

const LikeCount = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.greyColor};
`;

const LikeIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 1.8rem;
  cursor: pointer;
  margin-right: .5rem;
`;

const ButtonArea = styled.div`
  padding: .5rem 1.5rem;
  display: flex;
`;

const ButtonText = styled.span`
  padding-left: .5rem;
  font-size: 1.5rem;
  color: ${props => props.theme.greyColor};
`;

const Button = styled.div`
  flex: 1;
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    background-color: ${props => props.theme.lightGreyColor};
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &.isLiked {
    ${ButtonText} {
      color: ${props => props.theme.blueColor};
      font-weight: 600;
    }
  }
`;

const PostFeed = ({ id, caption, user, likeCount, isLiked, createdAt, files }) => {
  const [isLikedS, setIsLikedS] = useState(isLiked);
  const [likeCountS, setLikeCountS] = useState(likeCount);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const onToggleLike = async e => {
    e.preventDefault();
    if (isLikedS) {
      setIsLikedS(false);
      setLikeCountS(likeCountS - 1);
    } else {
      setIsLikedS(true);
      setLikeCountS(likeCountS + 1);
    }
    await toggleLikeMutation();
  };

  return (
    <Container>
      {console.log(isLikedS)}
      <MetaArea>
        <AvatarLink to={`/profile/${user.id}`}>
          <EAvatar url={user.avatar} size="4rem" />
        </AvatarLink>
        <Meta>
          <Link to={`/profile/${user.id}`}>
            <Username>
              {user.username}
            </Username>
          </Link>
          <CreatedAt>
            <Timestamp createdAt={createdAt} />
          </CreatedAt>
        </Meta>
        <Option>
          <Icon src={EllipsisH} />
        </Option>
      </MetaArea>
      <Caption>
        {caption}
      </Caption>
      {files && files[0] && <Photo src={files[0].url} />}
      <CountArea>
        <LikeCountArea>
          <LikeIcon src={LikeIco} />
          <LikeCount>
            {likeCountS}
          </LikeCount>
        </LikeCountArea>
      </CountArea>
      <ButtonArea>
        <Button onClick={onToggleLike} className={isLikedS && "isLiked"}>
          <Like isLiked={isLikedS} />
          <ButtonText>Like</ButtonText>
        </Button>
        <Button>
          <Comment />
          <ButtonText>Comment</ButtonText>
        </Button>
        <Button>
          <Share />
          <ButtonText>Share</ButtonText>
        </Button>
      </ButtonArea>
    </Container>
  );
};

export default PostFeed;

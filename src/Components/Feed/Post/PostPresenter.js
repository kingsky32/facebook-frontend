import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Timestamp from "../../Timestamp";
import EllipsisH from "../../../Assets/Images/Icons/ellipsisH.png";
import LikeIco from "../../../Assets/Images/Icons/like.svg";
import { Like, Comment as CommentIcon, Share } from "../../Icons";
import Avatar from "../../Avatar";
import InputRound from "../../InputRound";
import PostOption from "./PostOption";
import DeletePostPopup from "../DeletePostPopup";
import EditPostPopup from "../EditPostPopup";

const Container = styled.div`
  ${props => props.theme.feedBox};
  display: flex;
  flex-flow: column nowrap;
`;

const MetaArea = styled.div`
  padding: 1rem 1.5rem .5rem;
  position: relative;
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
  > img {
    pointer-events: none;
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
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.lightGreyColor};
  }
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

const CommentsArea = styled.div`padding: .7rem 1.5rem;`;

const CommentAvatar = styled(Avatar)`
  margin-right: .5rem;
`;

const AddComent = styled.form`
  display: flex;
  align-items: center;
`;

const Comments = styled.ul`padding: .3rem 0;`;

const CommentOption = styled(Option)`
  align-self: center;
  margin-left: .5rem;
  opacity: 0;
`;

const Comment = styled.li`
  display: flex;
  margin-bottom: 2.2rem;
  &:hover ${CommentOption} {
    opacity: 1;
  }
`;

const CommentTextBox = styled.div`
  border-radius: 1.5rem;
  background-color: ${props => props.theme.lightGreyColor};
  padding: .8rem 1.2rem;
  margin-bottom: .4rem;
`;

const CommentName = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const CommentText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: .25rem;
`;

const CommentArea = styled.div``;

const CommentMeta = styled.div`
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  position: absolute;
  margin-left: 1.2rem;
`;

const CommentLikeButton = styled.p`
  margin-right: .5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CommentReplyButton = styled.p`
  margin: 0 .5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CommentCreatedAt = styled(Timestamp)`
  margin: 0 0 0 .5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PostCreatedAt = styled(Timestamp)`
  margin-top: .5rem;
`;

const ViewAllComments = styled.span`
  color: ${props => props.theme.greyColor};
  font-size: 1.5rem;
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PostPresneter = ({
  id,
  caption,
  user,
  likeCount,
  isLiked,
  createdAt,
  files,
  me,
  onToggleLike,
  addComment,
  onAddComment,
  comments,
  isComment,
  onOpenComment,
  textInput,
  isOption,
  onPostOption,
  isDeletePopup,
  onDeletePopup,
  onCloseDeletePopup,
  onCloseEditPopup,
  isEditPopup,
  onEditPopup,
  commentCount
}) => {
  return (
    <Container>
      {isEditPopup &&
        <EditPostPopup id={id} beforeCaption={caption} onCloseEditPopup={onCloseEditPopup} />}
      {isDeletePopup && <DeletePostPopup id={id} onCloseDeletePopup={onCloseDeletePopup} />}
      <MetaArea>
        <AvatarLink to={`/profile/${user.id}/timeline`}>
          <EAvatar url={user.avatar} size="4rem" />
        </AvatarLink>
        <Meta>
          <Link to={`/profile/${user.id}/timeline`}>
            <Username>
              {user.username}
            </Username>
          </Link>
          <CreatedAt>
            <PostCreatedAt createdAt={createdAt} />
          </CreatedAt>
        </Meta>
        <Option onClick={onPostOption}>
          <Icon src={EllipsisH} />
        </Option>
        {isOption &&
          <PostOption
            user={user}
            onPostOption={onPostOption}
            onDeletePopup={onDeletePopup}
            onEditPopup={onEditPopup}
          />}
      </MetaArea>
      <Caption>
        {caption}
      </Caption>
      {files && files[0] && <Photo src={files[0].url} />}
      {likeCount > 0 &&
        <CountArea>
          <LikeCountArea>
            <LikeIcon src={LikeIco} />
            <LikeCount>
              {likeCount}
            </LikeCount>
          </LikeCountArea>
        </CountArea>}
      <ButtonArea>
        <Button onClick={onToggleLike} className={isLiked && "isLiked"}>
          <Like isLiked={isLiked} />
          <ButtonText>Like</ButtonText>
        </Button>
        <Button onClick={onOpenComment}>
          <CommentIcon />
          <ButtonText>Comment</ButtonText>
        </Button>
        <Button>
          <Share />
          <ButtonText>Share</ButtonText>
        </Button>
      </ButtonArea>
      {((comments && comments.length > 0) || isComment) &&
        <CommentsArea>
          {comments &&
            comments.length > 0 &&
            <Comments>
              {commentCount > 1 &&
                commentCount - comments.length !== 0 &&
                <ViewAllComments>
                  View {commentCount - 1} more Comment
                </ViewAllComments>}
              {comments.map(comment =>
                <Comment key={comment.id}>
                  <Link to={`/profile/${comment.user.id}/timeline`}>
                    <CommentAvatar url={comment.user.avatar} size="3.2rem" />
                  </Link>
                  <CommentArea>
                    <CommentTextBox>
                      <CommentName>
                        <Link to={`/profile/${comment.user.id}/timeline`}>
                          {comment.user.username}
                        </Link>
                      </CommentName>
                      <CommentText>
                        {comment.text}
                      </CommentText>
                    </CommentTextBox>
                    <CommentMeta>
                      <CommentLikeButton>Like</CommentLikeButton> ·
                      <CommentReplyButton>Reply</CommentReplyButton> ·
                      <CommentCreatedAt createdAt={comment.createdAt} />
                    </CommentMeta>
                  </CommentArea>
                  <CommentOption>
                    <Icon src={EllipsisH} />
                  </CommentOption>
                </Comment>
              )}
            </Comments>}
          {isComment &&
            <AddComent onSubmit={onAddComment}>
              <Link to={`/profile/${me.id}/timeline`}>
                <CommentAvatar url={me.avatar} size="3.2rem" />
              </Link>
              <InputRound
                ref={textInput}
                height="3.6rem"
                value={addComment.value}
                onChange={addComment.onChange}
                placeholder="Write a comment..."
              />
            </AddComent>}
        </CommentsArea>}
    </Container>
  );
};

export default PostPresneter;

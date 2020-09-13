import React, { useState, useRef } from "react";
import PostPresenter from "./PostPresenter";
import { connect } from "react-redux";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import useInput from "../../../Hooks/useInput";

const PostContainer = ({
  facebook: { me },
  id,
  caption,
  user,
  likeCount,
  isLiked,
  createdAt,
  files,
  comments
}) => {
  const textInput = useRef(null);
  const [isLikedS, setIsLikedS] = useState(isLiked);
  const [likeCountS, setLikeCountS] = useState(likeCount);
  const [commentsS, setCommentsS] = useState(comments);
  const [isComment, setIsComment] = useState(false);
  const [isOption, setIsOption] = useState(false);
  const [isDeletePopup, setIsDeletePopup] = useState(false);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const addComment = useInput();
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: addComment.value }
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

  const onAddComment = async e => {
    e.preventDefault();
    addComment.setValue("");
    const { data: { addComment: data } } = await addCommentMutation();
    setCommentsS(commentsS.concat(data));
  };

  const onOpenComment = e => {
    e.preventDefault();
    setIsComment(true);
    setTimeout(() => {
      textInput.current.focus();
    }, 50);
  };

  const onPostOption = e => {
    e && e.preventDefault();
    setIsOption(!isOption);
  };

  const onClosePostOption = e => {
    e && e.preventDefault();
    setIsOption(false);
  };

  const onDeletePopup = e => {
    onClosePostOption();
    setIsDeletePopup(!isDeletePopup);
  };

  const onCloseDeletePopup = e => {
    e && e.preventDefault();
    setIsDeletePopup(false);
  };

  return (
    <PostPresenter
      id={id}
      caption={caption}
      user={user}
      likeCount={likeCountS}
      isLiked={isLikedS}
      isDeletePopup={isDeletePopup}
      onDeletePopup={onDeletePopup}
      comments={commentsS}
      onAddComment={onAddComment}
      createdAt={createdAt}
      files={files}
      me={me}
      onToggleLike={onToggleLike}
      addComment={addComment}
      isComment={isComment}
      onOpenComment={onOpenComment}
      textInput={textInput}
      isOption={isOption}
      onPostOption={onPostOption}
      onCloseDeletePopup={onCloseDeletePopup}
      onClosePostOption={onClosePostOption}
    />
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(PostContainer);

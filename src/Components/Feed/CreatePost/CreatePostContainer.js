import React, { useRef, useState } from "react";
import CreatePostPresenter from "./CreatePostPresenter";
import { connect } from "react-redux";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { UPLOAD } from "./CreatePostQueries";
import { toast } from "react-toastify";
import { addFeed } from "../../../store";

const CreatePostContainer = ({ prismabook: { me }, inputRef, onCreatePost, addFeed }) => {
  const caption = useInput();
  const [isDisabled, setIsDisabled] = useState(true);
  const modalRef = useRef(null);
  const [uploadMutation] = useMutation(UPLOAD, {
    variables: {
      caption: caption.value
    }
  });
  const onKeyDown = e => {
    const _target = e.target;
    setTimeout(() => {
      _target.value.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
    }, 50);
  };
  const onClose = e => {
    if (e.target === modalRef.current) {
      onCreatePost();
    }
  };
  const onSubmit = async e => {
    e.preventDefault();
    const createdAt = new Date() + "";
    try {
      const { data } = await uploadMutation();
      if (data) {
        toast.success("Post Upload Success.");
        addFeed({
          ...data.upload,
          user: {
            ...me
          },
          createdAt
        });
      }
    } catch (e) {
      toast.error("Post Upload Failed.");
    } finally {
      onCreatePost();
    }
  };
  return (
    <CreatePostPresenter
      {...me}
      onKeyDown={onKeyDown}
      caption={caption}
      isDisabled={isDisabled}
      inputRef={inputRef}
      onClose={onClose}
      onSubmit={onSubmit}
      onCreatePost={onCreatePost}
      modalRef={modalRef}
    />
  );
};

const mapStateToProps = state => {
  return { prismabook: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeed: feed => dispatch(addFeed(feed))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostContainer);

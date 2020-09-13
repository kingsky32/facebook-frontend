import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import useInput from "../../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import EditPostPresenter from "./EditPostPresenter";
import { EDIT_POST } from "./EditPostQueries";

const EditPostContainer = ({ id, facebook: { me }, inputRef, onCloseEditPopup, beforeCaption }) => {
  const caption = useInput(beforeCaption);
  const [isDisabled, setIsDisabled] = useState(true);
  const modalRef = useRef(null);
  const [editPostMutation] = useMutation(EDIT_POST, {
    variables: {
      id,
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
      onCloseEditPopup();
    }
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await editPostMutation();
      if (data) {
        toast.success("Post Edit Success.");
      }
    } catch (e) {
      toast.error("Post Edit Failed.");
    } finally {
      onCloseEditPopup();
    }
  };
  return (
    <EditPostPresenter
      {...me}
      onKeyDown={onKeyDown}
      caption={caption}
      isDisabled={isDisabled}
      inputRef={inputRef}
      onClose={onClose}
      onSubmit={onSubmit}
      onCloseEditPopup={onCloseEditPopup}
      modalRef={modalRef}
    />
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(EditPostContainer);

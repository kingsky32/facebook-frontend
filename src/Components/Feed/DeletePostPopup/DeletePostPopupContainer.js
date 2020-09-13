import React from "react";
import DeletePostPopupPresenter from "./DeletePostPopupPresenter";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { deleteFeed } from "../../../store";
import { DELETE_POST } from "./DeletePostPopupQueries";
import { connect } from "react-redux";

const DeletePostPopupContainer = ({ id, onCloseDeletePopup, deleteFeed }) => {
  const [deletePostMutation] = useMutation(DELETE_POST, {
    variables: {
      id
    }
  });

  const onDeletePost = async e => {
    e.preventDefault();
    try {
      const { data } = await deletePostMutation();
      if (data) {
        onCloseDeletePopup();
        deleteFeed(data.editPost.id);
        toast.success("Delete Post Success.");
      } else {
        throw Error;
      }
    } catch (e) {
      toast.error("Delete Post Failed.");
    }
  };
  return (
    <DeletePostPopupPresenter onDeletePost={onDeletePost} onCloseDeletePopup={onCloseDeletePopup} />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFeed: feed => dispatch(deleteFeed(feed))
  };
};

export default connect(null, mapDispatchToProps)(DeletePostPopupContainer);

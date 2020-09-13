import React from "react";
import { useMutation } from "react-apollo-hooks";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { deleteFeed } from "../../../store";
import PostOptionPresenter from "./PostOptionPresenter";
import { DELETE_POST } from "./PostOptionQueries";

const PostOptionContainer = ({ id, facebook: { me }, user, deleteFeed, onPostOption }) => {
  const [deletePostMutation] = useMutation(DELETE_POST, {
    variables: {
      id
    }
  });

  const onDeletePost = async e => {
    e.preventDefault();
    onPostOption();
    try {
      const { data } = await deletePostMutation();
      if (data) {
        deleteFeed(data.editPost.id);
        toast.success("Delete Post Success.");
      } else {
        throw Error;
      }
    } catch (e) {
      toast.error("Delete Post Failed.");
    }
  };

  return <PostOptionPresenter me={me} user={user} onDeletePost={onDeletePost} />;
};

const mapStateToProps = state => {
  return { facebook: state };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFeed: feed => dispatch(deleteFeed(feed))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostOptionContainer);

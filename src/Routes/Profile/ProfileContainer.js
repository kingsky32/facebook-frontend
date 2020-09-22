import React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { ADD_FRIEND, SEE_USER, CONFIRM_FRIEND } from "./ProfileQueries";
import { toast } from "react-toastify";

const ProfileContainer = ({ match: { params: { id, cate } } }) => {
  const { data, loading } = useQuery(SEE_USER, {
    variables: {
      id
    }
  });
  const [addFriendMutation] = useMutation(ADD_FRIEND, {
    variables: {
      id
    }
  });
  const [confirmFriendMutation] = useMutation(CONFIRM_FRIEND, {
    variables: {
      id
    }
  });
  const onAddFriend = async e => {
    e.preventDefault();
    try {
      const { data: { addFriend: result } } = await addFriendMutation();
      if (result === 1) {
        toast.success("Friend Request Transfer Succeed");
      } else {
        toast.success("Friend Request Cancel Succeed");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  const onConfirmFriend = async e => {
    e.preventDefault();
    if (data.seeUser.isRequestFriend) {
      await confirmFriendMutation();
    }
  };
  return (
    !loading &&
    data &&
    data.seeUser &&
    <ProfilePresenter
      {...data.seeUser}
      isFriend={data.seeUser.isFriend}
      onAddFriend={onAddFriend}
      onConfirmFriend={onConfirmFriend}
      isRequestFriend={data.seeUser.isRequestFriend}
      cate={cate}
    />
  );
};

export default ProfileContainer;

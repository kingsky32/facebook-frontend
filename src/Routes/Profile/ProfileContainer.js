import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { ADD_FRIEND, SEE_USER, CONFIRM_FRIEND } from "./ProfileQueries";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { toggleFriend } from "../../store";

const ProfileContainer = ({ match: { params: { id, cate } }, toggleFriend }) => {
  const [isFriendState, setIsFriendState] = useState(false);
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
      toggleFriend({
        id,
        isFriend: result
      });
      setIsFriendState(result);
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
  useEffect(
    () => {
      data && data.seeUser && data.seeUser.isFriend && setIsFriendState(data.seeUser.isFriend);
    },
    [data]
  );
  return (
    !loading &&
    data &&
    data.seeUser &&
    <ProfilePresenter
      {...data.seeUser}
      isFriend={isFriendState}
      onAddFriend={onAddFriend}
      onConfirmFriend={onConfirmFriend}
      isRequestFriend={data.seeUser.isRequestFriend}
      cate={cate}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFriend: friend => dispatch(toggleFriend(friend))
  };
};

export default connect(null, mapDispatchToProps)(ProfileContainer);

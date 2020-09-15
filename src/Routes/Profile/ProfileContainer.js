import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { connect } from "react-redux";
import ProfilePresenter from "./ProfilePresenter";
import { ADD_FRIEND, SEE_USER } from "./ProfileQueries";

const ProfileContainer = ({ match: { params: { id } }, facebook: { me } }) => {
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
  const [isFriendState, setIsFriendState] = useState(0);
  const onAddFriend = async e => {
    e.preventDefault();
    const { data: { addFriend: result } } = await addFriendMutation();
    setIsFriendState(result);
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
    <ProfilePresenter {...data.seeUser} isFriendState={isFriendState} onAddFriend={onAddFriend} />
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(ProfileContainer);

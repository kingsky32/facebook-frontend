import React from "react";
import { useQuery } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { SEE_USER } from "./ProfileQueries";

const ProfileContainer = ({ match: { params: { id } } }) => {
  const { data, loading } = useQuery(SEE_USER, {
    variables: {
      id
    }
  });
  return !loading && data && data.seeUser && <ProfilePresenter {...data.seeUser} />;
};

export default ProfileContainer;

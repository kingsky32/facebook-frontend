import React from "react";
import { useQuery } from "react-apollo-hooks";
import FriendsPresenter from "./FriendsPresenter";
import { PEOPLE_YOU_MAY_KNOW } from "./FriendsQueries";

const FriendsContainer = ({ match }) => {
  const { data } = useQuery(PEOPLE_YOU_MAY_KNOW);
  return <FriendsPresenter peopleData={data} match={match} />;
};

export default FriendsContainer;

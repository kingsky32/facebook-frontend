import { gql } from "apollo-boost";

export const PEOPLE_YOU_MAY_KNOW = gql`
  {
    peopleYouMayKnow {
      id
      avatar
      username
    }
  }
`;

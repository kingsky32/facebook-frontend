import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      id
      username
      avatar
    }
  }
`;

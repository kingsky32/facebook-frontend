import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      id
      avatar
      username
      friends {
        id
        avatar
        username
      }
    }
  }
`;

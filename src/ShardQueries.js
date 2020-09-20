import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      id
      avatar
      username
      friends {
        friend {
          id
          avatar
          username
        }
        request
      }
      requestFriends {
        id
        opponent {
          id
          avatar
          username
        }
        createdAt
      }
    }
  }
`;

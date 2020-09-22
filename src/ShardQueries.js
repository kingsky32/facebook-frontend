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
      peopleYouMayKnow {
        id
        avatar
        username
        isFriend
      }
      posts {
        id
        location
        caption
        files {
          id
          url
        }
        likeCount
        commentCount
        createdAt
        updatedAt
      }
      requestFriends {
        id
        opponent {
          id
          avatar
          username
          isFriend
        }
        createdAt
      }
    }
  }
`;

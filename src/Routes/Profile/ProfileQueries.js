import { gql } from "apollo-boost";

export const ADD_FRIEND = gql`
  mutation addFriend($id: String!) {
    addFriend(id: $id)
  }
`;

export const CONFIRM_FRIEND = gql`
  mutation confirmFriend($id: String!) {
    confirmFriend(id: $id)
  }
`;

export const SEE_USER = gql`
  query seeUser($id: String!) {
    seeUser(id: $id) {
      id
      avatar
      username
      email
      firstName
      lastName
      fullName
      isFriend
      isSelf
      bio
      friends {
        friend {
          id
          avatar
          username
        }
        request
      }
      friendsCount
      posts {
        id
        location
        caption
        user {
          id
          avatar
          username
        }
        files {
          id
          url
        }
        isLiked
        likeCount
        comments {
          id
          text
          user {
            id
            avatar
            username
          }
          createdAt
        }
        commentCount
        createdAt
      }
      postsCount
    }
  }
`;

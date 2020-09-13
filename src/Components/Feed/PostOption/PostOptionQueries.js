import { gql } from "apollo-boost";

export const EDIT_POST = gql`
  mutation editPost($id: String!, $caption: String, $loaction: String) {
    editPost(id: $id, caption: $caption, location: $loaction, action: EDIT) {
      id
      location
      caption
      user {
        id
        username
      }
      files {
        id
        file
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_POST = gql`
  mutation editPost($id: String!) {
    editPost(id: $id, action: DELETE) {
      id
    }
  }
`;

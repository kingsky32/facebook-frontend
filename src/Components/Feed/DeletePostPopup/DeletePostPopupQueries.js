import { gql } from "apollo-boost";

export const DELETE_POST = gql`
  mutation editPost($id: String!) {
    editPost(id: $id, action: DELETE) {
      id
    }
  }
`;

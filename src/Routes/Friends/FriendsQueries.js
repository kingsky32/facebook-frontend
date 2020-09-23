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

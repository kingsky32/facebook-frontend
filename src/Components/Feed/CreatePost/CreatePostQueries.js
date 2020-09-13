import { gql } from "apollo-boost";

export const UPLOAD = gql`
  mutation upload($caption: String!, $location: String, $files: [String!]) {
    upload(caption: $caption, location: $location, files: $files) {
      id
      caption
      location
      files {
        id
        url
      }
    }
  }
`;

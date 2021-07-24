import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query users($page: Int!, $limit: Int!) {
    users(page: $page, limit: $limit) {
      page
      limit
      offset
      data {
        firstName
        lastName
        picture
        email
        id
        title
      }
    }
  }
`;

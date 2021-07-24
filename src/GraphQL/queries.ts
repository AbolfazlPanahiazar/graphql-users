import { gql } from "@apollo/client";

export interface IGetUsersVar {
  page: number;
  limit: number;
}

export interface IUserItem {
  id: string;
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
}

interface IGetUsers {
  page: number;
  limit: number;
  offset: number;
  total: number;
  data: IUserItem[];
}

export interface IGetUsersData {
  users: IGetUsers;
}

export const GET_USERS = gql`
  query users($page: Int!, $limit: Int!) {
    users(page: $page, limit: $limit) {
      page
      limit
      offset
      total
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

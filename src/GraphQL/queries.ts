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

///////////////////////////////////////////////////////////

export interface ILocation {
  state: string;
  street: string;
  city: string;
  timezone: string;
  country: string;
}

export interface IUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  location: ILocation;
  picture: string;
  registerDate: string;
  dateOfBirth: string;
}

export interface IUserVar {
  id: string;
}

export interface IUserDate {
  user: IUser;
}

export const GET_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      title
      firstName
      lastName
      gender
      email
      phone
      location {
        state
        street
        city
        timezone
        country
      }
      picture
      registerDate
      dateOfBirth
    }
  }
`;

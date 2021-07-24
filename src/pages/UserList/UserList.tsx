import { FC, ReactElement, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import UserListHeader from "components/UserListHeader/UserListHeader";
import ListItem from "components/ListItem/ListItem";
import { GET_USERS } from "GraphQL/queries";

const UserList: FC<RouteComponentProps> = (): ReactElement => {
  const [getUsers, { error, loading, data }] = useLazyQuery(GET_USERS, {
    variables: {
      page: 1,
      limit: 20,
    },
  });

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <UserListHeader />
      {/* user list - start */}
      {loading ? "loading" : data.users.data.map((user: any) => <ListItem {...user} />)}
      {/* user list - end */}
      <button onClick={() => getUsers()}>click</button>
    </div>
  );
};

export default UserList;

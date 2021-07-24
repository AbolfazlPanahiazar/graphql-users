import { FC, ReactElement, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import UserListHeader from "components/UserListHeader/UserListHeader";
import { GET_USERS } from "GraphQL/queries";

const UserList: FC<RouteComponentProps> = (): ReactElement => {
  const [getUsers, { error, loading, data }] = useLazyQuery(GET_USERS, {
    variables: {
      page: 1,
      limit: 20,
    },
  });

  useEffect(() => {
    console.log(error);
    if (data) {
      console.log(data);
    }
  }, [data, error]);

  return (
    <div>
      <UserListHeader />
      <button onClick={() => getUsers()}>click</button>
    </div>
  );
};

export default UserList;

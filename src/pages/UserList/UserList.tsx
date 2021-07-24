import { FC, ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";

import UserListHeader from "components/UserListHeader/UserListHeader";

const UserList: FC<RouteComponentProps> = (): ReactElement => {
  return (
    <div>
      <UserListHeader />
    </div>
  );
};

export default UserList;

import { FC, ReactElement } from "react";

const UserListHeader: FC = (): ReactElement => {
  return (
    <header data-testid="userListHeader" className="flex justify-center items-center">
      <h2 className="font-sans">Rambody User List</h2>
    </header>
  );
};

export default UserListHeader;

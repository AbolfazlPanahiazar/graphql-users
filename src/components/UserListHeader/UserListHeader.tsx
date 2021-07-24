import { FC, ReactElement } from "react";

const UserListHeader: FC = (): ReactElement => {
  return (
    <header data-testid="userListHeader" className="flex justify-center items-center p-5 rounded-b-md bg-blue-700">
      <h1 className="font-sans text-3xl font-bold text-gray-300">Rambody User List</h1>
    </header>
  );
};

export default UserListHeader;

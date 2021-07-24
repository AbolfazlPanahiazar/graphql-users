import { FC, ReactElement } from "react";

export interface IUser {
  id: string;
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
}

const ListItem: FC<IUser> = ({ picture, firstName, lastName, email, title }): ReactElement => {
  return (
    <div
      data-testid="listItem"
      className="flex bg-blue-400 text-gray-900 font-sans my-3 px-5 rounded-md cursor-pointer hover:bg-blue-300 transition-all duration-200 ease-out"
    >
      {/* user picture - start */}
      <div className="p-1">
        <img data-testid="image" className="rounded-full" src={picture} alt="user picture" />
      </div>
      {/* user picture - end */}

      {/* user info - start */}
      <div className="flex-grow flex flex-col justify-center ml-10">
        {/* row 1 - start */}
        <div className="font-bold">
          <span>{title} </span>
          <span data-testid="firstNameSpan">{firstName} </span>
          <span>{lastName} </span>
        </div>
        {/* row 1 - end */}

        {/* row 2 - start */}
        <div>
          <span data-testid="emailSpan">{email}</span>
        </div>
        {/* row 2 - end */}
      </div>
      {/* user info - end */}
    </div>
  );
};

export default ListItem;

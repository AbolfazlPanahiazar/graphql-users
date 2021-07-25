import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { IUserItem } from "GraphQL/queries";

const ListItem: FC<IUserItem> = ({ picture, firstName, lastName, email, title, id }): ReactElement => {
  return (
    <Link className="block" to={`/profile/${id}`}>
      <div
        data-testid="listItem"
        className="flex bg-blue-400 text-gray-900 font-sans my-3 px-5 rounded-md cursor-pointer hover:bg-blue-300 transition-all duration-200 ease-out"
      >
        {/* user picture - start */}
        <div className="p-1">
          <img data-testid="image" className="rounded-full w-80 h-80 object-cover" src={picture} alt="user picture" />
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
    </Link>
  );
};

export default ListItem;

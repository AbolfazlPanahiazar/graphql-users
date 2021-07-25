import { FC, ReactElement, useState } from "react";
import { RouteComponentProps, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { MdKeyboardBackspace } from "react-icons/md";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";

import ProfileLoading from "components/ProfileLoading/ProfileLoading";
import { IUser, GET_USER, IUserDate, IUserVar } from "GraphQL/queries";

interface IParams {
  id: string;
}

const UserProfile: FC<RouteComponentProps> = ({}): ReactElement => {
  const [user, setUser] = useState<IUser>();
  const { id } = useParams<IParams>();
  const { loading, error } = useQuery<IUserDate, IUserVar>(GET_USER, {
    variables: { id: id },
    onCompleted: (data) => {
      console.log(id);
      console.log(data);
      setUser(data.user);
    },
  });

  return (
    <div>
      {/* header - start */}
      <header className="flex justify-center items-center p-5 rounded-b-md bg-blue-700">
        {/* back button - start */}
        <Link to="/">
          <button className="text-gray-300 p-2 text-3xl rounded-full hover:bg-blue-500 transition-all duration-200 ease-in-out">
            <MdKeyboardBackspace />
          </button>
        </Link>
        {/* back button - end */}

        {/* user id - start */}
        <div className="flex-grow font-sans text-lg font-bold text-gray-300 ml-5">
          <span>user id: </span>
          <span>{id}</span>
        </div>
        {/* user id - end */}
      </header>
      {/* header - end */}

      {/* profile - start */}
      {loading || error !== undefined ? (
        <ProfileLoading />
      ) : (
        <div className="font-sans text-gray-300">
          {/* picure - start */}
          <div className="flex justify-center items-center my-3">
            <img className="rounded-full w-32 h-32 object-cover" src={user?.picture} alt="user picture" />
          </div>
          {/* picure - end */}

          {/* user info - start */}
          <div className="flex items-center justify-center text-xl font-extrabold my-3">
            <span className="text-3xl">{user?.gender === "male" ? <FcBusinessman /> : <FcBusinesswoman />}</span>
            <span className="ml-2">{user?.title}.</span>
            <span className="ml-2">{user?.firstName}</span>
            <span className="ml-2">{user?.lastName}</span>
          </div>
          <div className="flex flex-col justify-center items-center my-3 font-bold text-center mx-5">
            {/* -- */}
            <div className="border-b-2 border-gray-300 p-2">
              <span>email: </span>
              <span>{user?.email}</span>
            </div>
            {/* -- */}
            <div className="border-b-2 border-gray-300 p-2">
              <span>phone: </span>
              <span>{user?.phone}</span>
            </div>
            {/* -- */}
            <div className="border-b-2 border-gray-300 p-2">
              <span>birth date: </span>
              <span>{user?.dateOfBirth}</span>
            </div>
            {/* -- */}
            <div className="border-b-2 border-gray-300 p-2">
              <span>regirster date: </span>
              <span>{user?.registerDate}</span>
            </div>
            {/* -- */}
            <div className="border-b-2 border-gray-300 p-2">
              <span>location: </span>
              <span>
                {user?.location.street}, {user?.location.city}, {user?.location.state}, {user?.location.country}
              </span>
            </div>
            {/* -- */}
            <div className="border-b-2 border-gray-300 p-2">
              <span>time zone: </span>
              <span>{user?.location.timezone}</span>
            </div>
          </div>
          {/* user info - end */}
        </div>
      )}
      {/* profile - end */}
    </div>
  );
};

export default UserProfile;

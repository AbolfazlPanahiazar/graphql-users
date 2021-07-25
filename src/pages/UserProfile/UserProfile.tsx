import { FC, ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";

const UserProfile: FC<RouteComponentProps> = (): ReactElement => {
  return (
    <div>
      {/* header - start */}
      <header className="flex justify-center items-center p-5 rounded-b-md bg-blue-700">
        {/* back button - start */}
        <button className="text-gray-300 p-2 text-3xl rounded-full hover:bg-blue-500 transition-all duration-200 ease-in-out">
          <MdKeyboardBackspace />
        </button>
        {/* back button - end */}

        {/* user id - start */}
        <div className="flex-grow font-sans text-lg font-bold text-gray-300 ml-5">
          <span>user id: </span>
          <span>asd4f5as4df65a4s6df45as</span>
        </div>
        {/* user id - end */}
      </header>
      {/* header - end */}

      {/* profile - start */}
      <div className="font-sans text-gray-300">
        {/* picure - start */}
        <div className="flex justify-center items-center my-3">
          <img className="rounded-full w-32 h-32 object-cover" src="https://randomuser.me/api/portraits/med/men/61.jpg" alt="user picture" />
        </div>
        {/* picure - end */}

        {/* user info - start */}
        <div className="flex items-center justify-center text-xl font-extrabold my-3">
          <span className="text-3xl">
            <FcBusinessman />
          </span>
          <span className="ml-2">mr.</span>
          <span className="ml-2">Abolfazl</span>
          <span className="ml-2">Panahiazar</span>
        </div>
        <div className="flex flex-col justify-center items-center my-3 font-bold text-center mx-5">
          {/* -- */}
          <div className="border-b-2 border-gray-300 p-2">
            <span>email: </span>
            <span>abolfazlpanahiazar@gmail.com</span>
          </div>
          {/* -- */}
          <div className="border-b-2 border-gray-300 p-2">
            <span>phone: </span>
            <span>+989220382257</span>
          </div>
          {/* -- */}
          <div className="border-b-2 border-gray-300 p-2">
            <span>birth date: </span>
            <span>Thu Nov 02 1967 21:43:03 GMT+0000 (Coordinated Universal Time)</span>
          </div>
          {/* -- */}
          <div className="border-b-2 border-gray-300 p-2">
            <span>regirster date: </span>
            <span>Mon Jun 21 2021 21:02:21 GMT+0000 (Coordinated Universal Time)</span>
          </div>
          {/* -- */}
          <div className="border-b-2 border-gray-300 p-2">
            <span>location: </span>
            <span>street, city, state, country</span>
          </div>
          {/* -- */}
          <div className="border-b-2 border-gray-300 p-2">
            <span>time zone: </span>
            <span>+5:00</span>
          </div>
        </div>
        {/* user info - end */}
      </div>
      {/* profile - end */}
    </div>
  );
};

export default UserProfile;

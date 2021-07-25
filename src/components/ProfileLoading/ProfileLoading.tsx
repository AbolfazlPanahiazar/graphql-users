import { FC, ReactElement } from "react";

const ProfileLoading: FC = (): ReactElement => {
  return (
    <div data-testid="profileLoading" className="font-sans text-gray-300 animate-pulse">
      {/* picure - start */}
      <div className="flex justify-center items-center my-3">
        <div className="rounded-full w-32 h-32 bg-blue-700"></div>
      </div>
      {/* picure - end */}

      <div className="flex items-center justify-center text-xl font-extrabold my-3">
        <div className="w-3/4 h-5 rounded-md bg-blue-700"></div>
      </div>
      <div className="flex items-center justify-center text-xl font-extrabold my-3">
        <div className="w-3/4 h-5 rounded-md bg-blue-700"></div>
      </div>
      <div className="flex items-center justify-center text-xl font-extrabold my-3">
        <div className="w-3/4 h-5 rounded-md bg-blue-700"></div>
      </div>
      <div className="flex items-center justify-center text-xl font-extrabold my-3">
        <div className="w-3/4 h-5 rounded-md bg-blue-700"></div>
      </div>
      <div className="flex items-center justify-center text-xl font-extrabold my-3">
        <div className="w-3/4 h-5 rounded-md bg-blue-700"></div>
      </div>
      <div className="flex items-center justify-center text-xl font-extrabold my-3">
        <div className="w-3/4 h-5 rounded-md bg-blue-700"></div>
      </div>
    </div>
  );
};

export default ProfileLoading;

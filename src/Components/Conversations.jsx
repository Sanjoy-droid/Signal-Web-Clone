import React from "react";

const Conversations = () => {
  return (
    <>
      <div className="h-full flex-col space-y-4">
        <div className=" flex justify-center items-center pt-36">
          <img
            className="h-44 w-44  "
            src="./download__1_-removebg-preview.png"
            alt=""
          />
        </div>
        <div className=" flex justify-center">
          <h1 className="text-lg font-semibold text-white">
            Welcome to Signal
          </h1>
        </div>
        <div className="flex justify-center text-white">
          See <p className="text-blue-600">what's new</p> in this update
        </div>
      </div>
    </>
  );
};

export default Conversations;

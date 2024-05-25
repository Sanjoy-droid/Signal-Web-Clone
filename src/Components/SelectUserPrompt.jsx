import React from "react";

const SelectUserPrompt = () => {
  return (
    <div className="flex flex-col space-y-4 h-screen justify-center items-center text-white">
      <div className="flex justify-center items-center pt-20">
        <img
          className="h-44 w-44"
          src="./download__1_-removebg-preview.png"
          alt="Signal Logo"
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-lg font-semibold">
          Please select a user from the list on the left to start chatting.
        </h1>
      </div>
    </div>
  );
};

export default SelectUserPrompt;

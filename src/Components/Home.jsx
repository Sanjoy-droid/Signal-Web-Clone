import React from "react";
import Chatlists from "./Chatlists";
import Conversations from "./Conversations";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[100vh]">
        <div className="h-full flex">
          <div className="w-[32%] ">
            <Chatlists />
          </div>
          <div className="w-[68%]">
            <Conversations />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

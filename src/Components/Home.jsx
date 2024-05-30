import React from "react";
import Chatlists from "./Chatlists";
import Conversations from "./Conversations";

import Navbar from "./Navbar";
import Logout from "./Auth/Logout";
import Chatboard from "./Chatboard";
import LoginModal from "./Auth/LoginModal";

const Home = () => {
  const authToken = localStorage.getItem("token");
  return (
    <>
      {authToken ? (
        <>
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden  h-screen ">
            <div className="flex">
              <div className="w-[32%] ">
                <Chatlists />
              </div>
              <div className="w-[68%]">
                <Conversations />
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoginModal />
      )}
    </>
  );
};

export default Home;

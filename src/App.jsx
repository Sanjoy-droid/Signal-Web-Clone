import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Conversations from "./Components/Conversations";
import Chatlists from "./Components/Chatlists";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[100vh]">
        {/* <div className="bg-red-800 h-full flex">
          <div className="bg-blue-800 w-[30%]">hi</div>
          <div className="bg-green-800 w-[70%] flex justify-center items-center">
            <div className="bg-yellow-600">hello</div>
          </div>
        </div> */}
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
}

export default App;

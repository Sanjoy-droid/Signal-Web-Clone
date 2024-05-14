import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPenToSquare,
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Chatlists = () => {
  return (
    <>
      <div className=" bg-gray-700 h-full">
        {/* Chats Bar */}
        <div className="chats-bar flex justify-around items-center space-x-6 text-white p-2">
          {/* Three Bars */}
          <div className="hover:bg-gray-600 rounded-lg h-7 w-7 flex justify-center items-center">
            <FontAwesomeIcon icon={faBars} />
          </div>

          {/*Chats  */}
          <div className="font-semibold text-lg">Chats</div>
          {/* Edit */}
          <div className="hover:bg-gray-600 rounded-lg h-7 w-7 flex justify-center items-center ">
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          {/* Three dots */}
          <div className="hover:bg-gray-600 rounded-lg h-7 w-7 flex justify-center items-center">
            {" "}
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>

        {/* Search Bar */}
        <div
          className="search flex justify-center mx-4 h-9  rounded-lg
          border-2 border-solid border-gray-700  selection:bg-blue-500 selection:text-white"
        >
          <div className="search-icon w-8 flex items-center justify-center bg-[#24252549] rounded-l-lg    text-white">
            <FontAwesomeIcon className=" pl-3" icon={faMagnifyingGlass} />
          </div>
          <input
            className="w-full  rounded-r-lg bg-[#2425256c] text-white outline-none px-2"
            placeholder="Search "
          ></input>
        </div>
      </div>
    </>
  );
};

export default Chatlists;

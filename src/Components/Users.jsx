import React from "react";
import useConversation from "../store/useConversation";

const Users = ({ conversation }) => {
  const { selectedConversationId, setSelectedConversationId } =
    useConversation();
  const isSelected = selectedConversationId === conversation._id;
  const handleClick = () => {
    if (selectedConversationId !== conversation._id) {
      setSelectedConversationId(conversation);
    }
  };

  return (
    <div
      className={`flex items-center p-4 hover:bg-blue-800 cursor-pointer border-b border-t border-gray-300 ${
        isSelected ? "bg-blue-800" : ""
      }`}
      onClick={handleClick}
    >
      <img
        src={conversation.profilePic}
        alt={`${conversation.name}'s avatar`}
        className="h-12 w-12 rounded-full"
      />
      <div className="ml-4">
        <p className="text-gray-100 font-medium">{conversation.name}</p>
        <p className="text-gray-300 text-sm">{conversation.email}</p>
      </div>
    </div>
  );
};

export default Users;

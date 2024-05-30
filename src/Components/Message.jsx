import React from "react";
import useConversation from "../zustand store/useConversation";
import { jwtDecode } from "jwt-decode";
import useListenMessages from "../hooks/useListenMessages";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  useListenMessages();

  const authToken = localStorage.getItem("token");
  let userId;

  if (authToken) {
    try {
      const decodedToken = jwtDecode(authToken);
      userId = decodedToken.user.id;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  } else {
    console.error("No authentication token found.");
  }

  const fromMe = message.senderId === userId;
  return (
    <>
      <div
        className={`flex ${
          fromMe ? "justify-end mr-2" : "justify-start"
        }  mb-2 `}
      >
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
            fromMe ? "bg-blue-600" : "bg-violet-800"
          } text-white`}
        >
          <p>{message.message}</p>
        </div>
      </div>
    </>
  );
};

export default Message;

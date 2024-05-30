import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import useConversation from "../zustand store/useConversation";
import useGetMessages from "../hooks/useGetMessages";
import useListenMessages from "../hooks/useListenMessages";
import Message from "./Message";

const Chat = () => {
  const { selectedConversation } = useConversation();

  const authToken = localStorage.getItem("token");
  const decodedToken = jwtDecode(authToken);
  const userId = decodedToken._id;

  const { messages, loading } = useGetMessages();

  // useListenMessages();

  return (
    <div className="flex-1 overflow-y-scroll mb-4">
      {authToken &&
        messages.map((msg, index) => <Message key={index} message={msg} />)}
    </div>
  );
};

export default Chat;

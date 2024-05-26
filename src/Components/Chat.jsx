import React, { useEffect } from "react";
import useConversation from "../store/useConversation";
import useGetMessages from "../hooks/useGetMessages";

const Chat = () => {
  const { messages } = useConversation();
  const { loading } = useGetMessages(); // Trigger the hook to fetch messages

  useEffect(() => {
    if (!loading) {
      console.log("Messages:", messages);
    }
  }, [loading, messages]);

  return (
    <div className="flex-1 overflow-y-auto mb-4">
      {messages.map((msg, index) => (
        <div key={index} className="flex justify-end mb-2">
          <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg bg-blue-600 text-white">
            <p>{msg.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;

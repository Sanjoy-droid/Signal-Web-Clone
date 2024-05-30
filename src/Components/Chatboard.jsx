import React, { useEffect } from "react";
import useConversation from "../zustand store/useConversation";
import MessageInput from "./MessageInput";
import SelectUserPrompt from "./SelectUserPrompt";
import Chat from "./Chat";

const Chatboard = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return !selectedConversation ? (
    <SelectUserPrompt />
  ) : (
    <div className="flex flex-col h-[38rem] p-4 bg-gray-800 ">
      <div className="text-gray-300 mb-4">
        {`To: ${selectedConversation.name}`}
      </div>
      <Chat />
      <MessageInput />
    </div>
  );
};

export default Chatboard;

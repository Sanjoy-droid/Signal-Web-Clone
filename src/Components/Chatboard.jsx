import React from "react";
import useConversation from "../store/useConversation";
import MessageInput from "./MessageInput";
import SelectUserPrompt from "./SelectUserPrompt";
import Chat from "./Chat";

const Chatboard = () => {
  const { selectedConversationId } = useConversation();

  return !selectedConversationId ? (
    <SelectUserPrompt />
  ) : (
    <div className="flex flex-col h-full p-4 bg-gray-800">
      <div className="text-gray-300 mb-4">
        {`Conversation with ID: ${selectedConversationId}`}
      </div>
      <Chat />
      <MessageInput />
    </div>
  );
};

export default Chatboard;

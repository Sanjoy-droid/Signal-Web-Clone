import React from "react";
import useConversation from "../store/useConversation";
import MessageInput from "./MessageInput";
import SelectUserPrompt from "./SelectUserPrompt";

const Chatboard = () => {
  const { selectedConversationId, messages } = useConversation();

  return !selectedConversationId ? (
    <SelectUserPrompt />
  ) : (
    <div className="flex flex-col h-full p-4 bg-gray-800">
      <div className="text-gray-300 mb-4">
        {`Conversation with ID: ${selectedConversationId}`}
      </div>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="flex justify-end mb-2">
            <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg bg-blue-600 text-white">
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default Chatboard;

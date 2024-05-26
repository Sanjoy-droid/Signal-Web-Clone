import { create } from "zustand";

// Zustand store for conversation state management
const useConversation = create((set) => ({
  selectedConversation: null, // Change to hold the full conversation object
  selectedConversationId: null,
  setSelectedConversationId: (conversation) =>
    set({
      selectedConversation: conversation,
      selectedConversationId: conversation._id,
    }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;

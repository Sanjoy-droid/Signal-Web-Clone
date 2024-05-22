import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversationId: null,
  setSelectedConversationId: (selectedConversationId) =>
    set({ selectedConversationId }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;

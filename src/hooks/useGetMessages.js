import React, { useState, useEffect } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversationId, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversationId) return; // Ensure we have a conversation ID

      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No authentication token found.");
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversationId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversationId, setMessages]);

  return { loading };
};

export default useGetMessages;

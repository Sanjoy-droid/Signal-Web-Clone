import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  // Retrieve authToken from local storage
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    const getConversations = async () => {
      if (!authToken) {
        console.error("No auth token found");
        return;
      }

      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, [authToken]);

  return { loading, conversations };
};

export default useGetConversations;

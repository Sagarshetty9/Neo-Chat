import useTitle from "../hooks/useTitle.js"
import ChatBox from "../components/ChatBox.jsx";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

import { toast } from 'react-toastify';

import { userApi } from "../api/userApi.js";
import { AuthContext } from "../context/authContext.jsx";
import { useContext, useState, useEffect } from "react";



function ChatDashboard() {
  const { user, loading } = useContext(AuthContext);
  const [targetUserId, setTargetUserId] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
    useTitle("Chat Dashboard");

  useEffect(() => {
    if (user?.contacts) {
      setContacts(user.contacts);
    }
  }, [user]);

  const handleAddContact = async (contactId) => {
    try {
      const result = await userApi.addContact(contactId);
      setContacts((prev) => [...prev, result.data.contact]);
      toast.success("Added successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add contact");
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="flex flex-col h-screen bg-neo-canvas">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          contacts={contacts} 
          onSelectContact={setTargetUserId}
          onAddContact={handleAddContact}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          targetUserId={targetUserId}
        />
        <ChatBox targetUserId={targetUserId} />
      </div>
    </div>
  );
}

export default ChatDashboard;
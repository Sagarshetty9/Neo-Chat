import Button from "../components/ui/Button.jsx";
import SearchUser from "../components/SearchUser.jsx";
import ContactList from "../components/ContactList.jsx";
import ChatBox from "../components/ChatBox.jsx";
import Navbar from "../components/Navbar.jsx";

import { addContactApi } from "../api/userApi.js";
import { AuthContext } from "../context/authContext.jsx";
import { useContext } from "react";

import { useState, useEffect } from "react";

function ChatDashboard() {
  const { user, loading, setUser } = useContext(AuthContext);
  const [targetUserId, setTargetUserId] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (user?.contacts) {
      setContacts(user.contacts);
    }
  }, [user]);

  const handleAddContact = async (contactId) => {
    const result = await addContactApi(contactId);
    setContacts((prev) => [...prev, result.contact]);
  };

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <div className="">
        <Navbar />

        <div>
          <SearchUser onSelectUser={handleAddContact} />
        </div>
        <div className="flex">
          <ContactList contacts={contacts} onSelectContact={setTargetUserId} />
          <ChatBox targetUserId={targetUserId} />
        </div>
      </div>
    </>
  );
}

export default ChatDashboard;

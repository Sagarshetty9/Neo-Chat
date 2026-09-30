import { useState, useCallback } from "react";
import { debounce } from "../utils/debounce.js";
import Input from "../components/ui/Input.jsx";
import { userApi } from "../api/userApi.js";
import UserCard from "./UserCard.jsx";

function SearchUser({ onSelectUser }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = useCallback(
    debounce(async (value) => {
      if (value.length < 2) {
        setResults([]);
        return;
      }
      try {
        const res = await userApi.searchUsers(value);
        setResults(res.data.users || []);
      } catch (error) {
        setResults([]);
      }
    }, 300),
    []
  );
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <div>
      <Input
        label="Find users"
        id="search"
        placeholder="🔍︎ Find someone..."
        value={search}
        onChange={handleChange}
      />

      {results.length > 0 ? (
        <div className="max-h-80 overflow-y-auto border">
          {results.map((user) => (
            <UserCard key={user._id} user={user} onSelectUser={onSelectUser} />
          ))}
        </div>
      ) : search.length > 2 ? (
        <p className="p-3 border-b border-neo-divider bg-neo-paper">
          No users found
        </p>
      ) : null}
    </div>
  );
}

export default SearchUser;
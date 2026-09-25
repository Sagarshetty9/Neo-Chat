import { useState } from "react";
import Input from "../components/ui/Input.jsx";
import { searchUserApi } from "../api/userApi.js";
import UserCard from "./UserCard.jsx";

function SearchUser({}) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 2) {
      const results = await searchUserApi(value)
      setResults(results)
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <Input
        label="Find users"
        id="search"
        placeholder="Find someone"
        value={search}
        onChange={handleSearch}
      />

      <UserCard results={results}/>
    </div>
  );
}

export default SearchUser;

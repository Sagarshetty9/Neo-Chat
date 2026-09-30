import { authApi } from "../api/authApi.js";
import { userApi } from "../api/userApi.js";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const result = await userApi.getUserDetails();
        setUser(result.data.user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ authApi, userApi, logout, user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
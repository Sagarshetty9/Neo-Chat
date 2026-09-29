import { registerApi, loginApi, logoutApi } from "../api/authApi.js";
import { getUserDetailsApi } from "../api/userApi.js";

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = async (credentials) => {
    const result = await registerApi(credentials);
    return result;
  };

  const login = async (credentials) => {
    const result = await loginApi(credentials);
    return result;
  };

  const logout = async () => {
    await logoutApi();
  };

  useEffect(() => {
    async function fetchUser() {
      const result = await getUserDetailsApi();
      setUser(result);
      setLoading(false)
    }
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, register, user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

import { registerApi, loginApi, logoutApi } from "../api/authApi.js";
import { createContext } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const register = async (credentials) => {
    await registerApi(credentials);
  };

  const login = async (credentials) => {
    await loginApi(credentials);
  };

  const logout = async () => {
    await logoutApi();
  };

  return (
    <AuthContext.Provider value={{ login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

import { api } from "./axios";

export const authApi = {
  register: (credentials) => 
    api.post("/auth/register", credentials),
  
  login: (credentials) => 
    api.post("/auth/login", credentials),
  
  logout: () => 
    api.post("/auth/logout"),
  
  getUserDetails: () => 
    api.get("/users/user-details")
};
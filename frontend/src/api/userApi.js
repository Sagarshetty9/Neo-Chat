import { api } from "./axios.js";

export const userApi = {
  searchUsers: (query) => 
    api.get("/users/search", { params: { username: query } }),
  
  addContact: (contactId) => 
    api.post("/users/add-contact", {contactId }),
  
  getUserDetails: () => 
    api.get("/users/user-details")
};
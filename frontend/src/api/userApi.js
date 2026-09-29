import { api } from "./axios.js";

export async function searchUserApi(query) {
  try {
    const response = await api.get("/users/search", {
      params: { username: query },
    });
    return response.data.users;
  } catch (error) {
    console.warn(error.response?.data?.message || "Not from server");
    return [];
  }
}

export async function addContactApi(contactId) {
  try {
    const response = await api.post("/users/add-contact", {contactId});
    return response.data;
  } catch (error) {
    console.warn(error.response?.data?.message || "Not from server");
  }
}


export async function getUserDetailsApi() {
  try {
    const response = await api.get("/users/getUserDetails");
    return response.data.user;
  } catch (error) {
    console.warn(error.response?.data?.message || "Not from server");
  }
}

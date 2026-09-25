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

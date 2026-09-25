import { api } from "./axios";

export const registerApi = async (credentials) => {
  try {
    const res = await api.post("/auth/register", credentials);
    return res.data;
  } catch (error) {
    console.warn(error?.response?.data?.message || "Not from server");
  }
};

export const loginApi = async (credentials) => {
  try {
    const res = await api.post("auth/login", credentials);
    return res.data;
  } catch (error) {
    console.warn(error?.response?.data?.message || "Not from server");
  }
};

export const logoutApi = async () => {
  try {
    const res = await api.post("auth/logout");
    return res.data;
  } catch (error) {
    console.warn(error?.response?.data?.message || "Not from server");
  }
};

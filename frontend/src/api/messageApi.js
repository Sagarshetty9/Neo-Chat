import { api } from "./axios";

export const messagesApi = {
  getMessages: (targetUserId) =>
    api.get(`/messages?targetUserId=${targetUserId}`),
  markMessagesAsRead: (targetUserId) =>
    api.post("/messages/mark-read", { targetUserId }),
};

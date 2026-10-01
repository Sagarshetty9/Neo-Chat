import { io } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";

export const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      const newSocket = io(import.meta.env.VITE_SOCKET_URL, {
        withCredentials: true,
      });
      setSocket(newSocket);
      return () => newSocket.disconnect();
    }
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

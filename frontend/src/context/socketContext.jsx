import { io } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";

export const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      const newSocket = io("http://localhost:3000", {
        withCredentials: true, // ← This sends cookies
      });
      setSocket(newSocket);
      return () => newSocket.disconnect();
    }
  }, [user]);

  return (
    <SocketContext.Provider value={{socket}}>
      {children}
    </SocketContext.Provider>
  );
}

import { createContext, useState, useContext } from "react";
import socketClient from "socket.io-client";

const SocketContext = createContext();
const SERVER_IP = process.env.SERVER_IP || "http://localhost:8080/";

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState(socketClient(SERVER_IP));

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
}

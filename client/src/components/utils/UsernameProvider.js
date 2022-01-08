import { createContext, useState, useContext } from "react";

const UsernameContext = createContext();

export function useUsername() {
  return useContext(UsernameContext);
}

export default function UsernameProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}

import { createContext, useContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

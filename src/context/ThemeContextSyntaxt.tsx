import { createContext, ReactNode } from "react";

const UserContext = createContext("");

const UserContextProvider = UserContext.Provider;

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <UserContextProvider value="userValue">{children}</UserContextProvider>
  );
}

export { UserContext, ContextProvider };

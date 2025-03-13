import { useState, ReactNode } from "react";
import { AppContext } from "./AppContext";

// Define props for the provider
interface AppProviderProps {
  children: ReactNode;
}

// Create and export the provider component
export const AppProvider = ({ children }: AppProviderProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AppContext.Provider>
  );
};

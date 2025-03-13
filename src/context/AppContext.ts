import { createContext } from "react";

// Define the shape of the context state
export interface AppContextType {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

// Create and export the context
export const AppContext = createContext<AppContextType | undefined>(undefined);

import { createContext } from "react";

export interface AppContextType {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

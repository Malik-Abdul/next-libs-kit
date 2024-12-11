import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ThemeContext.Provider;

export { ThemeContextProvider };
export default ThemeContext;

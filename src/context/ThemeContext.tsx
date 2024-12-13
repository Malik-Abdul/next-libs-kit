"use client";
import {
  createContext,
  FC,
  Fragment,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// const ThemeContextProvider = ThemeContext.Provider;

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <Fragment>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </Fragment>
  );
};
export { ThemeProvider, ThemeContext };

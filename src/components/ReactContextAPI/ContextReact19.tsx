"use client";
import { createContext, FC, Fragment, useContext, useState } from "react";

interface ContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ContextSTheme = createContext<ContextType | undefined>(undefined);

const ComponentB1 = () => {
  const ContextS = useContext(ContextSTheme);
  if (!ContextS) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { theme, setTheme } = ContextS;
  return (
    <Fragment>
      <div>ComponentB1</div>
      <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
        Change Theme
      </button>
      <div>ContextSValue: {theme}</div>
    </Fragment>
  );
};

const ComponentA1 = () => {
  return (
    <Fragment>
      <div>ComponentA1</div>

      <ComponentB1 />
    </Fragment>
  );
};

const ContextReact19: FC = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ContextSTheme value={{ theme, setTheme }}>
      <Fragment>
        <div>ContextReact19</div>

        <ComponentA1 />
      </Fragment>
    </ContextSTheme>
  );
};

export default ContextReact19;

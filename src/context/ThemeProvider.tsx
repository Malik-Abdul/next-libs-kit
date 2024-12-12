"use client";
import React, { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { ThemeContextProvider } from "./ThemeContext";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  let storedTheme: string | null = "dark";
  if (typeof window !== "undefined") {
    storedTheme = localStorage.getItem("theme");
  }
  console.log("storedTheme", storedTheme);
  const [theme, setTheme] = useState<string>(
    storedTheme === "dark" || storedTheme === "light" ? storedTheme : "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <Fragment>
      <ThemeContextProvider value={{ theme, setTheme }}>
        {children}
      </ThemeContextProvider>
    </Fragment>
  );
};
export { ThemeProvider };

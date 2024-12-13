import { Fragment, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Footer = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { theme } = context;
  return (
    <Fragment>
      <footer className={`footer ${theme}`}>Footer</footer>
    </Fragment>
  );
};

export default Footer;

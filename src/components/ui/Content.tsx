import { FC, useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";

import { Fragment } from "react/jsx-runtime";

const Content: FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { theme } = context;
  return (
    <Fragment>
      <div className={`content ${theme} mt-[41] pt-[46px] pl-10`}>
        {children}
      </div>
    </Fragment>
  );
};

export default Content;

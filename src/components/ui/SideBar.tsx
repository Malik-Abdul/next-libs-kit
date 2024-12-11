"use client";
import { Fragment, useContext, useState } from "react";

import Link from "next/link";

import ThemeContext from "@/context/ThemeContext";
import DropDown from "./DropDown";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  // Toggle the state of a submenu (open/close)

  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { theme } = context;

  const nav = [
    { id: 1, title: "React Redux", link: "/redux" },
    { id: 2, title: "React Query", link: "/reactQuery" },
    { id: 3, title: "Some Important Link 3", link: "/" },
    { id: 4, title: "Some Important Link 4", link: "/" },
    { id: 5, title: "Some Important Link 5", link: "/" },
  ];
  // data/menu.js

  return (
    <Fragment>
      <div className={`sideBar ${theme}`}>
        <nav className="side-menu">
          {nav.map((item) => (
            <Link
              key={item.id}
              className={
                activeLink == item.id
                  ? `side-eachNave ${theme} active`
                  : `side-eachNave ${theme}`
              }
              href={item.link}
              onClick={() => {
                setActiveLink(item.id);
              }}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div>
          {/* Start */}
          <DropDown theme={theme} />
          {/* End */}
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;

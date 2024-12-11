import React, { Fragment, useContext, useState } from "react";

import Link from "next/link";

import ThemeContext from "@/context/ThemeContext";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState("dark");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setTheme(event.target.value);
    // setTheme(theme === "dark" ? "light" : "dark");
  };

  const nav = [
    { id: 1, title: "Page 1", link: "/" },
    { id: 2, title: "Page 2", link: "/" },
    { id: 3, title: "Page 3", link: "/" },
    { id: 4, title: "Page 4", link: "/" },
    { id: 5, title: "Page 5", link: "/" },
  ];
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { theme, setTheme } = context;

  console.log(theme);

  return (
    <Fragment>
      <div className="page-header">
        <nav className={`top-menu ${theme}`}>
          <div className="nav-links">
            {nav.map((item) => (
              <Link
                key={item.id}
                className={
                  activeLink == item.id
                    ? `top-eachNave ${theme} active`
                    : `top-eachNave ${theme}`
                }
                href={item.link}
                onClick={() => {
                  setActiveLink(item.id);
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="theme-switcher">
            <label>
              <input
                type="radio"
                name="options"
                value="dark"
                checked={theme === "dark"}
                onChange={handleChange}
              />
              Dark
            </label>
            <label>
              <input
                type="radio"
                name="options"
                value="light"
                checked={theme === "light"}
                onChange={handleChange}
              />
              Light
            </label>
          </div>

          {/* <label>
            <input
              type="radio"
              name="options"
              value="dark"
              checked={theme === "dark"}
              onChange={handleChange}
            />
            Dark
          </label>
          <label>
            <input
              type="radio"
              name="options"
              value="light"
              checked={theme === "light"}
              onChange={handleChange}
            />
            Light
          </label> */}
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;

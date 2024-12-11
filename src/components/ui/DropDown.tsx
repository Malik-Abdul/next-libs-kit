import Link from "next/link";
import React, { useEffect, useState } from "react";

const DropDown = ({ theme }: { theme: string }) => {
  const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [activeLink, setActiveLink] = useState<number>(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = (title: string) => {
    setOpenMenu((prev) => ({
      ...prev,
      [title]: !prev[title], // Toggle submenu visibility
    }));
  };

  const renderSubMenu = (subMenu: any[]) => {
    return (
      <ul className="submenu">
        {subMenu.map((item, index) => (
          <li key={index}>
            <div
              onClick={() => {
                item.subMenu && toggleMenu(item.title),
                  setActiveLink(item.id ? item.id : 0);
              }}
              className="submenu-item"
            >
              <Link
                href={item.url || "#"}
                className={
                  activeLink === item.id ? `${theme} active` : `${theme}`
                }
              >
                {item.title}
              </Link>
              {/* Add arrow icon based on submenu open/closed state */}
              {item.subMenu && (
                <span className="arrow">
                  {openMenu[item.title] ? "▲" : "▼"}
                </span>
              )}
            </div>
            {/* Recursively render submenus if they exist */}
            {item.subMenu &&
              openMenu[item.title] &&
              renderSubMenu(item.subMenu)}
          </li>
        ))}
      </ul>
    );
  };

  const menuItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "React-Query",
      url: "/reactQuery",
    },
    {
      title: "Redux",
      subMenu: [
        { id: 4, title: "Web Development", url: "/reactQuery" },
        { id: 5, title: "App Development", url: "/reactQuery" },
      ],
    },
    {
      title: "More",
      subMenu: [
        { id: 7, title: "Contact", url: "/reactQuery" },
        {
          title: "FAQ",
          subMenu: [
            { id: 9, title: "General FAQ", url: "/redux" },
            { id: 10, title: "Account FAQ", url: "/redux" },
          ],
        },
        { id: 11, title: "Privacy Policy", url: "/redux" },
      ],
    },
  ];

  if (!isMounted) {
    return null; // Avoid rendering until it's mounted
  }

  return (
    <ul className="menu">
      {menuItems.map((item, index) => (
        <li key={index}>
          <div
            onClick={() => {
              item.subMenu && toggleMenu(item.title),
                setActiveLink(item.id ? item.id : 0);
            }}
            className="menu-item"
          >
            <Link
              href={item.url || "#"}
              className={activeLink === item.id ? "active" : ""}
            >
              {item.title}
            </Link>
            {/* Add arrow icon if there are submenus */}
            {item.subMenu && (
              <span className="arrow">{openMenu[item.title] ? "▲" : "▼"}</span>
            )}
          </div>
          {item.subMenu && openMenu[item.title] && renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;

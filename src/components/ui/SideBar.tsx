import { Fragment, useState } from "react";

import Link from "next/link";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  const nav = [
    { id: 1, title: "React Redux", link: "/redux" },
    { id: 2, title: "Some Important Link 2", link: "/" },
    { id: 3, title: "Some Important Link 3", link: "/" },
    { id: 4, title: "Some Important Link 4", link: "/" },
    { id: 5, title: "Some Important Link 5", link: "/" },
  ];
  return (
    <Fragment>
      <div className="sideBar">
        <nav className="side-menu">
          {nav.map((item) => (
            <Link
              key={item.id}
              className={
                activeLink == item.id ? "side-eachNave active" : "side-eachNave"
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
      </div>
    </Fragment>
  );
};

export default SideBar;

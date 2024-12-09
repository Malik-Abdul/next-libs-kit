import { Fragment, useState } from "react";

import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const nav = [
    { id: 1, title: "Page 1", link: "/" },
    { id: 2, title: "Page 2", link: "/" },
    { id: 3, title: "Page 3", link: "/" },
    { id: 4, title: "Page 4", link: "/" },
    { id: 5, title: "Page 5", link: "/" },
  ];

  return (
    <Fragment>
      <div className="page-header">
        <nav className="top-menu">
          {nav.map((item) => (
            <Link
              key={item.id}
              className={
                activeLink == item.id ? "top-eachNave active" : "top-eachNave"
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

export default Header;

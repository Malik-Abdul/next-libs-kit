"use client";
import { Fragment, JSX, useState } from "react";
import Mock00APIIntegration from "./Mock00APIIntegration";
import Mock01LazyLoading from "./Mock01LazyLoading";
import Mock02Memoization from "./Mock02Memoization";

const Mock = () => {
  const [showMock, setShowMock] = useState(1);
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const allMocks: { [key: number]: JSX.Element } = {
    0: <Mock00APIIntegration />,
    1: <Mock01LazyLoading />,
    2: <Mock02Memoization />,
  };
  const links = [
    { title: "Mock00APIIntegration", value: 0 },
    { title: "Mock01LazyLoading", value: 1 },
    { title: "Mock02Memoization", value: 2 },
  ];
  return (
    <Fragment>
      <div>
        <h1>Mock Interviews</h1>
      </div>
      <div className="pageLinks">
        {links.map((link) => (
          <a
            // {...(activeLink == link.value && { className: "active" })}
            className={activeLink == link.value ? "active" : undefined}
            key={link.value}
            onClick={() => {
              setShowMock(link.value);
              setActiveLink(link.value);
            }}
          >
            {link.title}
          </a>
        ))}
      </div>
      {allMocks[showMock]}
    </Fragment>
  );
};

export default Mock;

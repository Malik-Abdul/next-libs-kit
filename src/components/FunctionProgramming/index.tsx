"use client";
import { Fragment, JSX, useState } from "react";
import FP00Closure from "./FP00Closure";

const FunctionProgramming = () => {
  const [showMock, setShowMock] = useState(1);
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const allMocks: { [key: number]: JSX.Element } = {
    0: <FP00Closure />,
  };
  const links = [{ title: "FP00Closure", value: 0 }];
  return (
    <Fragment>
      <div>
        <h1>Function Programming</h1>
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

export default FunctionProgramming;

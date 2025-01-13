"use client";
import { FC, Fragment, JSX, useState } from "react";

interface AllMocks {
  [key: number]: JSX.Element;
}

interface Links {
  title: string;
  value: number;
}

const RenderLinks: FC<{ links: Links[]; allMocks: AllMocks }> = ({
  links,
  allMocks,
}) => {
  const [showMock, setShowMock] = useState(0);
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  return (
    <Fragment>
      <div className="pageLinks mb-4">
        {links
          ? links.map((link) => (
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
            ))
          : ""}
      </div>
      {allMocks[showMock]}
    </Fragment>
  );
};

export default RenderLinks;

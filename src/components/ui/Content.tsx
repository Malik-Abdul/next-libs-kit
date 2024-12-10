import { FC } from "react";

import { Fragment } from "react/jsx-runtime";

const Content: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <div className="content">{children}</div>
    </Fragment>
  );
};

export default Content;

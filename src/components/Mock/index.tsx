"use client";
import { Fragment, JSX } from "react";
import Mock00APIIntegration from "./Mock00APIIntegration";
import Mock01LazyLoading from "./Mock01LazyLoading";
import Mock02Memoization from "./Mock02Memoization";
import RenderLinks from "../utils/RenderLinks";

const Mock = () => {
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
      <RenderLinks links={links} allMocks={allMocks} />
    </Fragment>
  );
};

export default Mock;

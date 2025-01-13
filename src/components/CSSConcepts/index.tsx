"use client";
import { Fragment, JSX } from "react";
import CSS01BoxSizing from "./CSS01BoxSizing";
import Mock01LazyLoading from "./Mock01LazyLoading";
import Mock02Memoization from "./Mock02Memoization";
import RenderLinks from "../utils/RenderLinks";

const CSSConcepts = () => {
  const allMocks: { [key: number]: JSX.Element } = {
    0: <CSS01BoxSizing />,
    1: <Mock01LazyLoading />,
    2: <Mock02Memoization />,
  };
  const links = [
    { title: "CSS01BoxSizing", value: 0 },
    { title: "Mock01LazyLoading", value: 1 },
    { title: "Mock02Memoization", value: 2 },
  ];
  return (
    <Fragment>
      <div className="prose dark:prose-dark">
        <h1>CSS Concepts</h1>
      </div>
      <RenderLinks links={links} allMocks={allMocks} />
    </Fragment>
  );
};

export default CSSConcepts;

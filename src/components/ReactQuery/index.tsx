"use client";
import { Fragment } from "react";

import RQTheory from "./RQTheory";
import RQPractice from "./RQPractice";
import PdfGenerator from "./PdfGenerator";

const ReactQuery = () => {
  return (
    <Fragment>
      <RQTheory />
      <RQPractice />
      <PdfGenerator />
    </Fragment>
  );
};

export default ReactQuery;

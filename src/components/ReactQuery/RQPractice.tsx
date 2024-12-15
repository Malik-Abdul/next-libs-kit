"use client";
import Link from "next/link";
import { Fragment } from "react";
import Polling from "./Polling";
import LongPolling from "./LongPolling";
import UseQueryHook from "./UseQueryHook";

const RQPractice = () => {
  return (
    <Fragment>
      <div>
        {/* <Polling /> */}

        {/* <LongPolling /> */}

        <UseQueryHook />
      </div>
    </Fragment>
  );
};

export default RQPractice;

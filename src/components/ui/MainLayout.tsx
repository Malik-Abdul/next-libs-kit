"use client";
import { FC, Fragment, useState } from "react";
import ReactHooks from "../ReactHooks";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Content from "./Content";

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="main">
        <SideBar />
        <Content>{children}</Content>
      </div>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;

import React from "react";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import { Outlet } from "react-router-dom";

const Dashhome = () => {
  return (
    <>
      <DashHeader />
      <Outlet />
      <DashFooter />
    </>
  );
};

export default Dashhome;

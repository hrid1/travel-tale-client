import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navber from "../components/common/Navber";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="bg-orange-50">
      <Navber />
      <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-268px)] ">
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

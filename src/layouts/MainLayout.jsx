import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../components/common/Navber";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-268px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

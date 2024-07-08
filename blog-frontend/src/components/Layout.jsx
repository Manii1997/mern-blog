import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section className="flex min-h-[100vh] flex-col">
      <Header />
      <div className="grow bg-gray-100 p-3">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;

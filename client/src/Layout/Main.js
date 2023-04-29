import React from "react";
import Navbar from "../Routes/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Routes/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

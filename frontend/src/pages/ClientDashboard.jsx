import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarRouting from "../utils/NavbarRouting";

const ClientDashboard = () => {
  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-gray-50">
      <Navbar />
      <NavbarRouting />
      <Footer />
    </div>
  );
};

export default ClientDashboard;

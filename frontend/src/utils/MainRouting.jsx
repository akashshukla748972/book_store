import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import ClientDashboard from "../pages/ClientDashboard";

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<ClientDashboard />} />
      </Routes>
    </>
  );
};

export default MainRouting;

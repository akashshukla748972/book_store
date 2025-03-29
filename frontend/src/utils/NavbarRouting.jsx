import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Course from "../pages/Course";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Signup from "../pages/Signup";

const NavbarRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default NavbarRouting;

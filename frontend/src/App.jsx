import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRouting from "./utils/MainRouting";

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-gray-50">
      <Navbar />
      <MainRouting />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRouting from "./utils/MainRouting";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRouting />
      <Footer />
    </div>
  );
};

export default App;

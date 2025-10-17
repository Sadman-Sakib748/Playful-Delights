import React from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-320px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;

"use client"
import React from "react";
import Home from "./_components/Home";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <>
        <div className="h-screen w-screen overflow-x-hidden dark:bg-slate-900">
          <Navbar />
          <Home />
          <Footer />
        </div>
    </>
  );
};

export default page;

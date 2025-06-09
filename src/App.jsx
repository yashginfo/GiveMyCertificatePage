import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Intro from "./components/Intro";
import Certificate from "./components/Certificate";
import Details from "./components/Details";
import Skills from "./components/Skills";
import Issued from "./components/Issued";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="overflow-x-hidden bg-black scroll-smooth text-gray-100 min-h-screen"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Blue flare effects */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/5 left-1/5 w-84 h-84 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/2 right-1/2 w-96 h-96 bg-purple-800 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
        </div>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Intro />
            <Certificate/>
           <Details/>
           <Skills/>
           <Issued/>
           <Footer/>
          </main>
      </div>
     
    </>
  );
}

export default App;

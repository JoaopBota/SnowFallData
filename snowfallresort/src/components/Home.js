import React from "react";
import Resort from "./Resort"
import "./Home.css"

function Home() {

  return (
    <>
      <div className=" font-body container px-5 py-24 mx-auto"><h1 className="text-xl font-bold px-5 py-2 text-center sm:text-7xl sm:text-left">Snowfall Data</h1><h1 className=" text-xl font-bold px-5 py-2 text-center sm:text-7xl sm:text-left">from your favourite</h1><h1 className=" text-xl font-bold px-5 py-2 text-center mb-10 sm:text-7xl sm:text-left"> Ski Resort</h1></div>
      <Resort />
    </>
  )
  
}

export default Home;

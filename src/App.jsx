import React from "react";
import NavBar from "./component/navbar/NavBar";
import Hero from "./component/hero/Hero";
import Service from "./component/service/Service";
import AppStore from "./component/appstore/AppStore";
import Testtimonia from "./component/tesimonia/Testtimonia";

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Service />
    <AppStore />
    <Testtimonia />
    </>
  );
};

export default App;

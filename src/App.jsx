import React, { useEffect } from "react";
import NavBar from "./component/navbar/NavBar";
import Hero from "./component/hero/Hero";
import Service from "./component/service/Service";
import AppStore from "./component/appstore/AppStore";
import Testtimonia from "./component/tesimonia/Testtimonia";
import AOS from "aos"
import "aos/dist/aos.css";
import Footer from "./component/footer/Footer";
import Coffee from "./component/coffee/Coffee";

const App = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing: "ease-in-sine",
      delay: 100
    })
    AOS.refresh()
  },[])
  return (
    <>
    <NavBar />
    <Hero />
    <Coffee/>
    <Service />
    <AppStore />
    <Testtimonia />
    <Footer />
    </>
  );
};

export default App;

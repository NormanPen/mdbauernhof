import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Dropdown from "./components/Dropdown";
import Home from "./sites/Home";
import About from "./sites/About";
import Program from "./sites/Program";
import Animals from "./sites/Animals";
import Contact from "./sites/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="max-w-screen-2xl m-0 m-auto">
      <div className="bg-black ">
        <Router>
          <Navigation />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Home path="/" exact component={Home} />
            <About path="/ueberuns" />
            <Program path="/programm" />
            <Animals path="/tiere" />
            <Contact patch="/kontakt" />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;

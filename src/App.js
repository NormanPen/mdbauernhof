import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Dropdown from "./components/Dropdown";
import Home from "./sites/Home";

import "./App.css";
import Footer from "./components/Footer";
import DropdownTest from "./components/DropdownTest";

function App() {
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
    <div className="App">
      <div className="bg-gray-200 relative text-center	">
        <Router>
          <Navigation />
          <DropdownTest />
          <Switch>
            <Home />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

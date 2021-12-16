import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Dropdown from "./components/Dropdown";
import Home from "./sites/Home";
import About from "./sites/About";
import Program from "./sites/Program";
import Animals from "./sites/Animals";
import Contact from "./sites/Contact";
import Footer from "./components/Footer";
import ContactFooter from "./components/ContactFooter";
import Imprint from "./sites/Imprint";
import MailError from "./sites/MailError";
import NotAvailable from "./sites/NotAvailable";
import ScrollToTop from "./helper/ScrollTotop";

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
    <div className="font-SignikaNegative">
      <HashRouter>
        <ScrollToTop>
          <div className="m-0 m-auto max-w-screen-2xl">
            <Navigation />
            <Dropdown isOpen={isOpen} toggle={toggle} />
          </div>
          <div className="m-0 m-auto max-w-screen-3xl">
            <Switch>
              <Home path="/" exact component={Home} />
              <About path="/ueberuns" component={About} />
              <Program path="/programm" component={Program} />
              <Animals path="/tiere" component={Animals} />
              <Contact path="/kontakt" component={Contact} />
              <Imprint path="/impressum" component={Imprint} />
              <MailError path="/mailfehler" component={MailError} />
              <Route component={NotAvailable} />
            </Switch>
          </div>
          <ContactFooter />
          <Footer />
        </ScrollToTop>
      </HashRouter>
    </div>
  );
};

export default App;

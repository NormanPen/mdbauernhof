import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/Logo.svg";

const menuItems = [
  {
    id: "1",
    title: "Home",
    path: "/",
    className: "text-web-blue",
  },
  {
    id: "2",
    title: "Über Uns",
    path: "/ueberuns",
    className: "text-web-yellow",
  },
  {
    id: "3",
    title: "Programm",
    path: "/programm",
    className: "text-web-red",
  },
  {
    id: "4",
    title: "Unsere Tiere",
    path: "/tiere",
    className: "text-web-green",
  },
  {
    id: "5",
    title: "Kontakt",
    path: "/kontakt",
    className: "text-web-orange",
  },
];

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className="">
      <div
        className={
          isOpen
            ? " fixed z-50 overflow-x-hidden overflow-y-hidden overflow-hidden bg-red"
            : ""
        }
      >
        <div className="flex justify-between  lg:hidden">
          <div className="flex pl-5">
            <img src={Logo} alt="Logo" className="pt-3" />
            <h1 className="pt-5 pl-3 text-base font-medium font-Atma text-web-blue">
              Erlebniswelt <br /> Bauernhof
            </h1>
          </div>

          <div className={isOpen ? "fixed top-0 right-0  " : ""}>
            <div className="grid pt-5 lg:hidden" onClick={toggle}>
              <div className="grid justify-center w-20">
                <div className={`burger-item ${isOpen ? "active" : ""}`}>
                  <div className="burger-line" />
                  <div className="burger-line" />
                  <div className="burger-line" />
                </div>
              </div>
            </div>

            <p className="text-center text-web-blue">
              {isOpen ? "schließen" : "Menu"}
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          isOpen
            ? "bg-white  h-full overflow-y-scroll overflow-x-hidden fixed z-30 w-full pt-44"
            : "hidden"
        }
        onClick={toggle}
      >
        <ul className="text-4xl text-center font-Atma">
          {menuItems.map((id, index) => {
            return (
              <li key={index} className="pb-8">
                <Link className={id.className} to={id.path}>
                  {id.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center pt-12 pb-12">
          <a
            className="pr-8"
            href={
              "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-icon social-media-icon-facebook"></div>
          </a>

          <a
            href={
              "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-icon social-media-icon-instagram"></div>
          </a>
        </div>
        <p className="pt-52">asdasd</p>
        <p className="pt-52">asdasd</p> <p className="pt-52">asdasd</p>
        <p className="pt-52">asdasd</p>
        <p className="pt-52">asdasd</p>
      </div>
    </div>
  );
};

export default Dropdown;

/*

            <li>
              <p className="pt-16">aasdasdasd</p>
            </li>
 */

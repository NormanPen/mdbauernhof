import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";



const menuItems = [
    {
      id: "1",
      title: "Home",
      path: "/",
      className: "",
    },
    {
      id: "2",
      title: "Über Uns",
      path: "/ueberuns",
      className: "",
    },
    {
      id: "3",
      title: "Programm",
      path: "/programm",
      className: "",
    },
    {
      id: "4",
      title: "Unsere Tiere",
      path: "/tiere",
      className: "",
    },
    {
      id: "5",
      title: "Kontakt",
      path: "/kontakt",
      className: "",
    },
  ];
  
const Navigation = () => {
  return (
    <>
      <div className="absolute bg-yellow-200 w-full z-50 hidden ">
        <p>Navigation</p>
      </div>
    </>
  );
};

export default Navigation;

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
      <div className="absolute bg-yellow-200 w-full z-50  ">
      <nav className=" justify-between hidden w-screen pt-5 lg:flex ">
      <div className="flex pl-5">
        <img src={Logo} alt="Logo" />
        <h1 className="pl-3 text-base font-medium text-web-blue">
          Erlebniswelt <br /> Bauernhof
        </h1>
      </div>
      <ul  className="hidden text-2xl pr-28 lg:flex font-Atma text-web-blue">
          {menuItems.map((id, index) => {
            return (
              <li 
                key={index}
                className="ml-12 border-b-4 border-transparent hover:border-blue-900"
              >
                <Link className={id.className} to={id.path}>
                  {id.title}
                </Link>
              </li>
            );
          })}
        </ul>
      
    </nav>
      </div>
    </>
  );
};

export default Navigation;

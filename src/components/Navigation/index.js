import { Link } from "react-router-dom";
import Logo from "../Logo";

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
      <div className="absolute z-50 max-w-screen-2xl w-full  ">
        <div className=" pt-5  justify-between hidden  lg:flex">
          <Logo />
          <nav>
            <ul className=" text-2xl pr-28 flex font-Atma text-web-blue ">
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
      </div>
    </>
  );
};

export default Navigation;

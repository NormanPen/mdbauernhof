import { Link } from "react-scroll";

const ButtonScrollTo = (props) => {
  return (
    <Link
      to={props.to}
      spy={true}
      smooth={true}
      className="px-6 py-3 text-white rounded-full bg-web-blue-light inline-block z-50 cursor-pointer"
    >
      {props.children}
    </Link>
  );
};

export default ButtonScrollTo;

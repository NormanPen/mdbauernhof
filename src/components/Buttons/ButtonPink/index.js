import { Link } from "react-router-dom";

export const ButtonPink = (props) => {
  return (
    <Link
      to={props.to}
      className="px-6 py-3 mt-6 text-white rounded-full bg-web-blue-dark inline-block"
    >
      {props.children}
    </Link>
  );
};

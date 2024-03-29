import { Link } from "react-router-dom";

//Mögliche Farben für die Links
const COLORS = ["bg-web-blue-dark", "bg-web-green", "bg-web-red"];

const LinkTo = ({ to, children, linkColor, on }) => {
  //überprüfen ob es eine Farbe für den LinkTo gibt, falls nicht Standard setzen
  const checkLinkColor = COLORS.includes(linkColor) ? linkColor : COLORS[0];

  //überprüft ob der Button nicht dargestellt werden soll
  if (on === false) {
    return null;
  }
  return (
    <Link
      to={to}
      className={`px-6 py-3 mt-6 text-white rounded-full inline-block ${checkLinkColor}`}
    >
      {children}
    </Link>
  );
};

export default LinkTo;

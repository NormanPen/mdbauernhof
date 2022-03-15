import { Link } from "react-router-dom";

import logo from "../../images/md_bauernhof_logo_2021.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" className="pt-5 lg:pt-0 pl-5" />
    </Link>
  );
};

export default Logo;

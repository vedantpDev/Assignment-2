import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mr-auto" style={{ margin: "auto" }}>
            <li className="nav-item ">
              <Link className="nav-link" to={"/"}>
                LogIn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

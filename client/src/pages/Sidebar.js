import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Actions/dataAction";
import "../css/Sidebar.css";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    localStorage.removeItem("auth-token");
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <ul
        className="navbar-nav me-auto mb-2 mb-lg-0"
        style={{ textAlign: "center" }}
      >
        <li className="nav-item">
          <div style={{ padding: "20px" }}>
            <Link
              className={pathname === "/dashboard" ? "activeBtn" : "nav-link"}
              style={{ color: "rgb(0 0 0)" }}
              aria-current="page"
              to="/dashboard"
            >
              Home
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div style={{ padding: "20px" }}>
            <Link
              className={
                pathname === "/dashboard/productlist" ? "activeBtn" : "nav-link"
              }
              to="/dashboard/productlist"
              style={{ color: "rgb(0 0 0)" }}
            >
              Product List
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div style={{ padding: "20px" }}>
            <Link
              className={
                pathname === "/dashboard/about" ? "activeBtn" : "nav-link"
              }
              style={{ color: "rgb(0 0 0)" }}
              to="/dashboard/about"
            >
              About Us
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div style={{ padding: "20px" }}>
            <Link
              className={
                pathname === "/dashboard/contact" ? "activeBtn" : "nav-link"
              }
              style={{ color: "rgb(0 0 0)" }}
              to="/dashboard/contact"
            >
              Contact Us
            </Link>
          </div>
        </li>
      </ul>
      <div style={{ textAlign: "center", marginTop: "65px" }}>
        <Button className="logout-btn" variant="danger" onClick={logoutUser}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

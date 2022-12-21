import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Modal from "react-bootstrap/Modal";
import Divider from "@mui/material/Divider";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { logout } from "../Actions/dataAction";
import { useDispatch } from "react-redux";

const Headerlist = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const profilehandler = () => {
    handleShow();
  };

  const logoutUser = () => {
    localStorage.removeItem("auth-token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <Modal show={props.show} onHide={props.handleClose}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem
                disablePadding
                style={{ backgroundColor: "rgb(91 197 221 / 77%)" }}
              >
                <ListItemButton>
                  <ListItemText primary="Profile" onClick={profilehandler} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem
                disablePadding
                style={{ backgroundColor: "rgb(255 54 54)" }}
              >
                <ListItemButton>
                  <ListItemText primary="Logout" onClick={logoutUser} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Modal>
        <Profile
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      </div>
    </>
  );
};

export default Headerlist;

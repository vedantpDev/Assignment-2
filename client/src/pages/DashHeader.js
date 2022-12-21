import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../css/DashHeader.css";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Headerlist from "./Headerlist";

const DashHeader = () => {
  const { userEmail, userName } = useSelector((store) => store.userData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listhandler = (e) => {
    handleShow();
  };

  return (
    <>
      <div className="dash-header d-flex" style={{ justifyContent: "end" }}>
        <div
          style={{ height: "28px", marginTop: "16px", marginRight: " 25px" }}
        >
          {userName}
        </div>

        <div
          onClick={listhandler}
          style={{ marginTop: "10px", marginRight: "27px" }}
        >
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              float: "right",
              marginRight: "10%",
            }}
          >
            {userEmail?.charAt(0)?.toUpperCase() || ""}
          </Avatar>
        </div>
      </div>
      <Headerlist show={show} handleClose={handleClose} />
    </>
  );
};

export default DashHeader;

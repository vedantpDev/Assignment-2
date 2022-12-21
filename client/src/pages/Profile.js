import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const { userName, userGender, userEmail } = useSelector(
    (store) => store.userData
  );
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Title style={{ margin: "15px", textAlign: "center" }}>
          User Detail
        </Modal.Title>
        <Modal.Body>
          <div style={{ padding: "12px", textAlign: "center" }}>{userName}</div>

          <Divider />
          <div style={{ padding: "12px", textAlign: "center" }}>
            {userEmail}
          </div>

          <Divider />
          <div style={{ padding: "12px", textAlign: "center" }}>
            {userGender}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch } from "react-redux";
import { addproduct } from "../Actions/dataAction";

const Addproduct = (props) => {
  const dispatch = useDispatch();
  const [insertData, setinsertData] = useState({
    name: "",
    price: "",
    quantity: "",
    instock: "",
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinsertData({ ...insertData, [name]: value });
  };
  const saveData = () => {
    dispatch(addproduct(insertData));
    props.addModalClose();
  };

  return (
    <div>
      <Modal
        show={props.addModalShow}
        onHide={props.addModalClose}
        animation={true}
      >
        <Modal.Title style={{ margin: "17px" }}>Add Product</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name="name"
                onChange={changeHandler}
                type="text"
                placeholder="Product Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                onChange={changeHandler}
                type="number"
                placeholder="Price"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                name="quantity"
                onChange={changeHandler}
                type="number"
                placeholder="Quantity"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>In Stock</Form.Label>
              <Form.Control
                name="instock"
                onChange={changeHandler}
                type="number"
                placeholder=""
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.addModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Addproduct;

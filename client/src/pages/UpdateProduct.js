import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateProductLst } from "../Actions/dataAction";

const UpdateProduct = (props) => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    props.setUpdateData({ ...props.updateData, [name]: value });
  };

  const saveUpdate = () => {
    dispatch(updateProductLst(props.updateData.id, props.updateData));
    props.handleClose();
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} animation={true}>
        <Modal.Title style={{ margin: "17px" }}>Update Product</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name="name"
                onChange={changeHandler}
                value={props.updateData.name}
                type="text"
                placeholder="Product Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                onChange={changeHandler}
                value={props.updateData.price}
                type="number"
                placeholder="Price"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                name="quantity"
                onChange={changeHandler}
                value={props.updateData.quantity}
                type="number"
                placeholder="Quantity"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProduct;

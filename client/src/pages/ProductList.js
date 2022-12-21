import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../css/ProductList.css";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getProductList, search } from "../Actions/dataAction";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import Addproduct from "./Addproduct";
import UpdateProduct from "./UpdateProduct";
import { removeProduct } from "../Actions/dataAction";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProductList = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  const { productlist, totalRecords, loading } = useSelector(
    (store) => store.productData
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("ASC");

  const [searchVal, setSearchVal] = useState({});

  const [updateData, setUpdateData] = useState({
    id: "",
    name: "",
    price: "",
    instock: "",
  });

  useEffect(() => {
    dispatch(getProductList(1));
  }, []);

  useEffect(() => {
    setProduct(productlist);
  }, [productlist]);

  // This is for Update Product
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateItem = (id) => {
    handleShow();
    let filData = product.filter((obj) => obj.id === id);
    setUpdateData(filData[0]);
  };

  // This is for Add Product
  const [addModalShow, setAddModalShow] = useState(false);
  const addModalClose = () => setAddModalShow(false);
  const addModalOpen = () => setAddModalShow(true);

  const addItem = () => {
    addModalOpen();
  };

  // For Pagination
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalRecords / 3); i++) {
    pages.push(i);
  }
  const changePage = (page) => {
    dispatch(getProductList(page));
  };

  //For Sorting
  const sorting = (col) => {
    if (order === "ASC") {
      let sorted = [...product].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setProduct(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      let sorted = [...product].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setProduct(sorted);
      setOrder("ASC");
    }
  };

  // For Search
  const searchHandle = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setSearchVal({ ...searchVal, [name]: value });
  };

  const searchButtonHandler = (e) => {
    dispatch(search(searchVal));
  };

  const deleteProductData = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <div className="search-div">
        <input
          type="text"
          name="search"
          placeholder="Search here"
          onChange={searchHandle}
        />
        <Button className="m-1" size="sm" onClick={searchButtonHandler}>
          <SearchIcon />
        </Button>
        <Button className="add-btn" variant="primary" onClick={addItem}>
          <AddShoppingCartIcon />
        </Button>
      </div>

      <div className="table-div">
        <table className="table table-hover " style={{ marginTop: "21px" }}>
          <thead className="">
            <tr>
              <th scope="col" onClick={() => sorting("id")}>
                ID
              </th>
              <th scope="col" onClick={() => sorting("name")}>
                Product Name
              </th>
              <th scope="col" onClick={() => sorting("price")}>
                Price
              </th>
              <th scope="col" onClick={() => sorting("quantity")}>
                Quantity
              </th>
              <th scope="col" onClick={() => sorting("instock")}>
                Instock
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress
                  colSpan={6}
                  style={{ textAlign: "center" }}
                  color="success"
                />
              </Box>
            ) : product.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{ textAlign: "center", fontSize: "22px" }}
                >
                  No Records Found.
                </td>
              </tr>
            ) : (
              <>
                {Array.from(product).map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.price}</td>
                      <td>{data.quantity}</td>
                      <td>{data.instock}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => updateItem(data.id)}
                        >
                          <EditIcon />
                        </Button>
                      </td>
                      <td>
                        <DeleteIcon
                          style={{ color: "rgb(255 57 57)", cursor: "pointer" }}
                          onClick={() => deleteProductData(data.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
        <div className="page" style={{ textAlign: "center" }}>
          {pages.map((page, i) => {
            return (
              <span key={i}>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    changePage(page);
                    setCurrentPage(page);
                  }}
                  style={{ marginLeft: "10px" }}
                  className={currentPage === page ? "active me-3" : ""}
                >
                  {page}
                </Button>
              </span>
            );
          })}
        </div>
      </div>
      <UpdateProduct
        show={show}
        updateData={updateData}
        handleClose={handleClose}
        setUpdateData={setUpdateData}
      />
      <Addproduct addModalClose={addModalClose} addModalShow={addModalShow} />
    </div>
  );
};

export default ProductList;

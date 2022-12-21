import axios from "axios";
import store from "../Store";

export const getToken = (data) => (dispatch) => {
  dispatch({
    type: "TOKEN",
  });
  axios
    .post("/token", data)
    .then((res) => {
      localStorage.setItem("auth-token", res.data.token);
      dispatch({
        type: "TOKEN_SUCCESS",
        payload: {
          token: res.data.token,
          gender: res.data.uGender,
          name: res.data.uName,
          email: res.data.email,
          password: res.data.password,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "TOKEN_FAIL", payload: err });
    });
};

export const registerData = (data) => (dispatch) => {
  axios
    .post("/registerData", data)
    .then((res) => {
      dispatch({
        type: "REGISTER_DATA",
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

export const getProductList = (page) => (dispatch) => {
  dispatch({
    type: "PRODUCT_LIST",
  });
  axios
    .get(`/getproductlist/${page}`)
    .then((res) => {
      dispatch({
        type: "PRODUCT_LIST_SUCCESS",
        payload: res.data.data,
        totalRecords: res.data.totalPost,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload: err,
      });
    });
};

export const addproduct = (data) => (dispatch) => {
  axios
    .post("/add", data)
    .then((res) => {
      dispatch({
        type: "ADD_DATA",
        payload: { ...data, id: res.data.data.insertId },
      });
    })
    .catch((err) => console.log(err));
};

export const search = (searchData) => (dispatch) => {
  dispatch({
    type: "SEARCH_DATA",
  });
  axios
    .post("/search", searchData)
    .then((res) => {
      dispatch({
        type: "SEARCH_DATA_SUCCESS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "SEARCH_DATA_FAIL",
        paylaod: err,
      });
    });
};

export const removeProduct = (id) => (dispatch) => {
  axios
    .delete(`/delete/${id}`)
    .then((res) => {
      let storeData = store.getState().productData.productlist;
      let filterProduct = storeData.filter((data) => data.id !== id);
      dispatch({
        type: "DELETE_DATA",
        payload: filterProduct,
      });
    })
    .catch((err) => console.log(err));
};

export const updateProductLst = (id, data) => (dispatch) => {
  axios
    .put(`/updateList/${id}`, data)
    .then((res) => {
      let storedData = store.getState().productData.productlist;
      let index = storedData.findIndex((obj) => obj.id === id);
      storedData[index] = { ...data };
      storedData = [...storedData];
      dispatch({
        type: "UPDATE_LIST",
        payload: storedData,
      });
    })
    .catch((err) => console.log(err));
};

export const logout = () => (dispatch) => {
  dispatch({
    type: "LOG_OUT",
  });
};

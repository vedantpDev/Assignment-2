const initialState = {
  productlist: [],
  totalRecords: 0,
  loading: false,
  err: "",
};

const ProductListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_SUCCESS": {
      return {
        ...state,
        productlist: action.payload,
        totalRecords: action.totalRecords,
        loading: false,
      };
    }

    case "PRODUCT_LIST": {
      return {
        ...state,
        loading: true,
      };
    }

    case "PRODUCT_LIST_FAIL": {
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    }

    case "SEARCH_DATA": {
      return {
        ...state,
        loading: true,
      };
    }

    case "SEARCH_DATA_SUCCESS": {
      return {
        productlist: action.payload,
        loading: false,
      };
    }

    case "SEARCH_DATA_FAIL": {
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    }

    case "ADD_DATA": {
      return {
        ...state,
        productlist: [...state.productlist, action.payload],
      };
    }

    case "DELETE_DATA": {
      return { ...state, productlist: action.payload };
    }

    case "UPDATE_LIST": {
      return {
        ...state,
        productlist: action.payload,
      };
    }

    default:
      return state;
  }
};

export default ProductListReducer;

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ProductListReducer from "./ProductListReducer";

const rootReducer = combineReducers({
  userData: userReducer,
  productData: ProductListReducer,
});

export default rootReducer;

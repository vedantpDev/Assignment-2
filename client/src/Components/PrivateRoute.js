import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userEmail } = useSelector((store) => store.userData);
  return userEmail ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;

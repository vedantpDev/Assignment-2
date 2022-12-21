import React from "react";
import Dashhome from "./Dashhome";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div
          className="col-6 col-md-2"
          style={{
            paddingRight: " 0px",
            backgroundColor: "rgb(142 215 215)",
          }}
        >
          <Sidebar />
        </div>
        <div
          className="col-6 col-md-10"
          style={{
            paddingRight: " 0px",
            paddingLeft: "0px",
            height: "729px",
          }}
        >
          <Dashhome />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

const DashboardHome = () => {
  return (
    <div style={{ backgroundColor: "#001e3c" }} className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="">
            <h3 className="text-center text-info fw-bold">
              Welcome Home of Dashboard
            </h3>
          </div>
        </div>
        <div className="col-12 ">
          <img
            src="https://media.istockphoto.com/photos/businessman-touching-global-networking-data-online-shopping-with-icon-picture-id1278040502"
            className="img-fluid w-75 center"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

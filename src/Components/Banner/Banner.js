import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="img-fluid d-flex  align-items-center justify-content-center"
      style={{
        height: "80vh",
        backgroundAttachment: " fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.mos.cms.futurecdn.net/C2NQRWCtwwsLJPi9Y25d9V.jpg")`,
      }}
    >
      <div>
        <h1
          className="text-light text-center text-capitalize my-4 px-2"
          style={{ fontSize: "3rem" }}
        >
          Welcome to the <span className="text-warning">Forza Car Horizon.</span>
        </h1>
        <h3
          className="  px-2  text-light  text-center"
          style={{ color: "gray" }}
        > Monster <span className="text-danger">Sports Car</span> Collections
        </h3>
        <div className="justify-content-center align-items-center">
          <NavLink to="explore" className="btn btn-danger justify-content-center text-align-center align-items-center my-10 w-75">Order Now!!!</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
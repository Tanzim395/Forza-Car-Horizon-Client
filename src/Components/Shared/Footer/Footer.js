import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" footer">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-danger">Forza Car Horizon</h1>
              <h4>A Charm of Car Horizon</h4>
              <p><small>Concern of Frega Car Inc</small></p>
            </div>
            <div className="col-md-4 my-2">
              <h4>Contact via</h4>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="col-md-4 my-2">
              <h4>We Recieve</h4>
              <img className="w-75" src="https://zitengine.com/zitcms/uploads/2021/01/ssl-commerz-payment-gateway-bangladesh-cover-photo.png" alt="" />
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Forza Car Horizon | © All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

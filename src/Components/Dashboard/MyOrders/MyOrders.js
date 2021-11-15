import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  document.title = "Dashboard | My Orders";
  const email = user.email;
  useEffect(() => {
    axios
      .get(`https://lit-savannah-99618.herokuapp.com/myOrders/${email}`)
      .then((res) => setMyOrders(res.data));
  }, []);

  console.log(myOrders);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios.delete(`https://lit-savannah-99618.herokuapp.com/deleteCar/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          const remaining = myOrders.filter((car) => car._id !== id);
          setMyOrders(remaining);
        }
      });
    }
  };
  if (!myOrders || myOrders.length === 0) {
    return (
      <div className="container  text-center" style={{ marginBottom: "530px" }}>
        <div>
          <img
            className="img-fluid"
            src="https://cdn.dribbble.com/users/1731956/screenshots/4114317/media/935d25727c6032e4b85d3e633d5912a1.png?compress=1&resize=400x300"
            alt=""
          />
        </div>
        <h2 className="text-danger">No cars available !</h2>
      </div>
    );
  } else {
    return (
      <div className="container" style={{ marginBottom: "450px" }}>
        <div className="row mt-5">
          {myOrders.map((car) => {
            return (
              <div className="col-sm-6 my-4 " key={car._id}>
                <div className=" d-sm-flex   align-items-center shadow-lg h-100 rounded .justify-content-center">
                  <div className="w-50  d-flex justify-content-center align-items-center">
                    <img
                      src={car.img}
                      className="img-fluid w-75 pt-4 pt-sm-0 "
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h6
                      className={
                        car.status === "Pending"
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {car.status}
                    </h6>
                    <h4 className="card-title">{car.name}</h4>
                    <small className="text-primary">{car.phone}</small>
                    <h5 className="py-3">Price : ${car.price} </h5>

                    <button
                      className="btn btn-danger px-4"
                      onClick={() => handleDelete(car._id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MyOrders;

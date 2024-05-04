import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const AppNavbar = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  // console.log(currentPath);

  const style = { backgroundColor: "black", color: "white" };
  const active = "bg-dark text-white";
  console.log(active);

  return (
    <div>
      <div>
        <div className="header container d-flex container  justify-content-between  ">
          <div className="logo ">
            <img src={logo} alt="" height="40px" />
          </div>
          <div className="navbar   w-75">
            <Link
              to="/"
              className={` text-decoration-none text-dark px-4 py-2 ${
                !currentPath ? active : " "
              }`}
              // style={}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`active text-decoration-none text-dark px-4 py-2 ${
                currentPath === "about" ? active : ""
              }`}
            >
              ABOUT
            </Link>
            <Link
              to="/collection"
              className={`active text-decoration-none text-dark px-4 py-2 ${
                currentPath === "collection" ? active : ""
              }`}
            >
              OUR COLLECTION
            </Link>
            <Link
              to="/contact"
              className={`active text-decoration-none text-dark px-4 py-2 ${
                currentPath === "contact" ? active : ""
              }`}
            >
              CONTACT US
            </Link>
            <Link
              to="/newarrivals"
              className={`active text-decoration-none text-dark px-4 py-2 ${
                currentPath === "newarrivals" ? active : ""
              }`}
            >
              NEW ARRIVALS
            </Link>
            <Link
              to="/login"
              className="active text-decoration-none text-white border border-dark px-4 py-1 bg-dark rounded"
            >
              LOGIN
            </Link>
          </div>
          <div className="buttons"></div>
          <div className="hamburger-icon d-md-none d-sm-flex">
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <div className=" row container header2 position1  d-flex justify-content-between m-auto  py-2 ">
          <div className="col-lg-6 icons   d-flex justify-content-between  align-items-center">
            <p>
              <i className="a fa-map-marker text-dark"></i> Shutter-a/24, Buddha
              Bishal Bazar, Pokhara, Nepal{" "}
            </p>
          </div>
          <div className="col-lg-2 icons   d-flex justify-content-between  align-items-center">
            <a href="" className="text-decoration-none   ">
              <i
                className="fa fa-instagram  d-flex justify-content-center align-items-center bg-danger text-white rounded"
                style={{ height: "30px", width: "30px" }}
              ></i>
            </a>
            <a href="" className="text-decoration-none ">
              <i
                className="fa fa-facebook d-flex justify-content-center align-items-center bg-primary text-white rounded"
                style={{ height: "30px", width: "30px" }}
              ></i>
            </a>
            <a href="" className="text-decoration-none ">
              <i
                className="fa fa-twitter d-flex justify-content-center align-items-center bg-info text-white rounded"
                style={{ height: "30px", width: "30px" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

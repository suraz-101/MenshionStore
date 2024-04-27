import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const AdminNavbar = () => {
  const { pathname } = useLocation();
  const current = pathname.split("/")[2];

  return (
    <>
      <div
        className="scrollbar col-lg-3 col-sm-4 col-5 bg-dark"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white scrollbar">
          <div className="logo mb-3 d-flex justify-content-center">
            <img src={logo} alt="" height="40px" width="150px" />
          </div>
          <hr />
          <div>
            {" "}
            <ul className="nav nav-pills flex-column mb-auto p-3  ">
              <li className="nav-item">
                <Link
                  to="/admin"
                  className={`nav-link text-white ${!current ? "active" : ""}`}
                >
                  <i className="fa fa-home"></i> Home
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/admin/users"
                  className={`nav-link text-white  ${
                    current === "users" ? "active" : ""
                  }`}
                >
                  <i className="fa fa-users"></i> Users
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/admin/products"
                  className={`nav-link text-white ${
                    current === "products" ? "active" : ""
                  }`}
                >
                  <i className="fa fa-file"></i> products
                </Link>
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

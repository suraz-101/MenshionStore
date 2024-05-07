import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { removeToken, removeUser } from "../utils/session";
import { useEffect } from "react";
import { getUser } from "../utils/loginVerification";
import { useState } from "react";

export const AdminNav = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    removeUser();
    navigate("/");
  };

  useEffect(() => {
    const user = JSON.parse(getUser());
    setName(user.name);
  }, []);

  return (
    <div className="col-lg-12 p-2 bg-light ">
      <div className="logo  d-flex justify-content-between align-items-center container ">
        <img src={logo} alt="" height="40px" width="150px" />
        <div className="logOutButton d-flex  justify-content-center align-items-center ">
          <i className="fa fa-user mx-2 "></i>
          <span>
            <span className="fw-bolder fs-5">Welcome!</span>, {name}
          </span>
          <button
            className="btn btn-outline-none border border-dark px-3 mx-2 "
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

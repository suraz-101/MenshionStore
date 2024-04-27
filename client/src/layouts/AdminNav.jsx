import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/session";

export const AdminNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="col-lg-12 p-2 bg-light ">
      <div className="logo  d-flex justify-content-between align-items-center container ">
        <img src={logo} alt="" height="40px" width="150px" />
        <div className="logOutButton">
          <button
            className="btn btn-outline-none border border-dark px-3"
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

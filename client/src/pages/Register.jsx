import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/logo.png";
import { Notify } from "../components/Notify";
import { URLS } from "../contants";
import instance from "../utils/api";

export const Register = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
  });

  const [error, setrError] = useState("");
  //   const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await instance.post(URLS.REGISTER, payload);
      navigate("/login");
      console.log(response);
    } catch (err) {
      setrError(err);
    }
  };
  return (
    <div>
      <div>
        <div
          className="container-fluid main d-flex justify-content-center align-items-center border bg-light"
          style={{ height: "120vh" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 m-auto">
                <div className="p-4 rounded login-form border bg-white position-relative">
                  <div
                    className="cross position-absolute top-0 end-0 text-center"
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: " white",
                    }}
                  >
                    <Link to="/" className="text-decoration-none text-dark">
                      <i className="fa fa-close"></i>
                    </Link>
                  </div>
                  <div className="title col-12 p-2 text-center">
                    <Link to="/">
                      <img src={logoIcon} alt="" height="40px" width="100px" />
                    </Link>
                    <h3>Regsiter Now</h3>
                  </div>
                  <form
                    action=""
                    className="col-12"
                    id="registerUser"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="row container">
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName"
                          placeholder="Cristiano Ronaldo  "
                          name="name"
                          onChange={(e) => {
                            setPayload((prevVal) => {
                              return { ...prevVal, name: e.target.value };
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail"
                          placeholder=" crish7@gmail.com"
                          name="email"
                          onChange={(e) => {
                            setPayload((prevVal) => {
                              return { ...prevVal, email: e.target.value };
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="mb-3" id="password">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => {
                            setPayload((prevVal) => {
                              return { ...prevVal, password: e.target.value };
                            });
                          }}
                          // onKeyUp={"validation()"}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="exampleInputPhonenumber"
                          placeholder="984XXXXXX"
                          name="phoneNumber"
                          onChange={(e) => {
                            setPayload((prevVal) => {
                              return {
                                ...prevVal,
                                phoneNumber: e.target.value,
                              };
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Gender:</label>
                        <div className="d-flex justify-content-between ml-2">
                          <div>
                            <input
                              type="radio"
                              name="gender"
                              value="Male"
                              className="exampleInputGender"
                              onChange={(e) => {
                                setPayload((prevVal) => {
                                  return {
                                    ...prevVal,
                                    gender: e.target.value,
                                  };
                                });
                              }}
                            />
                            <label className="form-label">Male</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="gender"
                              value="Female"
                              className="exampleInputGender"
                              onChange={(e) => {
                                setPayload((prevVal) => {
                                  return {
                                    ...prevVal,
                                    gender: e.target.value,
                                  };
                                });
                              }}
                            />
                            <label className="form-label">Female</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="gender"
                              value="Others"
                              className="exampleInputGender"
                              onChange={(e) => {
                                setPayload((prevVal) => {
                                  return {
                                    ...prevVal,
                                    gender: e.target.value,
                                  };
                                });
                              }}
                            />
                            <label className="form-label">Others</label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        {error && <Notify variant="danger" msg={error} />}
                      </div>

                      <button
                        type="submit"
                        id="regsiterButton"
                        className="btn col-sm-5 m-auto mb-2 border border-dark "
                      >
                        Register
                      </button>
                      <label className="p-2 d-flex justify-content-center align-items-center">
                        Already have an account?
                        <Link className="px-2 text-decoration-none" to="/login">
                          Sign in
                        </Link>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

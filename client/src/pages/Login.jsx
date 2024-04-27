import { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/images/logo.png";
import { URLS } from "../contants";
import instance from "../utils/api";
import { setToken } from "../utils/session";
import { Notify } from "../components/Notify";

export const Login = () => {
  const [credential, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(credential);

      const response = await instance.post(URLS.LOGIN, credential);
      console.log(response);
      setToken(response.data.message);
    } catch (err) {
      console.log("err", err);
      setError(err.response.data.message);
    } finally {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return (
    <>
      <div
        className="container-fluid main d-flex justify-content-center align-items-center bg-light"
        style={{ height: "100vh" }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 m-auto ">
              <div className="p-4 rounded login-form border position-relative bg-white">
                <div
                  className="cross position-absolute top-0 end-0 text-center "
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: "white",
                  }}
                >
                  <Link to="/" className="text-decoration-none text-dark">
                    <i className="fa fa-close"></i>
                  </Link>
                </div>
                <div className="title col-12 p-2 text-center">
                  <Link to="/">
                    <img src={logoIcon} alt="" height="60px" width="200px" />
                  </Link>
                  <h2>Login Form</h2>
                </div>
                <div>{error && <Notify variant="danger" msg={error} />}</div>
                <form
                  action=""
                  className="col-12 "
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="row container">
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email - example@gmail.com"
                        name="email"
                        onChange={(e) =>
                          setCredentials((prevVlaue) => {
                            return { ...prevVlaue, email: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        value={credential.password}
                        onChange={(e) =>
                          setCredentials((prevVlaue) => {
                            return { ...prevVlaue, password: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="text-center">
                      {/* {error && <Notify variant="danger" msg={error} />} */}
                    </div>
                    <p className="m-auto">
                      <Link
                        className="text-decoration-none"
                        to="/forgetPassword"
                      >
                        Forgot Password?
                      </Link>
                    </p>
                    <button
                      type="submit"
                      className="btn border border-dark col-sm-5 m-auto mt-2 "
                    >
                      Login
                    </button>

                    <label className="p-2 d-flex justify-content-center align-items-center">
                      Dont have an account?
                      <Link
                        to="/register"
                        className="px-2 text-decoration-none"
                      >
                        SignUp
                      </Link>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
  </Routes> */}
    </>
  );
};

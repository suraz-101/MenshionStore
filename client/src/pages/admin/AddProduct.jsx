import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { products } from "../../hooks/product";
import { Notify } from "../../components/Notify";

export const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct, error, success } = products();
  console.log(error);

  const [preview, setPreview] = useState("");

  const [payload, setPayload] = useState({
    name: "",
    price: "",
    image: null,
  });

  const handelFile = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0].name);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setPayload((prevValue) => {
        return { ...prevValue, image: e.target.files[0] };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(payload);
    setTimeout(() => {
      setPayload({ name: "", price: "", image: "" });
      setPreview("");
    }, 3000);
    if (error === " ") navigate("/admin/products");
  };

  return (
    <div className="col-lg-9 p-4">
      <div className="col-11 shadow m-auto ">
        <div className="d-flex justify-content-between align-items-center p-4 ">
          <h3>Add Product </h3>
          <button className="btn btn-outline-none  text-dark rounded-circle border border-danger">
            <Link
              to="/admin/products"
              className="text-decoration-none  text-danger"
            >
              <i className="fa fa-close "></i>
            </Link>
          </button>
        </div>
        <div className="border mt-2 p-4">
          <div className="container-fluid col-lg-10 main d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="p-2 rounded login-form border position position-relative">
                  <div
                    className="cross position-absolute top-0 end-0 text-center"
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "white",
                    }}
                  >
                    <Link
                      to="/admin/blogs"
                      className="text-decoration-none text-dark"
                    >
                      <i className="fa fa-close"></i>
                    </Link>
                  </div>
                  <div className="title col-12 p-2 text-center">
                    <Link to="/admin">
                      <img src={logo} alt="" height="60px" width="200px" />
                    </Link>

                    {(error || success) &&
                      (error ? (
                        <Notify variant="danger" msg={error}></Notify>
                      ) : (
                        <Notify variant="success" msg={success}></Notify>
                      ))}
                  </div>
                  <form
                    action=""
                    className="col-12"
                    id="addProduct"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="row container">
                      <div className="d-flex justify-content-center">
                        {preview ? (
                          <img
                            src={preview}
                            alt=""
                            height="200px"
                            width="200px"
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="mb-3 d-flex flex-column">
                        <label className="form-label">Featured Image</label>
                        <input
                          className="border p-2"
                          type="file"
                          name="image"
                          id="image"
                          onChange={(e) => {
                            handelFile(e);
                          }}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter The Product Name.. "
                          name="name"
                          value={payload?.name}
                          onChange={(e) => {
                            setPayload((prevValue) => {
                              return { ...prevValue, name: e.target.value };
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                          className="form-control"
                          name="price"
                          id="price"
                          placeholder="Enter the Price"
                          value={payload?.price}
                          onChange={(e) => {
                            setPayload((prevValue) => {
                              return { ...prevValue, price: e.target.value };
                            });
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        id="regsiterButton"
                        className="btn btn-outline-none border border-dark bg-dark text-white col-sm-5 m-auto mb-2"
                      >
                        Add Product
                      </button>
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

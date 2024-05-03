import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../contants";
import { productContext } from "../../context/ProductContext";
import { products } from "../../hooks/product";

export const Products = () => {
  const { data, error } = useContext(productContext);
  const { deleteProduct, addProduct } = products();

  const handleDelete = (name) => {
    console.log(name);

    deleteProduct(name);

    // deleteProduct();
  };

  return (
    <div className="col-lg-9 p-4">
      <div className="col-11 shadow m-auto ">
        <div className="d-flex justify-content-between align-items-center p-4 ">
          <h3>Products Lists </h3>
          <Link to="/admin/addProduct">
            <button className="btn btn-outline-none bg-primary text-white">
              Add Product<i className="fa fa-plus mx-2"></i>
            </button>
          </Link>
        </div>
        <div className="border mt-2 p-4">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Imagee</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data?.map((d, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img
                            src={BASE_URL.concat(d?.image)}
                            alt=""
                            style={{ height: "100px", width: "100px" }}
                          />
                        </td>
                        <td>{d.name}</td>
                        <td>{d.price}</td>
                        <td>
                          <button className="btn button">
                            <Link
                              to="/"
                              className="text-decoration-none text-dark bg-success py-2 px-3 rounded"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </button>
                          <button
                            className="btn "
                            style={{ backgroundColor: "red" }}
                            onClick={(e) => {
                              handleDelete(d.name);
                            }}
                          >
                            <i className="fa fa-trash text-white"></i>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr className="p-4">
                  <th scope="row" colSpan={6} className="text-center p-4 ">
                    No Data Found
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

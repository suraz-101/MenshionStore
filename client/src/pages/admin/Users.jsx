import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../contants";
import { userContext } from "../../context/userContext";

export const Users = () => {
  const { users, err } = useContext(userContext);
  return (
    <div className="col-lg-9 p-4">
      <div className="col-11 shadow m-auto ">
        <div className="d-flex justify-content-between align-items-center p-4 ">
          <h3>Users Lists </h3>
          {/* <Link to="/admin/addProduct">
            <button className="btn btn-outline-none bg-primary text-white">
              Add Users<i className="fa fa-plus mx-2"></i>
            </button>
          </Link> */}
        </div>
        <div className="border mt-2 p-4">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Full Name</th>
                <th scope="col">email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 ? (
                users?.map((user, index) => {
                  return (
                    <>
                      <tr key={user.name}>
                        <th scope="row">{index + 1}</th>

                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.gender}</td>
                        <td>{user.roles}</td>
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

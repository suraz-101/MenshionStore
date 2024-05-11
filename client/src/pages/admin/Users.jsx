import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../contants";
import { userContext } from "../../context/userContext";
import { Paginate } from "../../components/Paginate";
import { useDebounce } from "../../hooks/useDebounce";

export const Users = () => {
  const { users, user, err, getAllUsers, page, setPage, limit, setLimit } =
    useContext(userContext);
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const debounceSearchTerm = useDebounce(value, 500);

  useEffect(() => {
    setEmail(debounceSearchTerm);
  }, [debounceSearchTerm]);

  useEffect(() => {
    getAllUsers({ page, limit, email });
  }, [getAllUsers, page, limit, email]);

  console.log(user);
  return (
    <div className="col-lg-9 p-4">
      <div className="col-11 shadow m-auto p-4">
        <div className="d-flex justify-content-between align-items-center p-4 ">
          <h3>Users Lists </h3>
          {/* <Link to="/admin/addProduct">
            <button className="btn btn-outline-none bg-primary text-white">
              Add Users<i className="fa fa-plus mx-2"></i>
            </button>
          </Link> */}
        </div>
        <div className="search py-2 cobntain">
          <div className="input-group">
            <span className="input-group-text btn button" id="basic-addon1">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Users"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="border mt-2 p-4">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">S.N.</th>
                {/* <th scope="col">Profile Pic</th> */}
                <th scope="col">Full Name</th>
                <th scope="col">email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.length > 0 ? (
                users?.data?.map((user, index) => {
                  return (
                    <>
                      <tr key={user.name}>
                        <th scope="row ">{index + 1}</th>

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
        <div className="pagination">
          {users?.data?.length > 0 ? (
            <Paginate
              limit={users?.limit}
              total={users?.total}
              page={page}
              setPage={setPage}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

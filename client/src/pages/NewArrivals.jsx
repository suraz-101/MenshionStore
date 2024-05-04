import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { BASE_URL } from "../contants";
import { productContext } from "../context/ProductContext";

export const NewArrivals = () => {
  const { data, setSort } = useContext(productContext);
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    setSort(-1);
    setNewArrivals(data.slice(0, 2));
  }, [setSort, data]);
  // setNewArrivals(data.slice(0, 1));
  // data.slice(0, 1);
  // setNewArrivals(data.slice(0, 2));
  return (
    <>
      <div className="newarrivals p-4" id="collections">
        <h1 className="heading">New Arrivals</h1>
        <div className="cards-wrapper container m-auto row">
          {newArrivals?.length > 0 ? (
            newArrivals.map((product) => {
              return (
                <>
                  <div
                    className="cards col-lg-3 col-md-4 col-sm-6 "
                    key={product?.name}
                  >
                    <div className="card shadow">
                      <div
                        className="image-section"
                        style={{ height: "350px" }}
                      >
                        <img
                          src={BASE_URL.concat(product?.image)}
                          alt=""
                          height="100%"
                          width="100%"
                        />
                      </div>
                      <div className="content p-2">
                        <div className="title text-center">
                          <a href="" className="text-decoration-none text-dark">
                            <h4> {product?.name}</h4>
                          </a>
                        </div>
                        {/* <div className="price">{product?.price}</div> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>No Data Found</>
          )}
        </div>
      </div>
    </>
  );
};

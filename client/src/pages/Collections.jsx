import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { BASE_URL, URLS } from "../contants";
import { productContext } from "../context/ProductContext";
import instance from "../utils/api";
export const Collections = () => {
  const { error, data, setSort } = useContext(productContext);
  setSort(1);

  return (
    <div>
      <div className="newarrivals p-4 bg-light" id="collections">
        <h1 className="heading">Our Collections</h1>
        <div className="border p-2 mb-3  d-flex justify-content-between">
          <button className="btn btn-outline-none border border-dark px-4">
            All
          </button>
          <button className="btn btn-outline-none border border-dark px-4">
            T-shirt
          </button>
          <button className="btn btn-outline-none border border-dark px-4">
            Hoodie
          </button>
          <button className="btn btn-outline-none border border-dark px-4">
            Shoes
          </button>
        </div>
        <div className="cards-wrapper container m-auto row">
          {data?.length > 0 ? (
            data.map((product) => {
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
    </div>
  );
};

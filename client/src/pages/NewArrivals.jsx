import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Paginate } from "../components/Paginate";
import { BASE_URL } from "../contants";
import { productContext } from "../context/ProductContext";

export const NewArrivals = () => {
  const { newArrivals, setSort, page, setPage } = useContext(productContext);
  useEffect(() => {
    setSort(-1);
  }, [setSort]);

  return (
    <>
      <div className="newarrivals p-4" id="collections">
        <h1 className="heading">New Arrivals</h1>
        <div className="cards-wrapper container m-auto row">
          {newArrivals?.data?.length > 0 ? (
            newArrivals?.data?.map((product) => {
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
        <div className="pagination">
          <Paginate
            limit={newArrivals?.limit}
            total={newArrivals?.total}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};

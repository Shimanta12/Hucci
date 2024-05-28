/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import SingleProductDashboard from "../components/Dashboard/SingleProductDashboard";

// eslint-disable-next-line react/prop-types
const Products = () => {
  const [products, setProducts] = useState([]);

  const [successfull, setSuccessfull] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  useEffect(() => {
    let timer;
    if (successfull) {
      timer = setTimeout(() => {
        setSuccessfull(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [successfull]);

  useEffect(() => {
    let timer;
    if (failed) {
      timer = setTimeout(() => {
        setFailed(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [failed]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setSuccessfull(true);
        } else {
          setFailed(true);
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        setFailed(true);
        return console.log(err);
      });
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-center my-4">All Products</h1>
        <div className="flex gap-3 flex-wrap justify-center md:justify-start items-center">
          {products.map((shoe) => (
            <SingleProductDashboard
              key={shoe.id}
              shoe={shoe}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      {successfull && (
        <div className="toast">
          <div className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Product Deleted successfully!</span>
          </div>
        </div>
      )}
      {failed && (
        <div className="toast">
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Something went wrong.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

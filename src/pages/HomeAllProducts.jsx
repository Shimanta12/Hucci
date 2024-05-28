/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import SingleProduct from "../components/Home/SingleProduct";

// eslint-disable-next-line react/prop-types
const HomeAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div className="container mx-auto my-6">
      <div>
        <h1 className="text-4xl font-bold text-center my-4">All Products</h1>
        <div className="flex gap-3 flex-wrap justify-center md:justify-start items-center">
          {products.map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAllProducts;

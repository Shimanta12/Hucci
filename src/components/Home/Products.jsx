/* eslint-disable react/prop-types */
import { Link, useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = () => {
  const shoes = useLoaderData();
  return (
    <div className="container mx-auto text-customSecondary">
      <div>
        <h1 className="text-5xl font-bold text-center my-10">Products</h1>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          {shoes.slice(0, 3).map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))}
        </div>
        <div className="flex justify-center items center mt-5">
          <Link to="/all-products">
            <button className="btn bg-customSecondary text-white text-center rounded none px-11 py-2 ">
              All products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;

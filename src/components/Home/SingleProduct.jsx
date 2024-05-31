import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { _id, title, price, description, image_url } = shoe;

  const truncateDescription = (desc, maxLength) => {
    return desc.length > maxLength ? desc.slice(0, maxLength) + "..." : desc;
  };

  return (
    <div
      className="card w-96 bg-base-100 shadow-xl"
      style={{ height: "450px" }}
    >
      <figure>
        <img
          className="w-full h-56 object-contain"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <h2 className="card-title  font-bold">{price}$</h2>
        <p>{truncateDescription(description, 150)}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-customSecondary rounded-none text-white">
            <Link to={`products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

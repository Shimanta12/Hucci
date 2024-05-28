/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProductDashboard = ({ shoe, handleDelete }) => {
  const { id, title, price, description, image_url } = shoe;

  const truncateDescription = (desc, maxLength) => {
    return desc.length > maxLength ? desc.slice(0, maxLength) + "..." : desc;
  };

  return (
    <div
      className="card w-96 bg-base-100 shadow-xl"
      style={{ height: "550px" }}
    >
      <figure>
        <img
          className="w-full h-56 object-contain"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">{price}</h2>
        <p>{truncateDescription(description, 150)}</p>
        <div className="card-actions justify-around">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/dashboard/all-products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-500 text-white">
            <Link to={`/dashboard/all-products/edit-products/${id}`}>Edit</Link>
          </button>

          <button
            className="btn bg-red-500 text-white"
            onClick={() => document.getElementById(id).showModal()}
          >
            Delete
          </button>
          <dialog id={id} className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Are you sure?</h3>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">No</button>
                  <button
                    onClick={() => {
                      handleDelete(id);
                    }}
                    className="btn"
                  >
                    Yes
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDashboard;

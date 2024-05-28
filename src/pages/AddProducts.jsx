import { useState, useEffect } from "react";

const AddProducts = () => {
  const [successfull, setSuccessfull] = useState(false);
  const [failed, setFailed] = useState(false);
  const [product, setProduct] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const img_url = form.img_url.value;

    const shoe = { id, title, brand, price, description, img_url };
    setProduct(shoe);
  };
  const confirmSubmit = async () => {
    await fetch("http://localhost:3000/shoes/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (res.status === 201) {
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
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center my-5">Add Product</h1>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="id"
            placeholder="Id"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="brand"
            placeholder="Brand"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="number"
            name="price"
            placeholder="Price"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="img_url"
            placeholder="Image URL"
          />
        </div>
        <div
          className="mt-2"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <input
            className="w-full bg-customPrimary text-white p-3 rounded-lg"
            type="submit"
            value="Add Product"
          />
        </div>
        <dialog id={"my_modal_1"} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure?</h3>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">No</button>
                <button
                  onClick={() => {
                    confirmSubmit();
                  }}
                  className="btn"
                >
                  Yes
                </button>
              </form>
            </div>
          </div>
        </dialog>
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
              <span>Product added successfully!</span>
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
      </form>
    </div>
  );
};

export default AddProducts;

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const shoe = useLoaderData();
  const prevId = shoe._id;

  const [title, setTitle] = useState(shoe.title);
  const [brand, setBrand] = useState(shoe.brand);
  const [price, setPrice] = useState(shoe.price);
  const [description, setDescription] = useState(shoe.description);
  const [img_url, setImg_url] = useState(shoe.image_url);

  const [successfull, setSuccessfull] = useState(false);
  const [failed, setFailed] = useState(false);

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
    document.getElementById(prevId).showModal();
  };

  const confirmSubmit = async () => {
    const product = {
      title,
      brand,
      price,
      description,
      image_url: img_url,
    };

    await fetch(`http://localhost:3000/shoes/${prevId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
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
        console.log(err);
      });
    document.getElementById(prevId).close();
  };

  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center my-5">Edit Product</h1>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="brand"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:bg-customSecondary focus:text-white rounded"
            type="text"
            name="img_url"
            placeholder="Image URL"
            value={img_url}
            onChange={(e) => setImg_url(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="w-full bg-customPrimary text-white p-3 rounded-lg"
            type="submit"
            value="Submit"
          />
        </div>

        <dialog id={prevId} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure?</h3>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">No</button>
                <button onClick={confirmSubmit} className="btn">
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
              <span>Product modified successfully!</span>
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

export default EditProducts;

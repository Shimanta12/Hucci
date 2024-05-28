import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  const { title, price, description, image_url } = shoe;
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row justify-center items-center md:gap-4">
      <div>
        <img className="h-96 object-contain " src={image_url} alt="" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold  text-center">{title}</h1>
        <p className="text-lg mt-2">{description}</p>
        <h1 className="text-2xl font-bold mt-2">Price: {price}$</h1>
        <button className="btn bg-red-500 text-white p-4 mt-2 text-center">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

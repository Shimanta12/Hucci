import SingleService from "./SingleService";

const Services = () => {
  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-center">Services</h1>
      <div className="flex sm:flex-col">
        <SingleService></SingleService>
        <SingleService></SingleService>
        <SingleService></SingleService>
      </div>
    </div>
  );
};

export default Services;

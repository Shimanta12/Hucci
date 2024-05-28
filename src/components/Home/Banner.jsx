import bannerImg from "./../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center md:flex-row bg-customPrimary">
      <div className="">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-customSecondary">
            Step into Style with Every Stride
          </h1>
          <p className="mb-5 text-lg font-semibold text-white">
            Discover our exclusive collection of premium footwear designed for
            comfort and crafted for style. Whether you&apos;re hitting the
            streets or the trails, we&apos;ve got the perfect pair to match your
            journey. Shop now and elevate your steps!
          </p>
          <button className="btn bg-customSecondary border-none rounded-none  hover:bg-customSecondary hover:scale-110 text-white w-1/2 mx-auto">
            Shoes
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <img className="image-full" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

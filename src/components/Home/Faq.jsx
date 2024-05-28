const Faq = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="my-5 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center py-5">
          Frequently asked questions?
        </h1>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-customSecondary text-white">
            What sizes do your shoes come in?
          </div>
          <div className="collapse-content bg-base-300 ">
            <p>
              We offer a wide range of sizes for both men and women. Please
              refer to our size guide on each product page for detailed
              measurements.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-customSecondary text-white">
            How can I determine my shoe size?
          </div>
          <div className="collapse-content">
            <p>
              We provide a size chart on our website to help you find the
              perfect fit. Additionally, we recommend measuring your foot and
              comparing it to our chart for the best results.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-customSecondary text-white">
            What materials are your shoes made from?
          </div>
          <div className="collapse-content">
            <p>
              Our shoes are made from high-quality materials, including genuine
              leather, suede, canvas, and synthetic options. Each product page
              specifies the materials used.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-customSecondary text-white">
            How do I care for my shoes?
          </div>
          <div className="collapse-content">
            <p>
              Caring for your shoes depends on the material. For leather shoes,
              use a leather conditioner and polish regularly. For suede, use a
              suede brush and protector. Detailed care instructions are
              available on our website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-customSecondary text-white">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>
              We have a hassle-free return policy. You can return unworn shoes
              within 30 days of purchase for a full refund or exchange. Please
              see our return policy for complete details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

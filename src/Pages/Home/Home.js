import React from "react";
import FeaturedActivities from "../../Component/Home/FeaturedActivities";
import PopularDestinations from "../../Component/Home/PopularDestinations";
import FeaturedAccomodations from "../../Component/Home/FeaturedAccomodations";
import Contact from "../../Component/ContactUs/Contact";

const Home = () => {
  return (
    <>
      <div className="my-[50px] items-center justify-center bg-gray-50 px-3">
        <FeaturedActivities />
      </div>
      <div className="my-[50px] items-center justify-center bg-gray-50 px-3">
        <PopularDestinations />
      </div>
      <div className="my-[50px] items-center justify-center bg-gray-50 px-3">
        <FeaturedAccomodations />
      </div>
      <div className="my-[50px] items-center justify-center bg-gray-50 px-3">
        <Contact />
      </div>
    </>
  );
};

export default Home;

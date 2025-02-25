import React from "react";
import HomeBanner from "../../Components/Banner/HomeBanner";
import BikeList from "../Module/BikeList";
import Testimonial from "../Module/Testimonial";

const MainElement = () => {
  return (
    <div>
      <div className="mt-5 lg:flex justify-center items-center">
        <div className="mx-auto lg:px-20 text-center lg:text-justify font-bold lg:text-2xl">
          🚴 Find Your Perfect Ride Today! 🏍️ <br />
          🔥 Best Deals on New & Used Bikes! <br />
          💨 Ride Fast, Buy Smart!
          <br />
          🏆 Top Brands, Unbeatable Prices!
        </div>
        <HomeBanner />
      </div>
      <div className="mt-5 mx-auto lg:w-[90%] lg:flex justify-center items-center">
        <div className="">
          <BikeList />
        </div>
        <div className="mx-auto lg:px-20 text-justify font-bold lg:text-2xl">
          🚴 Find Your Perfect Ride Today! 🏍️ <br />
          🔥 Best Deals on New & Used Bikes! <br />
          💨 Ride Fast, Buy Smart!
          <br />
          🏆 Top Brands, Unbeatable Prices!
        </div>
      </div>
      <section className="pt-10 ">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-600">
            Read reviews from our valued customers and share your experience
            with us!
          </p>
        </div>
      </section>
      <div>
        <Testimonial />
      </div>
    </div>
  );
};

export default MainElement;

import React from "react";
import HomeBanner from "../../Components/Banner/HomeBanner";
import BikeList from "../Module/BikeList";

const MainElement = () => {
  return (
    <div>
      <div className="mt-5 flex justify-center items-center">
        <div className="mx-auto px-20 text-justify font-bold text-2xl">
          🚴 Find Your Perfect Ride Today! 🏍️ <br />
          🔥 Best Deals on New & Used Bikes! <br />
          💨 Ride Fast, Buy Smart!
          <br />
          🏆 Top Brands, Unbeatable Prices!
        </div>
        <HomeBanner />
      </div>
      <div className="mt-5 mx-auto w-[90%] flex justify-center items-center">
        <div className="">
          <BikeList />
        </div>
        <div className="mx-auto px-20 text-justify font-bold text-2xl">
          🚴 Find Your Perfect Ride Today! 🏍️ <br />
          🔥 Best Deals on New & Used Bikes! <br />
          💨 Ride Fast, Buy Smart!
          <br />
          🏆 Top Brands, Unbeatable Prices!
        </div>
      </div>
    </div>
  );
};

export default MainElement;

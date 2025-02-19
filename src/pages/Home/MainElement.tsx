import React from "react";
import HomeBanner from "../../Components/Banner/HomeBanner";

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
    </div>
  );
};

export default MainElement;

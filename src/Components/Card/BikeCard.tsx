import React from "react";
import React, { useState } from "react";
const BikeCard = () => {
  const img = [
    "https://5.imimg.com/data5/SELLER/Default/2023/5/306789073/FR/IH/ZV/120605411/hero-optima-cx-single-battery-electric-bike-500x500.jpeg",
    "https://5.imimg.com/data5/SELLER/Default/2023/5/306786050/FX/DF/UA/120605411/grey-hero-optima-cx-dual-battery-electric-bike.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2021/7/HH/YF/CV/115101561/hero-electric-optima-lx.png",
    "https://5.imimg.com/data5/SELLER/Default/2021/7/HH/YF/CV/115101561/hero-electric-optima-lx.png",
  ];
  const [hovered, setHovered] = useState(null);
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 w-full ">
        {img.map((item, index: number) => (
          // card container
          <div
            key={index}
            className={`relative transition-all w-full h-[200px] cursor-pointer duration-300 ease-in-out transform ${
              hovered !== null && hovered !== index
                ? "blur-sm scale-95"
                : "scale-100"
            } hover:scale-105 hover:z-10 hover:blur-none`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/*  image  */}
            <img
              src={item}
              alt="animated_card"
              className="w-full border-[1px]  h-full rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeCard;

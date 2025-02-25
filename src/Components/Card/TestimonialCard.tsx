import React from "react";
import { FaQuoteRight } from "react-icons/fa";
const TestimonialCard = () => {
  return (
    <div className="w-full border-[1px] p-4  mb-3 border-amber-200 bg-white shadow-2xl rounded-lg relative flex flex-col md:flex-row items-start justify-between gap-6">
      <div className="relative w-full md:w-[50%]">
        <img
          src="https://img.freepik.com/free-photo/front-view-smiley-man-holding-laptop_23-2148946208.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=ais"
          alt="demo/image"
          className="w-full h-full object-cover"
        />
        <FaQuoteRight className="absolute -top-5 right-[-5%] text-[3rem] text-[#ffffff] bg-[#3B9DF8] p-3 rounded-full" />
        <h3 className="text-[1.5rem] font-[500] capitalize">
          help us improve our productivity
        </h3>
      </div>
      <div className="w-full md:w-[35%]">
        <p className="text-[#424242]  text-[0.8rem] mt-2 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae non,
          explicabo cum dolorem temporibus alias odio quod officiis nam. Lorem
          ipsum dolor sit amet.
        </p>

        <div className="mt-4">
          <h2 className="text-[1rem] font-[500]">Jhone Dehon</h2>
          <p className="text-[0.9rem] text-[#727272]">CEO of Miracle</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

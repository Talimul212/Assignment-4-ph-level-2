import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="boxShadow px-10 w-full h-[100vh] lg:flex-row gap-[30px] lg:gap-0 flex-col flex items-center justify-evenly py-20 rounded-xl">
        <div className="w-[80%] lg:w-[40%]">
          <img
            src="https://i.ibb.co/HdHH4Pb/Frame-6.png"
            alt="illustration"
            className=""
          />
        </div>

        <div className="w-full lg:w-[30%] text-center lg:text-start">
          <h1 className="text-[2.5rem] sm:text-[4rem] font-[800] text-[#566FA7] leading-[80px]">
            OOPS!
          </h1>

          <h3 className="text-[#8093B8] text-[0.9rem] mb-4 sm:text-[1.2rem]">
            Looks like big foot has broken the link
          </h3>

          <Link
            to="/"
            className="py-3 px-6 sm:px-8 text-[0.9rem] sm:text-[1rem] rounded-full bg-[#566FA7] text-white mt-8 hover:bg-gray-300"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

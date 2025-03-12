/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { commonColor } from "../../../utility/Color/color";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { MdOutlineSportsCricket, MdOutlineSportsTennis } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";
import { IoChevronDown } from "react-icons/io5";
import BikeListTable from "../../../Components/Table/BikeListTable";
const AddBike = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select Option");

  const options = [
    {
      icon: <TfiShoppingCartFull />,
      title: "Available",
    },
    {
      icon: <MdOutlineProductionQuantityLimits />,
      title: "Out of Stock",
    },
  ];

  // outside click to off the dropdown
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      let target = event.target;

      if (!target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className=" w-full ">
      <div className=" bg-gray-50 items-center p-1 flex justify-between rounded shadow border-[1px] border-gray-100 ms-[-15px] me-4 my-2 font-bold">
        Bike Lists
        <div>
          <MdFormatListBulletedAdd
            className=" hover:scale-50 duration-200 cursor-pointer"
            size={22}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
      >
        <div
          className={`${
            isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
          } w-[90%] sm:w-[80%] md:w-[65%] bg-[#fff] h-[86%]  rounded-lg transition-all duration-300 mx-auto mt-16`}
        >
          <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
            <h1 className="text-[1.5rem] font-bold">
              Listing New brand New Bike{" "}
            </h1>
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
          </div>

          <form className="flex flex-col gap-5 p-4">
            <div className="flex justify-between items-center">
              <div>
                <label
                  htmlFor="email"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Bike Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="text"
                  placeholder="Honaiy"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Brand
                </label>
                <input
                  type="brand"
                  name="brand"
                  id="text"
                  placeholder="zenuilibrary@gmail.com"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <label
                  htmlFor="email"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Price
                </label>
                <input
                  type="price"
                  name="price"
                  id="number"
                  placeholder="300000"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>

              <div>
                <label
                  htmlFor="model"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Model
                </label>
                <input
                  type="model"
                  name="model"
                  id="text"
                  placeholder="ag"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Stock
              </label>
              <div className="">
                <div
                  className="bg-[#fff] border border-[#d1d1d1] rounded-md w-[30%] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedItem}
                  <IoChevronDown
                    className={`${
                      isDropdownOpen ? " rotate-[180deg]" : " rotate-0"
                    } transition-all duration-300 text-[1.2rem]`}
                  />
                  <div
                    className={`${
                      isDropdownOpen
                        ? "z-[1] opacity-100 scale-[1]"
                        : "z-[-1] opacity-0 scale-[0.8]"
                    } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{
                      boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {options?.map((option, index) => (
                      <p
                        className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
                        key={index}
                        onClick={(e) => setSelectedItem(e.target.textContent)}
                      >
                        {option.icon}
                        {option.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="py-2 px-4 w-full bg-[#3B9DF8] text-[#fff] rounded-md"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      |<BikeListTable />
    </div>
  );
};

export default AddBike;

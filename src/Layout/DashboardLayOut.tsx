import React, { useState } from "react";
// react icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown, IoIosCode, IoIosSearch } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaRegAddressBook } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import {
  IoMoonOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import logo from "../assets/bycicle.png";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
const DashboardLayOut = () => {
  const [isCollapse2, setIsCollapse2] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  return (
    <div>
      <div className="bg-[#ff7b84d0] h-16 pt-4">
        <div className="bg-blue-400  md:w-[25%] md:h-[60%] mx-auto p-5  flex items-center justify-center rounded-full cursor-pointer relative">
          <IoSearch className="text-[1.3rem] text-amber-50 ml-auto" />

          <input
            type="text"
            placeholder="Search..."
            className="border border-border absolute top-[2px] bg-amber-50 left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className=" col-span-2">
          <aside
            className={`bg-white mt-2 boxShadow rounded-md transition-all duration-300 ease relative border-[1px] ${
              isCollapse2 ? "w-[85%] duration-300" : "w-20 duration-300"
            }`}
          >
            <div
              className={`mt-5 ${
                isCollapse2 ? "px-[20px]" : "px-[10px]"
              } transition-all duration-300 ease-in-out `}
            >
              {isCollapse2 ? (
                <Link
                  to="/"
                  className="flex items-center justify-center border-[1px] rounded-md"
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[90px] my-[-10px] cursor-pointer"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[45px]   mx-auto cursor-pointer"
                  />
                </Link>
              )}

              {/* search bar */}
              {isCollapse2 ? (
                <div className="relative mt-5">
                  <input
                    className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-[#3B9DF8]"
                    placeholder="Search..."
                  />
                  <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
                </div>
              ) : (
                <div className="w-full relative group">
                  <IoIosSearch className="text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full" />

                  {/* tooltip */}
                  <div
                    className={`${
                      isCollapse2 ? "hidden" : "inline"
                    } absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
                  >
                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                      Search
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* collapse button */}
            {/* <div
              className="bg-gray-200 p-[5px] rounded-md w-max absolute top-[50px] right-[-20px] cursor-pointer"
              onClick={() => setIsCollapse2(!isCollapse2)}
            >
              <IoIosCode className="text-[1.5rem] text-gray-500" />
            </div> */}

            {/* general section */}
            <div
              className={`mt-6 ${
                isCollapse2 ? "px-[20px]" : "px-[10px]"
              } transition-all duration-300 ease-in-out`}
            >
              <p
                className={`${
                  isCollapse2 ? "text-start" : "text-center"
                } text-[0.9rem] text-gray-500`}
              >
                Main
              </p>

              <div className="mt-3 flex flex-col gap-[5px]">
                <div
                  className={`${
                    isCollapse2 ? "justify-between" : "justify-center"
                  } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
                >
                  <Link to="/dashboard/productlisting">
                    <div className="flex items-center gap-[8px]">
                      <FaRegAddressBook className="text-[1.3rem] text-gray-500" />
                      <p
                        className={`${
                          isCollapse2 ? "inline" : "hidden"
                        } text-[1rem] font-[400] text-gray-500`}
                      ></p>
                    </div>

                    {/* tooltip */}
                    <div
                      className={`${
                        isCollapse2 ? "hidden" : "inline"
                      } absolute top-0 right-[-108px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
                    >
                      <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                        Add Bike
                      </p>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${
                    isCollapse2 ? "justify-between" : "justify-center"
                  } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
                >
                  <div className="flex items-center gap-[8px]">
                    <GoPerson className="text-[1.3rem] text-gray-500" />
                    <p
                      className={`${
                        isCollapse2 ? "inline" : "hidden"
                      } text-[1rem] font-[400] text-gray-500`}
                    ></p>
                  </div>

                  {/* tooltip */}
                  <div
                    className={`${
                      isCollapse2 ? "hidden" : "inline"
                    } absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
                  >
                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                      Audience
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    isCollapse2 ? "justify-between" : "justify-center"
                  } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
                >
                  <div className="flex items-center gap-[8px]">
                    <IoNewspaperOutline className="text-[1.3rem] text-gray-500" />
                    <p
                      className={`${
                        isCollapse2 ? "inline" : "hidden"
                      } text-[1rem] font-[400] text-gray-500`}
                    ></p>
                  </div>

                  {/* tooltip */}
                  <div
                    className={`${
                      isCollapse2 ? "hidden" : "inline"
                    } absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
                  >
                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                      Posts
                    </p>
                  </div>
                </div>
                <div
                  className={`${isCollapse2 && "justify-center"} ${
                    isDropdownOpen && "bg-gray-50"
                  } flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div
                    className={`${
                      isCollapse2 ? " justify-between" : "justify-center"
                    } flex items-center gap-[8px  w-full`}
                  >
                    <div className="flex items-center gap-[8px]">
                      <TbBrandGoogleAnalytics className="text-[1.3rem] text-gray-500" />
                      <p
                        className={`${
                          isCollapse2 ? "inline" : "hidden"
                        } text-[1rem] font-[400] text-gray-500`}
                      ></p>
                    </div>

                    <IoIosArrowDown
                      className={`${
                        isDropdownOpen ? "rotate-[180deg]" : "rotate-0"
                      } ${
                        isCollapse2 ? "inline" : "hidden"
                      } transition-all duration-300 text-[1rem] text-gray-500`}
                    />
                  </div>

                  {!isCollapse2 && (
                    <>
                      {/* hover projects dropdown */}
                      <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500">
                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                          Earnings
                        </li>
                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                          Refunds
                        </li>
                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                          Declines
                        </li>
                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                          Payouts
                        </li>
                      </ul>
                    </>
                  )}
                </div>

                {/* active projects dropdown */}
                <ul
                  className={`${
                    isDropdownOpen
                      ? "h-auto my-3 opacity-100 z-[1]"
                      : "opacity-0 z-[-1] h-0"
                  } ${
                    isCollapse2 ? "inline" : "hidden"
                  } transition-all duration-300 list-none ml-[20px] pl-[10px] border-l border-gray-300 flex flex-col gap-[3px] text-[1rem] text-gray-500`}
                >
                  <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                    Earnings
                  </li>
                  <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                    Refunds
                  </li>
                  <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                    Declines
                  </li>
                  <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                    Payouts
                  </li>
                </ul>
              </div>
            </div>

            {/* setting section */}
            <div
              className={`${
                isCollapse2 ? "px-[20px]" : "px-[10px]"
              } mt-4 transition-all duration-300 ease-in-out`}
            >
              <p
                className={`${
                  isCollapse2 ? "text-start" : "text-center"
                } text-[0.9rem] text-gray-500`}
              >
                Settings
              </p>

              <div className="mt-3 flex flex-col gap-[5px]">
                <div
                  className={`${
                    isCollapse2 ? "justify-between" : "justify-center"
                  } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
                >
                  <div className="flex items-center gap-[8px]">
                    <IoNotificationsOutline className="text-[1.3rem] text-gray-500" />
                    <p
                      className={`${
                        isCollapse2 ? "inline" : "hidden"
                      } text-[1rem] font-[400] text-gray-500`}
                    ></p>
                  </div>

                  <div
                    className={`${
                      isCollapse2 ? "hidden" : "inline"
                    } absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
                  >
                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                      Activity
                    </p>
                  </div>
                </div>

                <div
                  className={`${
                    isCollapse2 ? "justify-between" : "justify-center"
                  } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
                >
                  <div className="flex items-center gap-[8px]">
                    <IoSettingsOutline className="text-[1.3rem] text-gray-500" />
                    <p
                      className={`${
                        isCollapse2 ? "inline" : "hidden"
                      } text-[1rem] font-[400] text-gray-500`}
                    ></p>
                  </div>

                  {/* tooltip */}
                  <div
                    className={`${
                      isCollapse2 ? "hidden" : "inline"
                    } absolute top-0 right-[-84px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
                  >
                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                      Setting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* light & dark mode section */}
            <div
              className={`${
                isCollapse2
                  ? "justify-between px-[20px]"
                  : "justify-center px-[10px]"
              } bg-gray-50 py-3 flex items-center mt-10 rounded-b-md`}
            >
              <div
                className={`${
                  isCollapse2 ? "inline" : "hidden"
                } flex items-center bg-gray-200 640px:p-[10px] rounded-md w-full justify-between relative`}
              >
                <div
                  className={`${
                    isDark
                      ? "w-[50%] translate-x-[94%]"
                      : "w-[50%] translate-x-0"
                  } transition-all duration-300 absolute top-[50%] transform translate-y-[-50%] left-[4px] bg-white rounded-md h-[85%] w-[100px] z-10`}
                ></div>
                <button
                  className={`px-[22px] py-[14px] 640px:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20`}
                  onClick={() => setIsDark(false)}
                >
                  <IoSunnyOutline className="text-[1.2rem]" />
                  Light
                </button>
                <button
                  className={`px-[25px] py-[14px] 640px:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20`}
                  onClick={() => setIsDark(true)}
                >
                  <IoMoonOutline className="text-[1.2rem]" />
                  Dark
                </button>
              </div>

              {/* light & dark mode switch */}
              <div
                className={`${
                  isCollapse2 ? "hidden" : "inline"
                } bg-gray-200 w-full rounded-full flex items-center p-[3px] cursor-pointer`}
                onClick={() => setIsDark(!isDark)}
              >
                <div
                  className={`${
                    isDark ? "translate-x-[21px]" : "translate-x-0"
                  } transition-all duration-300`}
                >
                  {isDark ? (
                    <IoMoonOutline className="text-[1.6rem] cursor-pointer bg-white rounded-full p-[5px]" />
                  ) : (
                    <IoSunnyOutline className="text-[1.6rem] cursor-pointer bg-white rounded-full p-[5px]" />
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className=" col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;

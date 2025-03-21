import React from "react";

import { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import {
  BsChevronLeft,
  BsChevronRight,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const BikeListTable = () => {
  const initialData = Array.from({ length: 35 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    brand: `user${index + 1}@example.com`,
    Price: index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Editor" : "User",
    model: index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Editor" : "User",
    Stock: index % 2 === 0 ? "Active" : "Inactive",
  }));

  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState(null);

  const selectRef = useRef(null);

  const toggleActionMenu = (id: number | React.SetStateAction<null>) => {
    setOpenActionMenuId(openActionMenuId === id ? null : id);
  };

  // Handle search
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  // Handle sort
  const handleSort = (key: string | null) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Pagination calculations
  const totalPages = Math.ceil(sortedData.length / pageSize);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const handleOptionClick = (value: number) => {
    setPageSize(Number(value));
    setCurrentPage(1);
    setIsOpen(false);
  };

  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (event: null) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpenActionMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", () => {
        handleOutsideClick();
      });
  }, []);
  return (
    <div>
      <div className="customTable ms-[-28px] overflow-y-auto flex items-center flex-col gap-5 justify-center">
        <div className="w-full mx-auto p-4">
          <div className="mb-4 flex items-center justify-between">
            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm py-2.5 px-4 border border-gray-200 rounded-md outline-none focus:border-blue-300"
            />
          </div>

          <div className="rounded-md border overflow-hidden border-gray-200 w-full">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  {Object.keys(initialData[0]).map(
                    (key) =>
                      key !== "id" && (
                        <th
                          key={key}
                          className="p-3 text-left font-medium text-gray-700 cursor-pointer"
                        >
                          <div className="flex items-center gap-[5px]">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                            <HiOutlineArrowsUpDown
                              onClick={() => handleSort(key)}
                              className="hover:bg-gray-200 p-[5px] rounded-md text-[1.6rem]"
                            />
                          </div>
                        </th>
                      )
                  )}
                  <th className="p-3 text-left font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    {Object.entries(item).map(
                      ([key, value]) =>
                        key !== "id" && (
                          <td key={key} className="p-3">
                            {value}
                          </td>
                        )
                    )}
                    <td className="p-3 relative w-28">
                      <div className="flex justify-start gap-4 items-center ">
                        <p
                          title="  Edit"
                          className="text-gray-100 text-lg hover:scale-50 duration-300 cursor-pointer bg-green-400 p-1 rounded"
                        >
                          <MdOutlineEdit />
                        </p>
                        <p
                          title=" Delete"
                          className=" text-gray-100  text-lg hover:scale-50 duration-300 cursor-pointer bg-red-400 p-1 rounded"
                        >
                          <MdDeleteOutline />
                        </p>
                        <p
                          title="   View Details"
                          className=" text-gray-800  text-lg hover:scale-50 duration-300 cursor-pointer bg-sky-200 p-1 rounded"
                        >
                          <IoEyeOutline />
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!paginatedData?.length && (
              <p className="text-[0.9rem] text-gray-500 py-6 text-center w-full">
                No data found!
              </p>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            {/* <div className="flex items-center gap-[5px]">
              <div className="text-sm text-gray-500">
                Showing {(currentPage - 1) * pageSize + 1} to{" "}
                {Math.min(currentPage * pageSize, sortedData.length)} of{" "}
                {sortedData.length} results
              </div>

              <div ref={selectRef} className="relative w-44">
                <button
                  onClick={handleToggle}
                  className="w-max px-2 py-0.5 text-left bg-white border border-gray-300 rounded shadow-sm flex items-center justify-between gap-[10px] hover:border-gray-400 focus:outline-none"
                >
                  {pageSize}

                  <IoIosArrowDown
                    className={`${
                      isOpen ? "rotate-[180deg]" : "rotate-0"
                    } transition-all duration-200`}
                  />
                </button>
                {isOpen && (
                  <div className="absolute overflow-hidden w-max mt-1 bg-white border border-gray-300 rounded shadow-lg">
                    <div
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOptionClick(5)}
                    >
                      5
                    </div>
                    <div
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOptionClick(10)}
                    >
                      10
                    </div>
                    <div
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOptionClick(20)}
                    >
                      20
                    </div>
                    <div
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOptionClick(50)}
                    >
                      50
                    </div>
                  </div>
                )}
              </div>
            </div> */}

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border border-gray-200 hover:bg-gray-50 cursor-pointer px-[10px] text-[0.9rem] py-[5px] rounded-md"
              >
                <BsChevronLeft />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`${
                        pageNum === currentPage && "bg-black text-white"
                      } border border-gray-200 px-[10px] text-[0.9rem] py-[1px] rounded-md`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border border-gray-200 px-[10px] cursor-pointer hover:bg-gray-50 text-[0.9rem] py-[5px] rounded-md"
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeListTable;

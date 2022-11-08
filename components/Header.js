import React, { useState } from "react";
import Image from "next/image";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { AiOutlineGlobal, AiOutlineMenu } from "react-icons/ai";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Logo from "../public/logo1.png";
import { BsPeopleFill } from "react-icons/bs";
import { useRouter } from "next/router";
const Header = ({ placeholder: any }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noGuests, setNoGuests] = useState("");
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noGuests,
      },
    });
  };
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 ">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center cursor-pointer h-10 my-auto"
      >
        <Image
          src={Logo}
          width={100}
          height={60}
          objectPosition="left"
          objectFit="contain"
        />
      </div>
      <div className="flex  justify-between items-center border-2 rounded-full py-2  md:shadow-md">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder || "Start your search"}
          className="pl-5 outline-none bg-transparent flex-grow placeholder-gray-500"
        />
        <FaSearch className=" mr-2  hidden md:inline-flex" />
      </div>
      <div className=" flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline"> Become a host</p>
        <AiOutlineGlobal />
        <div className="flex items-center space-x-3 border-2 p-2 rounded-full">
          <AiOutlineMenu />
          <FaUserAlt />
        </div>
      </div>

      {searchInput && (
        <div className="mt-10 flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fb5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold ">
              Number of Guests
            </h2>
            <BsPeopleFill />
            <input
              value={noGuests}
              onChange={(e) => setNoGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-500"
            />
          </div>
          <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500 ">
              Cancel
            </button>
            <button className="flex-grow text-red-500" onClick={search}>
              {" "}
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

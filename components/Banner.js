import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
        width: "100%",
        objectPosition: "center",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative  sm:h-[500px] lg:h-[600px] 2xl:h-[700px] h-screen"
    >
      <div className="absolute top-1/2 w-full text-center ">
        <p className="text-2xl pb-4 font-semibold text-gray-600">
          Book Top Rated Rentals for Your Next Trip
        </p>
        <p className="max-w-md  mx-auto text-sm pb-3 text-gray-500">
          The Most Comprehensive Free Protection in Travel - Best Prices -
          100,000+ Cities - Instant Confirmation
        </p>
        <button
          className="
        text-yellow-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          Discover Now
        </button>
      </div>
    </div>
  );
};

export default Banner;

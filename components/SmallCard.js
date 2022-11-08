import React from "react";
import Image from "next/image";

const SmallCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="p-3 flex items-center m-2  space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition  transform duration-150 ease-out">
        <div className="mt-8 h-24 w-24 ">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="font-semibold"> London</h1>
          <h3> 45 min drive </h3>
        </div>
      </div>

      <div className="p-3 flex items-center m-2  space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition  transform duration-150 ease-out">
        <div className="mt-8 h-24 w-24 ">
          <Image
            src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="font-semibold"> New York</h1>
          <h3> 45 min drive </h3>
        </div>
      </div>

      <div className="p-3 flex items-center m-2  space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition  transform duration-150 ease-out">
        <div className="mt-8 h-24 w-24 ">
          <Image
            src="https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="font-semibold"> Bali</h1>
          <h3> 45 min drive </h3>
        </div>
      </div>

      <div className="p-3 flex items-center m-2  space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition  transform duration-150 ease-out">
        <div className="mt-8 h-24 w-24 ">
          <Image
            src="https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="font-semibold"> Beijing</h1>
          <h3> 45 min drive </h3>
        </div>
      </div>

      <div className="p-3 flex items-center m-2  space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition  transform duration-150 ease-out">
        <div className="mt-8 h-24 w-24 ">
          <Image
            src="https://images.unsplash.com/photo-1541435469116-8ce8ccc4ff85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="font-semibold"> Tokyo</h1>
          <h3> 45 min drive </h3>
        </div>
      </div>

      <div className=" p-3 flex items-center m-2  space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition  transform duration-150 ease-out">
        <div className="mt-8 h-24 w-24 ">
          <Image
            src="https://images.unsplash.com/photo-1631049035326-57414e7739eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="font-semibold"> Chicago</h1>
          <h3> 45 min drive </h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;

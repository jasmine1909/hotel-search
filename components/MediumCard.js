import React from "react";
import Image from "next/image";

const MediumCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
      <div className="cursor-pointer hover:scale-105 transform transition duration-300  ease-out mx-3">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1623423415485-1d36867376b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            width={500}
            height={300}
          />
        </div>
        <div className="text-xl font-medium my-6">Outdoor gateaway</div>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300  ease-out">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            width={500}
            height={300}
          />
        </div>
        <div className="text-xl font-medium my-6">Weekend Vacation</div>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300  ease-out mx-3">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            width={500}
            height={300}
          />
        </div>
        <div className="text-xl font-medium my-6">Honeymoon </div>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300  ease-out mx-3">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
            width={500}
            height={300}
          />
        </div>
        <div className="text-xl font-medium my-6">Snow Destination</div>
      </div>
    </div>
  );
};

export default MediumCard;

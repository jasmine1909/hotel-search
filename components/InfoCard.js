import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import Image from "next/image";

const InfoCard = () => {
  return (
    <div>
      <div className="flex mb-6 mt-6">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col flex-grow pl-12">
          <div className="flex justify-between">
            <p> Private room</p>
            <AiOutlineHeart className="cursor-pointer mr-8 " />
          </div>
          <h4 clasName="tex-xl">Stay in spacious House</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">
            1 guest - 1 bathroom - 1 bed - Wifi- Kitchen
          </p>
          <div>
            <p className="flex items-center">
              <AiFillStar className="fill-yellow-500 mr-2" /> 4.82
            </p>
          </div>
        </div>
      </div>
      <div className="flex mb-6">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col flex-grow pl-12">
          <div className="flex justify-between">
            <p> Private room</p>
            <AiOutlineHeart className="cursor-pointer mr-8" />
          </div>
          <h4 clasName="tex-xl">Stay in spacious House</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">
            1 guest - 1 bathroom - 1 bed - Wifi- Kitchen
          </p>
          <div>
            <p className="flex items-center">
              <AiFillStar className="fill-yellow-500 mr-2" /> 4.82
            </p>
          </div>
        </div>
      </div>

      <div className="flex mb-6">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col flex-grow pl-12">
          <div className="flex justify-between">
            <p> Private room</p>
            <AiOutlineHeart className=" cursor-pointer mr-8" />
          </div>
          <h4 clasName="tex-xl">Stay in spacious House</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">
            1 guest - 1 bathroom - 1 bed - Wifi- Kitchen
          </p>
          <div>
            <p className="flex items-center">
              <AiFillStar className="fill-yellow-500 mr-2" /> 4.82
            </p>
          </div>
        </div>
      </div>

      <div className="flex mb-20">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col flex-grow pl-12">
          <div className="flex justify-between">
            <p> Private room</p>
            <AiOutlineHeart className="cursor-pointer mr-8" />
          </div>
          <h4 clasName="tex-xl">Stay in spacious House</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">
            1 guest - 1 bathroom - 1 bed - Wifi- Kitchen
          </p>
          <div>
            <p className="flex items-center">
              <AiFillStar className="fill-yellow-500 mr-2" /> 4.82
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

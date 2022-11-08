import React from "react";
import Image from "next/image";
const LargeCard = () => {
  return (
    <div className="relative my-8 text-white ">
      <Image
        className="rounded-lg"
        src="https://images.unsplash.com/photo-1464069668014-99e9cd4abf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        width={1200}
        height={300}
      />
      <div className="absolute top-32 left-12">
        <h2 className="text-4xl"> The Greatest Outdoor </h2>
        <p> Lorem ipsum dolor sit amet, consectetur</p>
        <button className="bg-black text-white p-3 mt-3">Get Started</button>
      </div>
    </div>
  );
};

export default LargeCard;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const search = () => {
  const router = useRouter();
  console.log(router.query);
  const { location, startDate, endDate, noGuests } = router.query;
  const formattedStartDate = () => format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = () => format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} for ${noGuests}  guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm"> 500+ stays - for {noGuests} guests</p>
          <h2 className="text-3xl font-semibold mt-2 mb-6 ">
            {" "}
            Stays in {location}
          </h2>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">More filters</p>
          </div>
          <div>
            <InfoCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;

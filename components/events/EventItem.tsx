import Link from "next/link";
import React from "react";
import { OneEventProps } from "../interfaces/oneEventProps";

const EventItem = (props: OneEventProps) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAdress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className="sm:flex-row shadow-xl rounded-[8px] overflow-hidden bg-white mx-[1rem] my-[3rem] flex flex-col sm:gap-[2rem] gap-[1rem] sm:pb-0 pb-3">
      <img
        src={`/${image}`}
        alt={title}
        className="object-cover overflow-hidden w-full h-[15rem] rounded-[8px] sm:w-[40%] sm:h-[19rem]"
      />
      <div className="w-full py-o px-[1rem] sm:w-[60%] p-0 text-left">
        <div className="">
          <h2 className="my-[0.5rem] sm:my-[1rem] sm:text-2xl text-xl">
            {title}
          </h2>
          <div className="flex gap-[0.5rem] items-center">
            <time className="text-gray-600 font-bold text-lg sm:text-xl">
              {humanReadableDate}
            </time>
          </div>
          <div className="flex gap-[0.5rem] items-center">
            <h1 className="my-[0.5rem] text-gray-600  text-lg sm:text-xl">
              {formattedAdress}
            </h1>
          </div>
        </div>
        <div className=" bg-purple-600 text-white px-4 py-1 rounded-[8px] transition-all duration-300 mt-3 hover:translate-y-[-5px] inline-block text-lg">
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

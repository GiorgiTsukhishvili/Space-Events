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
    <li className="sm:flex-row shadow-lg rounded-[8px] overflow-hidden bg-white m-[1rem] flex flex-col gap-[1rem] sm:pb-0 pb-3">
      <img
        src={`/${image}`}
        alt={title}
        className="object-cover overflow-hidden w-full h-[10rem] rounded-[8px] sm:w-[40%] sm:h-[14rem]"
      />
      <div className="w-full py-o px-[1rem] sm:w-[60%] p-0 text-left">
        <div className="">
          <h2 className="my-[0.5rem] sm:my-[1rem]">{title}</h2>
          <div className="flex gap-[0.5rem] items-center">
            <time className="text-gray-600 font-bold">{humanReadableDate}</time>
          </div>
          <div className="flex gap-[0.5rem] items-center">
            <h1 className="my-[0.5rem] text-gray-600">{formattedAdress}</h1>
          </div>
        </div>
        <div className="underline text-right text-lg">
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

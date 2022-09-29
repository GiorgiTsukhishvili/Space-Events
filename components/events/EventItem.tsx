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

  return (
    <li>
      <img src="" alt="   " />
      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time></time>
          </div>
          <div>
            <h1></h1>
          </div>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

import React from "react";
import { EventListProps } from "../interfaces/eventListInterface";
import EventItem from "./EventItem";
import { v4 } from "uuid";

const eventList = ({ items }: { items: EventListProps[] }) => {
  return (
    <ul className="w-[90%] max-w-[60rem]  my-[5rem] mx-auto">
      {items.map((item) => (
        <EventItem
          key={v4()}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default eventList;

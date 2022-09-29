import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../utils/dummyData";

const EventDetail = () => {
  const router = useRouter();

  const eventId: string = router.query.eventId! as string;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAdress = event.location.replace(", ", "\n");

  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-gradient-to-r pt-[60px] from-[#7F00FF] to-[#E100FF] block w-full text-center h-[200px] text-white text-5xl">
        {event.title}
      </h1>

      <div className="flex items-center bg-gray-800 py-10 px-7 rounded-[8px] mt-[-45px] text-white">
        <img
          src={`/${event.image}`}
          alt="Event"
          className="rounded-full w-[250px] h-[250px] border-gray border-[5px]"
        />
        <div className="ml-3">
          <h1 className="text-3xl mb-5">{humanReadableDate}</h1>
          <h1 className="text-2xl">{formattedAdress}</h1>
        </div>
      </div>

      <h1 className="text-center text-2xl w-[70%] mt-10">
        {event.description}
      </h1>
    </div>
  );
};

export default EventDetail;

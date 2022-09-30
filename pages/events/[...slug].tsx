import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../utils/dummyData";
import EventList from "../../components/events/eventList";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;
  console.log(filteredData);
  if (!filteredData) {
    return <p className="mx-auto text-center">Loading...</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: +filteredData[0],
    month: +filteredData[1],
  });

  if (filteredEvents.length === 0) {
    return <p className="text-center text-5xl mt-20">No Events Were Found</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;

import React, { Fragment } from "react";
import { getAllEvents } from "../../utils/dummyData";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

const Events = () => {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default Events;

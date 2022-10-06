import React, { Fragment } from "react";
import { getAllEvents } from "../../helpers/apiUtil";
import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import { AllEventsProps } from "../../interfaces/allEventsInterface";
import Head from "next/head";

const Events = ({ events }: { events: AllEventsProps[] }) => {
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPatch = `/events/${year}/${month}`;
    router.push(fullPatch);
  };

  return (
    <Fragment>
      <Head>
        <title>Every Event</title>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const allEvents = getAllEvents();

  return {
    props: {
      events: allEvents,
    },
  };
};

export default Events;

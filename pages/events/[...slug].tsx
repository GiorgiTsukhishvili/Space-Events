import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/apiUtil";
import EventList from "../../components/events/eventList";
import { ParsedUrlQuery } from "querystring";
import { FilteredEventsProps } from "../../interfaces/filteredEventsInterface";
import Head from "next/head";

const FilteredEventsPage = ({
  filteredEvents,
}: {
  filteredEvents: FilteredEventsProps[];
}) => {
  const router = useRouter();

  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="mx-auto text-center">Loading...</p>;
  }

  if (filteredEvents.length === 0) {
    return <p className="text-center text-5xl mt-20">No Events Were Found</p>;
  }

  return (
    <>
      <Head>
        <title>Filtered Events</title>
      </Head>

      <div>
        <EventList items={filteredEvents} />
      </div>
    </>
  );
};

export const getServerSideProps = async (context: {
  params?: ParsedUrlQuery;
}) => {
  const { params } = context;

  const filteredData = params!.slug as string[];

  const filteredEvents = getFilteredEvents({
    year: +filteredData[0],
    month: +filteredData[1],
  });

  return {
    props: {
      filteredEvents,
    },
  };
};

export default FilteredEventsPage;

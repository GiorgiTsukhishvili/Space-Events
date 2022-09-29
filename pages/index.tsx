import type { NextPage } from "next";
import Link from "next/link";
import { getFeaturedEvents } from "../utils/dummyData";
import EventList from "../components/events/EventList";

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;

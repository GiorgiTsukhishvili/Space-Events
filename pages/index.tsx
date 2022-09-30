import type { NextPage } from "next";
import { getFeaturedEvents } from "../utils/dummyData";
import EventList from "../components/events/eventList";
import { HomeProps } from "../interfaces/homeInterface";

const Home = ({ featuredEvents }: { featuredEvents: HomeProps[] }) => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
  };
};

export default Home;

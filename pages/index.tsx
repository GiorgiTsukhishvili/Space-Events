import { getFeaturedEvents } from "../helpers/apiUtil";
import EventList from "../components/events/eventList";
import { HomeProps } from "../interfaces/homeInterface";
import Head from "next/head";
import NewsLetterRegistration from "../components/inputs/NewsLetterRegistration";

const Home = ({ featuredEvents }: { featuredEvents: HomeProps[] }) => {
  return (
    <>
      <Head>
        <title>Space Events</title>
        <meta name="description" content="Great Space Events" />
      </Head>
      <NewsLetterRegistration />
      <div>
        <EventList items={featuredEvents} />
      </div>
    </>
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

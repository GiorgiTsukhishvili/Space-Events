import type { NextPage } from "next";
import Link from "next/link";
import { getFeaturedEvents } from "../utils/dummyData";

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return <div>sad</div>;
};

export default Home;

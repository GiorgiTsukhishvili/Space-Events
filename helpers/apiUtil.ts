import fs from "fs";
import path from "path";

export const getAllEvents = () => {
  const jsonDirectory = path.join(process.cwd(), "json");

  const allEvents = fs.readFileSync(jsonDirectory + "/eventsData.json", "utf8");

  return allEvents;
};

export function getFeaturedEvents() {
  const featuredEvents = JSON.parse(getAllEvents());

  return featuredEvents.filter(
    (event: {
      id: string;
      title: string;
      description: string;
      location: string;
      date: string;
      image: string;
      isFeatured: boolean;
    }) => event.isFeatured
  );
}

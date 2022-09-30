import fs from "fs";
import path from "path";
import { ApiUtilsInt } from "./apiUtilsInterface";

export const getAllEvents = () => {
  const jsonDirectory = path.join(process.cwd(), "json");

  const allEvents = fs.readFileSync(jsonDirectory + "/eventsData.json", "utf8");

  return JSON.parse(allEvents);
};

export function getFeaturedEvents() {
  const featuredEvents = getAllEvents();

  return featuredEvents.filter((event: ApiUtilsInt) => event.isFeatured);
}

export function getEventById(id: string) {
  const allEvents = getAllEvents();
  return allEvents.find((event: ApiUtilsInt) => event.id === id);
}

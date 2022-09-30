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

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;

  const allEvents = getAllEvents();

  let filteredEvents = allEvents.filter((event: ApiUtilsInt) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

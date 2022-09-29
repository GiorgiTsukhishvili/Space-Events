const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Space for everyone",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur exercitationem vero neque harum, accusamus facilis? Possimus ut eius error, odit consequuntur quo in aspernatur nostrum eveniet ipsum enim ullam unde?",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/universe.avif",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Universe for introverts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur exercitationem vero neque harum, accusamus facilis? Possimus ut eius error, odit consequuntur quo in aspernatur nostrum eveniet ipsum enim ullam unde?",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/universe-1.avif",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Universe for extroverts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur exercitationem vero neque harum, accusamus facilis? Possimus ut eius error, odit consequuntur quo in aspernatur nostrum eveniet ipsum enim ullam unde?",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/universe-3.avif",
    isFeatured: true,
  },

  {
    id: "e4",
    title: "Universe for adventurers",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur exercitationem vero neque harum, accusamus facilis? Possimus ut eius error, odit consequuntur quo in aspernatur nostrum eveniet ipsum enim ullam unde?",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/universe-4.avif",
    isFeatured: true,
  },

  {
    id: "e5",
    title: "Universe",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur exercitationem vero neque harum, accusamus facilis? Possimus ut eius error, odit consequuntur quo in aspernatur nostrum eveniet ipsum enim ullam unde?",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/universe-4.avif",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

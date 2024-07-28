import { EventProps } from "@/types/index.types";
import React from "react";
import EventCard from "./event-card";

const EventsList = ({ events }: { events: EventProps[] }) => {
  return (
    <section className="flex flex-wrap justify-center gap-10 px-10 max-w-[1210px] py-10">
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </section>
  );
};

export default EventsList;

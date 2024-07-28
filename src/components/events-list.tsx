import { EventProps } from "@/types/index.types";
import React from "react";
import EventCard from "./event-card";
import { generateEvents, sleep } from "@/lib/utils";

const EventsList = async ({ city }: { city: string }) => {
  await sleep(2000);
  const events = await generateEvents(city);
  console.log(events);
  return (
    <section className="flex flex-wrap justify-center gap-10 px-10 max-w-[1210px] py-10">
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </section>
  );
};

export default EventsList;

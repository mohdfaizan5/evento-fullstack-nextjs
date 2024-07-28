import EventsList from "@/components/events-list";
import { EventProps } from "@/types/index.types";
import React from "react";

const page = async ({ params }: { params: { city: string } }) => {
  const city = params.city;
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" + city
  );
  const events: EventProps[] = await response.json();
  console.log(events);
  return (
    <main className="flex flex-col items-center min-h-dvh">
      <h1 className="mt-10">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </h1>
      <p className="font-light opacity-75  pb-7 text-center text-balance"> found {events.length} events</p>
      <EventsList events={events} />
    </main>
  );
};

export default page;

import { EventProps } from "@/types/index.types";
import React from "react";
import EventCard from "./event-card";
import { sleep } from "@/lib/utils";
import PaginationControls from "./pagination-controls";
import { generateEvents } from "@/lib/server-utils";

const EventsList = async ({
  city,
  page = 1,
}: {
  city: string;
  page: number;
}) => {
  const { events, totalCount } = await generateEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : ""; // if page > 1 else we are showing empty str
  const nextPath =
    totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";

  return (
    <div className="px-10">
      <section className="flex flex-wrap justify-center gap-10  max-w-[1210px] py-10">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </section>

      <PaginationControls nextPath={nextPath} previousPath={previousPath} />
    </div>
  );
};

export default EventsList;

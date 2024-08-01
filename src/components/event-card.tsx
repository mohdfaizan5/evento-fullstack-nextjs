// import { EventProps } from "@/types/index.types"; using prisma types
import { Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="h-[380px] flex-1 max-w-[500px] basis-80"
    >
      <div
        key={event.id}
        className=" flex flex-col items-center relative h-full w-full bg-white/[3%] rounded-md overflow-hidden hover:scale-105 active:scale-[1.02] transition-transform duration-300 ease-in-out"
      >
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="w-full h-[60%] object-cover"
        />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="">{event.name}</h2>
          <p className="font-semibold text-sm text-white/80">
            By {event.organizerName}
          </p>
          <p className="text-xs font-light text-white/50">{event.location}</p>
        </div>
        <section className="absolute size-11 flex flex-col items-center left-3 top-3  bg-white/[7%] justify-center rounded-md">
          <p className="text-xl font-bold -mb-1">
            {/* convert this date to a date with leading zero */}
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs font-light text-accent uppercase">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </div>
    </Link>
  );
};

export default EventCard;

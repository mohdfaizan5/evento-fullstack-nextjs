import { generateEvent } from "@/lib/server-utils";
import { sleep } from "@/lib/utils";
import { EventProps } from "@/types/index.types";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const event = await generateEvent(slug);
  return {
    title: event.name,
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const event = await generateEvent(slug);
  return (
    <main>
      <section className="overflow-hidden relative h-[361px]">
        <Image
          src={event.imageUrl}
          fill
          alt="bg-img"
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          className="object-cover blur-3xl"
          priority
        />
        <div className="absolute flex justify-center items-center h-full gap-10 w-full flex-col md:flex-row ">
          <Image
            src={event.imageUrl}
            alt="bg-img"
            width={211}
            className="border rounded-md"
            height={320}
          />
          <div className="flex flex-col justify-center gap-1">
            <p className="text-xs  font-extralight text-white/80">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="whitespace-nowrap">{event.name}</h1>
            <p className="text-base font-light">
              Organised by{" "}
              <span className="underline">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize mt-5 w-[95vw] sm:w-full py-1 border rounded-md hover:scale-105 active:ring active:scale-95 transition-transform">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <section className="flex py-10 flex-col items-center">
        <h2>Description</h2>
        <p className="font-light opacity-75  pb-7 text-center text-balance max-w-3xl">
          {event.description}
        </p>
        <h2>Location</h2>
        <p className="font-light opacity-90  pb-7 text-center text-balance">
          {event.location}
        </p>
      </section>
    </main>
  );
};

export default page;

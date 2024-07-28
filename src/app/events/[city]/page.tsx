import EventsList from "@/components/events-list";
import React, { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";

export const generateMetadata = async ({
  params,
}: {
  params: { city: string };
}) => {
  const city = params.city;

  return {
    title:
      city == "all"
        ? "All Events"
        : `Events in ${capitalize(city)}`,
  };
};

const page = async ({ params }: { params: { city: string } }) => {
  const city = params.city;

  return (
    <main className="flex flex-col items-center min-h-dvh">
      <h1 className="mt-10">
        {city === "all"
          ? "All Events"
          : `Events in ${capitalize(city)}`}
      </h1>
      {/* <p className="font-light opacity-75  pb-7 text-center text-balance">
        found {events.length} events
      </p> */}

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default page;

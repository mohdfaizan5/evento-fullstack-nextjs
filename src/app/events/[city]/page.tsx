import EventsList from "@/components/events-list";
import React, { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: { city: string };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({ params }: Props) => {
  const city = params.city;

  return {
    title: city == "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
};

export async function generateStaticParams() {
  return [
    {
      city: "react-meetup-bangalore",
    },
    {
      city: "science-space-expo",
    },
  ];
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

const page = async ({ params, searchParams }: EventsPageProps) => {
  const city = params.city;

  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) throw new Error("Invalid page number");

  const page = parsedPage.data || 1;
  // console.log("Page query params", page);

  return (
    <main className="flex flex-col items-center  min-h-dvh">
      <h1 className="mt-10">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </h1>
      {/* <p className="font-light opacity-75  pb-7 text-center text-balance">
        found {events.length} events
      </p> */}

      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
};

export default page;

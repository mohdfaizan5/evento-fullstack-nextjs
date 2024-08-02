import "server-only";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { prisma } from "./db";
import { capitalize } from "./utils";

// this file should be used
// added caching to the orm db function
const generateEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.event.findMany({
    // undefined means it will return all results
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6, // this will skip based on the page number
  });
  const totalCount = await prisma.event.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return { events, totalCount };
});

const generateEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.event.findUnique({ where: { slug: slug } });
  if (!event) notFound();
  return event;
});

export { generateEvents, generateEvent };

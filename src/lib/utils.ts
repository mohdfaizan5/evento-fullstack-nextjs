import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./db";
import { notFound } from "next/navigation";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const generateEvent = async (slug: string) => {
  const event = await prisma.event.findUnique({ where: { slug: slug } });
  if (!event) notFound();
  return event;
};

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const generateEvents = async (city: string, page = 1) => {
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

  return {events, totalCount};
};

export { cn, sleep, generateEvent, generateEvents, capitalize };

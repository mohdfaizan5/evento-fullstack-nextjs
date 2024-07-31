import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./db";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const generateEvent = async (slug: string) => {
  const event = await prisma.event.findUnique({ where: { slug: slug } });
  return event;
};
const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const generateEvents = async (city: string) => {
  const events = prisma.event.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: {
      date: "asc",
    },
  });
  // undefined means it will return all results
  return events;
};

export { cn, sleep, generateEvent, generateEvents, capitalize };

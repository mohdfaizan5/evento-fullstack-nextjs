import { EventProps } from "@/types/index.types";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const generateEvent = async (slug: string) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events/" + slug
  );
  const event: EventProps = await response.json();
  return event;
};
const generateEvents = async (city: string) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" + city
  );
  const events: EventProps[] = await response.json();
  return events;
};

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export { cn, sleep, generateEvent, generateEvents , capitalize};

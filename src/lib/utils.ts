import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export { cn, sleep, capitalize };

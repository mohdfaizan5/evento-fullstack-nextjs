import SearchField from "@/components/search-field";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh">
      <h1>Find events around you</h1>
      <p className="font-light text-xl opacity-75 sm:text-2xl pb-7 text-center text-balance">
        Browse more than{" "}
        <span className="font-semibold underline text-accent">
          10000+ events
        </span>{" "}
        around you
      </p>
      <SearchField />
      <div className="flex gap-x-3 items-center">
        <p>Popular:</p>
        <span className="space-x-1 font-light underline text-sm ">
          <Link href={"/events/austin"}>Austin</Link>
          <Link href={"/events/seattle"}>Seattle</Link>
        </span>
      </div>
    </main>
  );
};

export default page;

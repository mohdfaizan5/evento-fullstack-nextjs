"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchField = () => {
  // Making a contolled input field
  const [search, setSearch] = useState("");

  const router = useRouter()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    router.push(`/events/${search}`);
  };

  return (
    <form className="w-full sm:w-[580px] pb-2 " onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-12 px-6 bg-white/[7%] rounded-md outline-none focus:ring ring-accent/50 focus:bg-white/10"
        placeholder="Search for events"
      />
    </form>
  );
};

export default SearchField;

import Skeleton from "@/components/skeleton";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-wrap py-10 items-center justify-center gap-10">
        {Array.from({ length: 8 }).map((i) => (
          <SkeletonCard />
        ))}
      </div>
    </>
  );
};

export default Loading;

const SkeletonCard = () => {
  return (
    <div className="flex flex-col w-60 items-center justify-center gap-2">
      <Skeleton className="h-52" />
      <Skeleton className="h-10" />
      <Skeleton className="h-5" />
    </div>
  );
};

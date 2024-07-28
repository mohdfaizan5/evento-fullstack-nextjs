import Skeleton from "@/components/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-[70vh]">
      <div className="flex gap-4">
        <Skeleton className="size-48 " />
        <div className="flex items-center gap-3 flex-col">
          {/* <Skeleton className="h-52" /> */}
          <Skeleton className="h-20 w-72" />
          <Skeleton className="h-5" />
        </div>
      </div>
      <Skeleton className="h-10 w-[500px]"/>
      <Skeleton className="w-72"/>
      
    </div>
  );
};

export default loading;

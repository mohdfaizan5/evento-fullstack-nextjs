import { cn } from "@/lib/utils";
import React from "react";

interface SkeletonProps {
  className?: string;
}
const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "bg-white/50 rounded-md w-[250px] h-3 animate-pulse",
        className
      )}
    ></div>
  );
};

export default Skeleton;

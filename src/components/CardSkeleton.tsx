"use client";
import React from "react";
import { Skeleton } from "./ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="border-0">
      <Skeleton className="h-[320px] w-[304px]" />
      <div className="flex flex-col space-y-2 mt-5">
        <Skeleton className="h-5 w-[304px]" />
        <Skeleton className="h-5 w-[304px]" />
        <Skeleton className="h-5 w-[304px]" />
        <Skeleton className="h-5 w-[304px]" />
      </div>
    </div>
  );
};

export default CardSkeleton;

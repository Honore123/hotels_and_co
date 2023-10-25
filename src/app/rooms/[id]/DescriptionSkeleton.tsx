"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DescriptionSkeleton = () => {
  return (
    <div className="px-20 grid grid-cols-3 gap-x-10 pb-12">
      <div className="col-span-2 pt-10">
        <Skeleton className="flex-1 h-10 w-[880px] rounded-l-xl" />
        <Skeleton className="flex-1 h-10 w-[880px] rounded-l-xl mt-5" />
        <div className="pt-8">
          <Skeleton className="h-5 w-[304px]" />
        </div>
      </div>
      <div className="col-span-1 pt-10">
        <Skeleton className="flex-1 h-10 w-[880px] rounded-l-xl" />
      </div>
    </div>
  );
};

export default DescriptionSkeleton;

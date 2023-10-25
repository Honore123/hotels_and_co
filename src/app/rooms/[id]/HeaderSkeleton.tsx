"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const HeaderSkeleton = () => {
  return (
    <div className="px-20 h-20 pt-6 mb-2">
      <Skeleton className="h-7 w-full" />
      <div className="flex mt-1 justify-between pt-2">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-7 w-[467px]" />
        </div>
        <div className="flex space-x-2 justify-end">
          <Skeleton className="h-7 w-[184px]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;

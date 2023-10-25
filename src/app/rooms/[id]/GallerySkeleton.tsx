"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const GallerySkeleton = () => {
  return (
    <div className="px-20 flex space-x-4 pt-6 ">
      <Skeleton className="flex-1 h-[372px] w-[668px] rounded-l-xl" />
      <div className="flex flex-1 space-x-2">
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-[182px] w-[330px]" />
          <Skeleton className="h-[182px] w-[330px]" />
        </div>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-[182px] w-[330px] rounded-tr-xl" />
          <Skeleton className="h-[182px] w-[330px] rounded-br-xl" />
        </div>
      </div>
    </div>
  );
};

export default GallerySkeleton;

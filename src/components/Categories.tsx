"use client";

import React from "react";
import { Button } from "./ui/button";
import { ChevronRight, SlidersHorizontal, TentTree } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const Categories = () => {
  return (
    <div className="px-20 h-24 flex justify-between items-center fixed top-20 left-0 w-full z-40 bg-white">
      <div className="flex flex-1 space-x-10">
        <div className="flex flex-col items-center space-y-2 border-b-2 border-black pb-2.5 mt-3">
          <TentTree size={30} strokeWidth={1.5} />
          <Label className="text-xs">Amazing views</Label>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:border-black hover:border-b-2 pb-2.5 mt-3">
          <TentTree
            size={30}
            strokeWidth={1.5}
            className="text-gray-500 hover:text-black"
          />
          <Label className="text-xs text-gray-500 hover:text-black">
            Amazing views
          </Label>
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <Button
          variant="outline"
          size="icon"
          className="p-0 h-7 w-7 rounded-full"
        >
          <ChevronRight size={20} />
        </Button>
        <Button variant="outline" className="rounded-xl text-xs h-12">
          <SlidersHorizontal size={15} className="mr-3" />
          Filters
        </Button>
        <Button variant="outline" className="rounded-xl text-xs h-12">
          Display total before taxes
          <Switch className="ml-3" />
        </Button>
      </div>
    </div>
  );
};

export default Categories;

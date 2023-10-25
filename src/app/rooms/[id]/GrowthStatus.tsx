"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import React from "react";

const GrowthStatus = () => {
  return (
    <div className="grid grid-cols-3 w-full">
      <div className="flex flex-col space-y-2 col-span-2">
        <Label className="font-semibold">Adults</Label>
        <Label className="font-thin">Age 13+</Label>
      </div>
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="icon"
          className="p-0 h-7 w-7 rounded-full group-hover:border-black"
        >
          <Minus size={20} className="text-gray-400 group-hover:border-black" />
        </Button>
        <Label className="font-medium">0</Label>
        <Button
          variant="outline"
          size="icon"
          className="p-0 h-7 w-7 rounded-full group-hover:border-black"
        >
          <Plus size={20} className="text-gray-400 group-hover:border-black" />
        </Button>
      </div>
    </div>
  );
};

export default GrowthStatus;

"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, StarIcon } from "lucide-react";
import React from "react";
import GrowthStatus from "./GrowthStatus";
import PricingAmount from "./PricingAmount";

const ReservationForm = () => {
  return (
    <div>
      <Card className="p-6 flex flex-col space-y-5 shadow-lg">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between mb-6">
            <Label className="text-xl font-bold">
              $178 <span className="text-base font-light">night</span>
            </Label>
            <div className="flex items-center space-x-2">
              <StarIcon size={14} strokeWidth={2.7} />
              <Label className="text-sm font-bold">5.0</Label>
              <Label className="text-sm font-thin">25 reviews</Label>
            </div>
          </div>
          <form className="border border-gray-400 rounded-md">
            <div className="grid grid-cols-2 h-14">
              <div className="border-r border-gray-400 pl-2.5">
                <Label className="uppercase text-xs font-bold">Check-in</Label>
              </div>
              <div className="pl-2.5">
                <Label className="uppercase text-xs font-bold">Check-out</Label>
              </div>
            </div>
            <div className="border-t border-gray-400 h-14">
              <Popover>
                <PopoverTrigger className="flex justify-between items-center w-full h-full px-3">
                  <div className="flex flex-col space-y-1">
                    <Label className="uppercase text-xs font-bold">
                      Guests
                    </Label>
                    <Label className="font-thin">3 guests</Label>
                  </div>
                  <div>
                    <ChevronDown size={20} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="p-4 flex flex-col space-y-7 w-[370px]">
                  <GrowthStatus />
                  <GrowthStatus />
                </PopoverContent>
              </Popover>
            </div>
          </form>
          <div>
            <Button className="w-full font-medium text-base bg-rose-600">
              Reserve
            </Button>
          </div>
        </div>
        <div className="text-center">
          <Label className="font-light">You won&apos;t be charged yet</Label>
        </div>
        <div className="flex flex-col space-y-5">
          <PricingAmount />
          <PricingAmount />
          <PricingAmount />
        </div>
        <div className="pt-6 mt-6 border-t border-gray-400 flex justify-between items-center">
          <Label className="font-semibold text-base">Total before taxes</Label>
          <Label className="font-semibold text-base">$1,075</Label>
        </div>
      </Card>
    </div>
  );
};

export default ReservationForm;

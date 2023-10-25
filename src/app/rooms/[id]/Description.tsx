"use client";
import React from "react";
import HostInfo from "./HostInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HouseSummary from "./HouseSummary";
import ReservationForm from "./ReservationForm";
import { Label } from "@/components/ui/label";

const Description = ({ data }: { data: Room }) => {
  return (
    <div className="px-20 grid grid-cols-3 gap-x-10 pb-12">
      <div className="col-span-2">
        <HostInfo />
        <HouseSummary />
        <div className="pt-8">
          <Label className="text-base font-light">{data.description}</Label>
        </div>
      </div>
      <div className="col-span-1 pt-10">
        <ReservationForm />
      </div>
    </div>
  );
};

export default Description;

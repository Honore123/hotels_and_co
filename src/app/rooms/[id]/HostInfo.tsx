import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { DoorClosed } from "lucide-react";
import React from "react";

const HostInfo = () => {
  return (
    <div className="pt-10 pb-6 flex justify-between  border-b items-center">
      <div className="flex flex-col space-y-2">
        <h1 className="mt-10 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Entire villa hosted by Evy
        </h1>
        <div className="flex space-x-3">
          <Label className="font-light text-base">10 guests</Label>
          <Label className="font-light text-base">5 bedrooms</Label>
          <Label className="font-light text-base">10 beds</Label>
          <Label className="font-light text-base">5.5 baths</Label>
        </div>
      </div>
      <div>
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default HostInfo;

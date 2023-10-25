import { Label } from "@/components/ui/label";
import { CalendarX, DoorClosed, LampDesk } from "lucide-react";
import React from "react";

const HouseSummary = () => {
  return (
    <div className="flex flex-col space-y-8 py-10 border-b ">
      <div className="flex space-x-10">
        <DoorClosed size={30} />
        <div className="flex flex-col space-y-1">
          <Label className="text-base font-medium">Self check-in</Label>
          <Label className="text-sm font-light">
            You can check in with the building staff.
          </Label>
        </div>
      </div>
      <div className="flex space-x-10">
        <LampDesk size={30} />
        <div className="flex flex-col space-y-1">
          <Label className="text-base font-medium">Dedicated workspace</Label>
          <Label className="text-sm font-light">
            A common area with wifi that’s well-suited for working.
          </Label>
        </div>
      </div>
      <div className="flex space-x-10">
        <CalendarX size={30} />
        <div className="flex flex-col space-y-1">
          <Label className="text-base font-medium">
            Free cancellation for 48 hours
          </Label>
          <Label className="text-sm font-light">
            You can cancel without any charges.
          </Label>
        </div>
      </div>
    </div>
  );
};

export default HouseSummary;

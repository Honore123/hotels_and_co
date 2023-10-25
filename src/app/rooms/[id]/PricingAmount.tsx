"use client";
import { Label } from "@/components/ui/label";
import React from "react";

const PricingAmount = () => {
  return (
    <div className="flex justify-between items-center">
      <Label className="font-light text-base underline underline-offset-1 cursor-pointer">
        $178 x 5 nights
      </Label>
      <Label className="font-light">$888</Label>
    </div>
  );
};

export default PricingAmount;

"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Heart, Share, Star } from "lucide-react";
import React from "react";

const Header = ({ data }: { data: Room }) => {
  return (
    <div className="px-20 h-20 pt-6 mb-2">
      <h1 className="mt-10 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        {data.city} : Self-catering modern family home
      </h1>
      <div className="flex mt-1 justify-between">
        <div className="flex items-center space-x-2">
          <Star size={14} />
          <Label className="font-semibold">5.0</Label>
          <Label>.</Label>
          <Label className="underline font-semibold cursor-pointer">
            37 reviews
          </Label>
          <Label>.</Label>
          <Label className="underline font-semibold cursor-pointer">
            {data.city}, {data.country}
          </Label>
        </div>
        <div className="flex space-x-2 justify-end">
          <Button variant="ghost">
            <Share size={14} className="mr-2" />{" "}
            <span className="underline">Share</span>
          </Button>
          <Button variant="ghost">
            <Heart size={14} className="mr-2" />{" "}
            <span className="underline">Save</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";
import React from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Link from "next/link";
import { Globe } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  const supportItems = [
    " Help Center",
    "AirCover",
    " Anti-discrimination",
    "Disability support",
    " Cancellation options",
    " Report neighborhood concern",
  ];
  const hostingItems = [
    " Help Center",
    "AirCover",
    " Anti-discrimination",
    "Disability support",
    " Cancellation options",
    " Report neighborhood concern",
  ];
  const airbnbItems = [
    " Help Center",
    "AirCover",
    " Anti-discrimination",
    "Disability support",
    " Cancellation options",
    " Report neighborhood concern",
  ];
  return (
    <div className=" bg-gray-100">
      <div className="flex flex-col px-20">
        <div className="flex">
          <div className="flex flex-1 flex-col space-y-4 py-14">
            <Label className="text-base font-medium">Support</Label>
            {supportItems.map((item: string, index) => (
              <Link
                key={index}
                href=""
                className="p-0 mt-0 text-normal font-light text-gray-700 hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 flex-col space-y-4 py-14">
            <Label className="text-base font-medium">Support</Label>
            {hostingItems.map((item: string, index) => (
              <Link
                key={index}
                href=""
                className="p-0 mt-0 text-normal font-light text-gray-700 hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 flex-col space-y-4 py-14">
            <Label className="text-base font-medium">Support</Label>
            {airbnbItems.map((item: string, index) => (
              <Link
                key={index}
                href=""
                className="p-0 mt-0 text-normal font-light text-gray-700 hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-400 py-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <Label className="text-normal font-light text-gray-700">
              © 2023 Airbnb, Inc.
            </Label>
            <Label className="text-normal font-light text-gray-700">
              Terms
            </Label>
            <Label className="text-normal font-light text-gray-700">
              Sitemap
            </Label>
            <Label className="text-normal font-light text-gray-700">
              Privacy
            </Label>
            <Label className="text-normal font-light text-gray-700">
              Your Privacy Choices
            </Label>
          </div>
          <div className="flex space-x-4 justify-end items-center">
            <Label className="hover:underline font-semibold cursor-pointer flex items-center">
              <Globe size={20} className="mr-2" /> English(USD)
            </Label>

            <Label className=" font-semibold cursor-pointer">
              <span className="mr-1.5">$</span>
              <span className="hover:underline">USD</span>
            </Label>
            <div className="flex items-center justify-end space-x-4">
              <FacebookLogo size={20} weight="fill" />
              <TwitterLogo size={20} weight="fill" />
              <InstagramLogo size={20} weight="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

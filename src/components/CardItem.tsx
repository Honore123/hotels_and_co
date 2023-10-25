"use client";
import React from "react";
import { Label } from "./ui/label";
import Image from "next/image";
import { Router } from "next/router";
import Link from "next/link";

const CardItem = ({ data }: { data: Room }) => {
  return (
    <Link href={`/rooms/${data.id}`} className="border-0">
      <Image
        src={data.images}
        alt={data.country}
        width={304}
        height={320}
        className="rounded-lg"
      />
      <div className="flex flex-col space-y-2 mt-5">
        <Label className="text-sm">
          {data.city}, {data.country}
        </Label>
        <Label className="font-thin text-sm">Mountain and valley views</Label>
        <Label className="font-thin text-sm">5 nights . Nov 5 - 10</Label>
        <Label className="text-sm">${data.price} night</Label>
      </div>
    </Link>
  );
};

export default CardItem;

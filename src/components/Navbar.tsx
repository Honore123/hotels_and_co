"use client";
import React from "react";
import { Button } from "./ui/button";
import { Globe, Menu, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 border-b px-20 fixed top-0 left-0 w-full z-50 bg-white">
      <Link href="/" className="text-rose-600 font-bold text-2xl flex-1">
        HnR
      </Link>
      <div className="">
        <div className="h-12 flex items-center justify-between border rounded-full px-4 shadow-md">
          <label className="px-5 text-sm border-r">Anywhere</label>
          <label className="px-5 text-sm border-r">Any week</label>
          <label className="px-5 text-sm font-thin">Add guest</label>
          <Button className="rounded-full h-8 w-8 p-0">
            <Search size={15} strokeWidth={4} />
          </Button>
        </div>
      </div>
      <div className="flex space-x-2 flex-1 justify-end items-center">
        <Button variant="ghost" className="text-sm rounded-full">
          Airbnb your home
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe size={20} />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className=" outline-none">
            <Button variant="outline" className="rounded-full h-12">
              <Menu size={20} className="mr-2" />
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-60 font-light px-0 shadow-xl border-gray-100 rounded-xl"
            alignOffset={0}
            align="end"
          >
            <DropdownMenuItem className="font-medium pl-4 py-3 hover:rounded-none">
              Sign up
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-4 py-3 hover:rounded-none">
              Log in
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="pl-4 py-3 hover:rounded-none">
              Airbnb your home
            </DropdownMenuItem>
            <DropdownMenuItem className="pl-4 py-3 hover:rounded-none">
              Help center
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;

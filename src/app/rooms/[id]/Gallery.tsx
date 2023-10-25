"use client";
import Image from "next/image";
import React from "react";

const Gallery = ({ images }: { images: Room["images"] }) => {
  return (
    <div className="px-20 flex space-x-4 pt-6 ">
      <div className="flex-1 bg-[url('https://picsum.photos/560/309')] rounded-l-xl"></div>
      <div className="flex flex-1 space-x-2">
        <div className="flex flex-col space-y-2">
          <Image
            src="https://picsum.photos/560/309"
            alt="arusha"
            width={560}
            height={309}
          />
          <Image
            src="https://picsum.photos/560/309"
            alt="arusha"
            width={560}
            height={309}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Image
            src="https://picsum.photos/560/309"
            alt="arusha"
            width={560}
            height={309}
            className="rounded-tr-xl"
          />
          <Image
            src="https://picsum.photos/560/309"
            alt="arusha"
            width={560}
            height={309}
            className="rounded-br-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

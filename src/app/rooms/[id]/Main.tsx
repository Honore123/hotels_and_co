"use client";
import React from "react";
import Gallery from "./Gallery";
import Description from "./Description";
import useGetRoom from "@/hooks/useGetRoom";
import Header from "./Header";
import HeaderSkeleton from "./HeaderSkeleton";
import GallerySkeleton from "./GallerySkeleton";
import DescriptionSkeleton from "./DescriptionSkeleton";

const Main = ({ id }: { id: Room["id"] }) => {
  const { data, isLoading }: { data: Room | undefined; isLoading: boolean } =
    useGetRoom(id);
  return (
    <div>
      {data ? (
        <>
          <Header data={data} />
          <Gallery images={data.images} />
          <Description data={data} />
        </>
      ) : (
        ""
      )}
      {isLoading && (
        <>
          <HeaderSkeleton />
          <GallerySkeleton />
          <DescriptionSkeleton />
        </>
      )}
    </div>
  );
};

export default Main;

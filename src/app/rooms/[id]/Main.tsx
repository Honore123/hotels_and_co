"use client";
import React from "react";
import Gallery from "./Gallery";
import Description from "./Description";
import useGetRoom from "@/hooks/useGetRoom";
import Header from "./Header";

const Main = ({ id }: { id: Room["id"] }) => {
  const { data }: { data: Room | undefined } = useGetRoom(id);
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
    </div>
  );
};

export default Main;

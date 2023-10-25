"use client";
import CardItem from "@/components/CardItem";
import CardSkeleton from "@/components/CardSkeleton";
import useGetAllRooms from "@/hooks/useGetAllRooms";
import React, { useEffect } from "react";

const Main = () => {
  const { data, isLoading }: { data: Room[] | undefined; isLoading: boolean } =
    useGetAllRooms();

  return (
    <div className="px-20 grid grid-cols-4 gap-x-2 gap-y-10 mt-48 justify-between mb-12">
      {data
        ? data.map((item: Room) => <CardItem key={item.id} data={item} />)
        : ""}
      {isLoading && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
    </div>
  );
};

export default Main;

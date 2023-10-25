import CardItem from "@/components/CardItem";
import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Main from "./Main";

export default function Home() {
  return (
    <div className="">
      <Categories />
      <Main />
    </div>
  );
}

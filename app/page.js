import Image from "next/image";
import Link from "next/link";
import Carousel from "./components/carousel";
import Footer from "./components/footers";
import Cards from "./components/card";



export default function Home() {
  return (
     <div>
      <Carousel />
      <Cards />
    </div>
  );
}
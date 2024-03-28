import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import mask from "../assests/mask.webp";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between p-10 pt-24 lg:px-24 lg:pt-32 bg-gray-200 dark:bg-darkbg">
        <div className="bg-white"></div>
        <div className="w-full flex items-center justify-center">
          <h1 className="concert-one text-3xl  z-[1]">
            Protect Your Self From Frauds online
          </h1>
          <Image
            className="absolute"
            src={mask}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div></div>
      </div>
      <Footer/>
    </>
  );
}

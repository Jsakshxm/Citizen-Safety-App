import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import mask from "../assests/mask.webp";
import Footer from "@/components/Footer/Footer";
import spam from "../assests/BlogFeaturedImage.gif";
import Link from "next/link";
import urlScanner from "../assests/url-icon.svg"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center p-10 pt-24 lg:px-24 lg:pt-32 bg-gray-200 dark:bg-darkbg relative">
        <Image
          className="absolute top-20 left-0"
          src={mask}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="concert-one text-3xl  z-[1] text-white">
            Protect Your Self From Frauds online
          </h1>
          <p className="text-lg text-gray-600 max-w-[700px]  z-[1] ">
            We are here to help you detect scams, verify SMS headers and
            templates, manage Bitcoin wallets, report fraud, and educate you
            about privacy.
          </p>

          <div className="flex justify-center mt-8  z-[1] ">
            <Link href="/Education">
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Start Exploring
              </div>
            </Link>
          </div>
        </div>
        <Image
          className="hidden lg:block absolute top-20 right-0 pt-32 pr-24"
          src={spam}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="bg absolute bottom-0"></div>
      </div>
      <div className="bg-violet-500 flex flex-wrap px-4 lg:px-24 justify-center items-center">
        <div className="bg-gray-100 p-10 border m-10 rounded-md text-center">
          <h1>URL Scanner</h1>
          <p>Try now</p>
          <Image
          className="absolute translate-y-6 "
      src={urlScanner}
      width={100}
      height={100}
      alt="urlScanner"
    />

        </div>
        <div className="bg-gray-100 p-10 border m-10 rounded-md">
          URL Scanner
        </div>
        <div className="bg-gray-100 p-10 border m-10 rounded-md">
          URL Scanner
        </div>
        <div className="bg-gray-100 p-10 border m-10 rounded-md">
          URL Scanner
        </div>
      </div>
      <Footer />
    </>
  );
}

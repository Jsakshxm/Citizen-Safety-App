import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import mask from "../assests/mask.webp";
import Footer from "@/components/Footer/Footer";
import spam from "../assests/BlogFeaturedImage.gif";
import Link from "next/link";
import urlScanner from "../assests/url-icon.svg";
import Sms from "../assests/mobile-sms-messages-icon.svg";
import Cryptowallet from "../assests/crypto-wallet-bitcoin-icon.svg";
import Education from "../assests/story-svgrepo-com.svg";
import Fraudsvg from "../assests/fraud_detection.svg";

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
      <div className="bg-[#0066ff] flex flex-wrap px-4 lg:px-24 justify-center items-center">
        <div className="bg-gray-100 p-10 border m-10 rounded-md text-center">
          <h1>URL Scanner</h1>
          <Link href="/SmsAnalysis">
          <p className="py-2">
          Explore now <i class="fa-solid fa-chevron-right animation"></i>
          </p>
          </Link>
          <Image
            className="absolute translate-y-6 "
            src={urlScanner}
            width={100}
            height={100}
            alt="urlScanner"
          />
        </div>
        <div className="bg-gray-100 p-10 border m-10 rounded-md text-center relative">
          <h1>Sms Analysis</h1>
          <Link href="/SmsAnalysis">
          <p className="py-2">
          Explore now <i class="fa-solid fa-chevron-right animation"></i>
          </p>
          </Link>
          <Image
            className="absolute translate-y-0 left-1/2 -translate-x-1/2"
            src={Sms}
            width={75}
            height={75}
            alt="urlScanner"
          />
        </div>

        <div className="bg-gray-100 p-10 border m-10 rounded-md text-center relative">
          <h1>Cryptocurrency Wallet checker</h1>
          <Link href="/CryptoWalletChecker">
          <p className="py-2">
          Explore now<i class="fa-solid fa-chevron-right animation"></i>
          </p>
          </Link>
          <Image
            className="absolute translate-y-0 left-1/2 -translate-x-1/2"
            src={Cryptowallet}
            width={75}
            height={75}
            alt="urlScanner"
          />
        </div>

        <div className="bg-gray-100 p-10 border m-10 rounded-md text-center relative">
          <h1>Fraud Reporting</h1>
          <Link href="/FraudReporting">
          <p className="py-2">
          Explore now <i class="fa-solid fa-chevron-right animation"></i>
          </p>
          </Link>
          <Image
            className="absolute translate-y-0 left-1/2 -translate-x-1/2"
            src={Fraudsvg}
            width={75}
            height={75}
            alt="Cryptowallet"
          />
        </div>
        <div className="bg-gray-100 p-10 border m-10 rounded-md text-center relative">
          <h1>Blogs and Stories</h1>
          <Link href="/Education">
          <p className="py-2">
            Explore now <i class="fa-solid fa-chevron-right animation"></i>
          </p>
          </Link>
          <Image
            className="absolute translate-y-0 left-1/2 -translate-x-1/2"
            src={Education}
            width={75}
            height={75}
            alt="Education"
          />
        </div>
      </div>
      <div className="bg2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center items-center px-4 lg:px-24 bg-darkbg gap-4">
        <div className="bg-gray-100 p-10 rounded-md max-w-[500px] ">
        <h1 className="font-concert-one text-xl">Url Detection Backend Features</h1>
        <p>Spam Detection via :</p>
        <p>Number of Scripts running and popups</p>
        <p>Grammatical mistakes</p>
        <p>Extreme url redirects in huge quantity</p>
        <p>No About us page and agressive ads</p>
        </div>
        <div className="bg-gray-100 p-10 rounded-md max-w-[500px] h-full">
        <h1 className="font-concert-one text-xl "> Crypto Wallet detection Features</h1>
        <p>Wallet Balance</p>
        <p>Last Wallet Transaction</p>
        <p>Wallet Spam Reports</p>
        </div>
      </div>
      

      <Footer />
    </>
  );
}

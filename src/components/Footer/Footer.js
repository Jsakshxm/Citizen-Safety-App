import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-white text-lg font-semibold mb-4">
              Edugaurd Online Fraud Detection and Education
            </h2>
            <p className="text-gray-400">
            Empowering users with knowledge to detect and prevent online fraud. Stay vigilant, stay secure. 
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@edugard.com</p>
            <p className="text-gray-400">Phone: 7304826900</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/UrlSearch" className="hover:text-gray-200">
                UrlSearch
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/SmsAnalysis" className="hover:text-gray-200">
                SmsAnalysis
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/CryptoWalletChecker" className="hover:text-gray-200">
                CryptoWalletChecker
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Education" className="hover:text-gray-200">
                Education
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/FraudReporting" className="hover:text-gray-200">
                FraudReporting
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-8">
                <p className="text-center text-gray-400">© 2022 Online Fraud Detection and Education. All rights reserved.</p>
            </div> */}


      </div>
      <div className="bg-gray-800 py-4 text-white text-center mt-5">
          <div className="container mx-auto">
            &copy; {new Date().getFullYear()} Citizen Safety App. All rights
            reserved.
          </div>
        </div>
    </footer>
  );
};

export default Footer;

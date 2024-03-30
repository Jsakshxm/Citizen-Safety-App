import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed flex w-full justify-between px-10 lg:px-24 py-4 lg:py-8  dark:bg-slate-800 dark:text-white bg-gradient-to-r  from-40% from-slate-800 via-slate-700 to-60% to-slate-800 bg-opacity-50 z-[20]">
      <div className="p-2">Citizen Safety App</div>
      <ul className="hidden lg:flex dark:text-slate-401 space-x-5  text-white ">
        <li className="hover:text-yellow-300 p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-emerald-300 p-2">
          {" "}
          <Link href="/UrlSearch">Url search</Link>
        </li>
        <li className="hover:text-emerald-300 p-2">
          <Link href="/SmsAnalysis">SmsAnalysis</Link>
        </li>
        {/* <li className="">
            <Link href="/FraudDetection">FraudDetection</Link>
          </li> */}
        <li className="hover:text-emerald-300 p-2">
          <Link href="/CryptoWalletChecker">Crypto Wallets</Link>
        </li>
        <li className="p-2 hover:text-emerald-300">
          <Link href="/Education">Education</Link>
        </li>
        <li className="hover:text-red-300 p-2">
          <Link href="/FraudReporting">Fraud Reporting</Link>
        </li>
      </ul>
      <div>
        <button className="dark:text-slate-400 text-white p-2 hover:text-white"><Link href="/Login">Login</Link></button>
        <i className="fa-solid fa-bars"></i>
      </div>

    </header>
  );
};

export default Navbar;

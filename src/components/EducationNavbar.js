import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
      <header className="flex w-full justify-between px-10 lg:px-24 py-2 lg:py-8  dark:bg-slate-800 dark:text-white bg-gradient-to-r  from-40% from-slate-800 via-slate-700 to-60% to-slate-800 bg-opacity-50">
        <div>Edu Gaurd</div>
        <ul className="flex space-x-5 text-white dark:text-slate-401 ">
          <li className="">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="">
            {" "}
            <Link href="/UrlSearch">Iteractive Guide</Link>
          </li>
          <li className="">
            <Link href="/SmsAnalysis">Cyber St</Link>
          </li>
           <li className="">
            <Link href="/FraudDetection">Community</Link>
          </li>
          {/* <li className="">Bitcoin Wallets</li> */}
          <li className="">Fraud Reporting</li>
          <li className="">Education</li>
        </ul>
    </header>
  );
};

export default Navbar;

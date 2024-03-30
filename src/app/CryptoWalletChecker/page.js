"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
// import { useWallet } from 'use-wallet'
// import Crypto from "../../assests/Crypto.mp4"
import { CovalentClient } from "@covalenthq/client-sdk";
import Image from "next/image";
import supabase from "../supabase";

import { useState } from "react";
import { useEffect } from "react";
const page = () => {
  const [address, setaddress] = useState("");
  const [details, setdetails] = useState([]);
  const [reports, setreports] = useState([]);

  useEffect(() => {}, []);
  const fetchData = async () => {
    try {
      console.log(address);
      const client = new CovalentClient("cqt_rQ933Q374rPQjkc9xX8Kq4HVkJyH");
      const resp = await client.BalanceService.getTokenBalancesForWalletAddress(
        "btc-mainnet",
        address,
        { quoteCurrency: "INR" }
      );
      console.log(resp.data);
      setdetails(resp.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    let { data: CryptoSpamReport, error } = await supabase
      .from("CryptoSpamReport")
      .select("*")
      .ilike("Wallet_Address", address);
    if (CryptoSpamReport) {
      setreports(CryptoSpamReport);
    } else {
      console.log(error);
    }
    // const response = await fetch(
    //   `https://api.covalenthq.com/v1/56/address/${address}/balances_v2/?key=ckey_9b2b8b3c4');
    // const data = await response.json();
    // console.log(data);
    // setdetails(data.data.items);
    //   const ApiServices = async () => {
    //     const client = new CovalentClient("cqt_rQ933Q374rPQjkc9xX8Kq4HVkJyH");
    //     const resp = await client.BalanceService.getTokenBalancesForWalletAddress("eth-mainnet", "demo.eth");
    //     console.log(resp.data);
    //     console.log("clicked");
    //     setdetails(resp.data.items);
    // }
  };
  return (
    <>
      <Navbar></Navbar>

      {/* <video  loop id="myVideo" autoplay autoPlay muted autoPlay={true}>
        <source src="/Crypto.mp4" type="video/mp4" />
      </video> */}

      <div className="min-h-screen bg-[#06061e] pt-40 relative">
        <video
          className="fixed right-0 top-0 min-w-full min-h-full "
          muted
          loop
          autoPlay={true}
        >
          <source src="/Crypto.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative ml-4 lg:ml-24">
          <input
            type="text"
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            className="fixed p-2 w-[300px] lg:w-[500px] rounded-md border mt-30 hover:border-blue-500 hover:shadow-blue-500 active:border-blue-500 hover:shadow-sm border-2"
            placeholder="Enter Wallet Address"
          />
          <button
            onClick={fetchData}
            type="submit"
            className="left-[320px] lg:left-[600px] fixed p-2 w-[50px] lg:w-[100px] rounded-md mt-30 border-white hover:border-white hover:shadow-blue-500 hover:shadow-sm border-2 bg-blue-500 hover:bg-blue-600"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="fixed left-0 top-42 grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10 p-4 lg:p-10 mt-4 ml-14 z-100 text-white">
          <div className="bg-[#0f172a] p-4 rounded-md">
            {details.map((detail, index) => (
              <div key={index}>
                <Image
                  src={detail.logo_url}
                  alt="crypto coin"
                  width={200}
                  height={200}
                />
                <h1 className="">
                  {detail.contract_name} - {detail.contract_ticker_symbol}
                </h1>
                {/* <h1 className="">{detail.balance}</h1> */}
                <h1 className="">Current Balance:{detail.quote}</h1>
                <h1>
                  {detail.is_spam ? "spam" : "No spam"} reports found in last
                  transaction.
                </h1>
                {/* <h1>{detail.last_transferred_at}</h1> */}
                {/* <h1>{detail.balance}</h1> */}
                {/* <h1>{detail.balance_24h}</h1> */}
              </div>
            ))}
            {reports.map((report, index) => (
              <h1 key={index}>{report.Report_Message? report.Report_Message+" previous report found":""}</h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

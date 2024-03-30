"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const Page = () => {
  const [whoisdata, setWhoisData] = useState({});
  const [website, setWebsite] = useState("");
  const currentYear = new Date().getFullYear();

  const fetchData = async () => {
    console.log("fetching data");
    const url = `https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=${website}&format=json&_forceRefresh=0`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bb77807181msh92335fc6279548ap1e1f01jsnc531ef0a85cc",
        "X-RapidAPI-Host": "zozor54-whois-lookup-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse JSON response
      console.log(result);
      setWhoisData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateWebsiteAge = () => {
    if (whoisdata.created) {
      const creationYear = parseInt(whoisdata.created.substring(0, 4));
      return currentYear - creationYear;
    } else {
      return null;
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-10 pt-24 lg:px-24 lg:pt-32 bg-gray-200 dark:bg-darkbg">
        <div className="w-full flex">
          <input
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
            type="text"
            placeholder="Enter your Url"
            name=""
            id=""
            className="p-2 rounded-md mx-2 grow"
          />
          <button
            onClick={fetchData}
            className="bg-blue-500 text-white p-2 rounded-md "
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <ul className="text-white font-concert-one">
          <li>Website Age: {calculateWebsiteAge()} years</li>
          <li>Created: {whoisdata.created ? whoisdata.created : "N/A"}</li>
          <li>Name: {whoisdata.name ? whoisdata.name : "N/A"}</li>
          <li>
            Registrar: {whoisdata.registrar ? whoisdata.registrar.name : "N/A"}
          </li>
          <li>Updated: {whoisdata.updated ? whoisdata.updated : "N/A"}</li>
          <li>
            Registrant: {whoisdata.registrant ? whoisdata.registrant : "N/A"}
          </li>
          {/* <li>
            <details>
              <summary>More info</summary>
              <p>{JSON.stringify(whoisdata)}</p>
            </details>
          </li> */}
        </ul>
      </main>
    </>
  );
};

export default Page;

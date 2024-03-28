"use client";
import React from "react";
import { useEffect, useState } from "react";
import supabase from "../../app/supabase"; // Assuming supabase.js is available in the app directory
// import { data } from "autoprefixer";
import Navbar from "../../components/Navbar/Navbar";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery !== "") {
        let { data, error } = await supabase
          .from("SmsHeaders")
          .select("*")
          .ilike("Header", `%${searchQuery}%`);
        if (error) {
          console.log("Error fetching data:", error);
        } else {
          setSearchResults(data);
        }
      }
    };
    fetchData();
    if (searchQuery === "") {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(()=>{

  },[]);

  return (
    <>
      <Navbar></Navbar>
      <div className=" min-h-screen w-full p-10 pt-24 lg:px-24 lg:pt-32 bg-gray-200 dark:bg-darkbg flex-wrap">
      <h1 className="text-2xl font-bold text-center text-white concert-one text-3xl mb-10">Sms Analysis</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-[300px] lg:w-[500px] ">
          <input
            name=""
            className="p-2 rounded-md mx-2 w-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Header"
          />

          <ul className="h-[185px] text-white overflow-hidden px-2">
            {searchQuery &&
              searchResults.map((result) => (
                <div key={result.id} className=" border rounded-md flex p-2 m-1 hover:bg-white hover:text-black cursor-pointer">
                    <div className="pr-2">{result.Header}</div>
                    <div>{result["Principal Entity Name"]}</div>
                </div>

              ))}
          </ul>
        </div>

        <div className="">
            <textarea className="p-2 rounded-md mx-2 w-full h-[100px]" name="" id="" placeholder="Sms Analysis"/>
        </div>
        </div>


      </div>





    </>
  );
};

export default page;

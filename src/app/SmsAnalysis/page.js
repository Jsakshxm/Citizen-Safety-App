"use client";
import React from "react";
import { useEffect, useState } from "react";
import supabase from "../../app/supabase"; // Assuming supabase.js is available in the app directory
// import { data } from "autoprefixer";
import Navbar from "../../components/Navbar/Navbar";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchResults2, setSearchResults2] = useState([]);


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

  const handlesubmit=()=>{
    const fetchData = async () => {
      if (searchQuery2 !== "") {
        let { data, error } = await supabase
          .from("SmsTemplate")
          .select("*")
          .ilike("SmsMessages", `%${searchQuery2}%`);
        if (error) {
          console.log("Error fetching data:", error);
        } else {
          setSearchResults2(data);
        }
      }
    };
    fetchData();
    if (searchQuery2 === "") {
      setSearchResults2([]);
    }
  }

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
            <textarea onChange={(e)=>{setSearchQuery2(e.target.value);}} className="p-2 rounded-md mx-2 w-full h-[100px]" name="" id="" placeholder="Paste the text for Sms Analysis"/>
            <button onClick={handlesubmit} className="bg-blue-500 hover:bg-blue-700 rounded-3xl p-2 px-12 text-white text-lg ml-2" type="submit">Submit</button>

            <ul className="h-[185px] text-white overflow-hidden px-2">
            {searchQuery2 &&
              searchResults2.map((result) => (
                <div key={result.id} className=" border rounded-md flex p-2 m-1 hover:bg-white hover:text-black cursor-pointer">
                    <div className="pr-2">{result.Analysis}</div>
                    {/* <div>{result["Principal Entity Name"]}</div> */}
                </div>
              ))}
          </ul>
        </div>
        </div>


      </div>





    </>
  );
};

export default page;

"use client";
import React from "react";
import { useEffect, useState } from "react";
import supabase from "../../app/supabase";
// import { data } from "autoprefixer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchResults2, setSearchResults2] = useState([]);
  const [searchQuery3, setSearchQuery3] = useState("");
  const [searchResults3, setSearchResults3] = useState([]);
  const headers = {
    'value': '0.0.0.0',
    'value_type': 'ip',
    'type': 'phone'
  };


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
          if (data == null || data == undefined || data == "") {
            setSearchResults2([{ Analysis: "No Analysis Found" }]);
        }
           console.log(data);
        }
      }
    };
    fetchData();
    if (searchQuery2 === "") {
      setSearchResults2([]);
    }
  }

  // const handlenumberlookup=()=>{
  //   const fetchData = async () => {
  //       try {
  //         // const response = await axios.get("https://www.ipqualityscore.com/api/json/allowlist/create/kx7QKc8tUvzvHvLerImZOgvFsywPnzQ5",{ headers: headers });

  //         const response = await axios.get("https://www.ipqualityscore.com/api/json/phone/kx7QKc8tUvzvHvLerImZOgvFsywPnzQ5/"+searchQuery3,{ headers: headers });
  //         setSearchResults3(response.data);
  //         if (response.data == null || response.data == undefined || response.data == "") {
  //           setSearchResults3(["No Analysis Found"]);
  //       }
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //   };
  //   if (searchQuery3 === "") {
  //     setSearchResults3([]);
  //   }
  //   else{
  //     fetchData();
  //   }
  // }

  const handlenumberlookup = async () => {
    if (searchQuery3 === "") {
      setSearchResults3([]);
      return;
    }
  
    try {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.ipqualityscore.com/api/json/phone?key=kx7QKc8tUvzvHvLerImZOgvFsywPnzQ5&phone=${searchQuery3}`);
      setSearchResults3(response.data);
      console.log(searchResults3);
      console.log(typeof searchResults3);
      if (!response.data || Object.keys(response.data).length === 0) {
        setSearchResults3(["No Analysis Found"]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

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
                <div  key={result.id} className={` border rounded-md flex p-2 m-1 hover:bg-white hover:text-black cursor-pointer ${result.Analysis==="Fraud"?"text-red-300": result.Analysis==="Potential Risk" ?"text-yellow-300": result.Analysis==="No Risk"?"text-emerald-300":""}`}>
                    <div className={`pr-2 `}>{result.Analysis}</div>
                    {/* <div>{result["Principal Entity Name"]}</div> */}
                </div>
              ))}
          </ul>
        </div>

        <div className="w-[300px] lg:w-[500px]">
            <input type="tel" onChange={(e)=>{setSearchQuery3(e.target.value);}} className="p-2 rounded-md mx-2 w-full" name="" id="" placeholder="Enter Mobile Number"/>
            <button onClick={handlenumberlookup} className="bg-blue-500 hover:bg-blue-700 rounded-3xl p-2 px-12 text-white text-lg m-2" type="submit">Submit</button>

            <ul className="h-[185px] text-white overflow-hidden px-2 bg-black">
            {false &&
              searchResults3.Array.map((result) => (
                <div key={result.id} className=" border rounded-md flex p-2 m-1 hover:bg-white hover:text-black cursor-pointer">
                    {/* <p className="pr-2">{result}</p> */}
                    {/* <p className="pr-2">{result.spammer}</p>
                    <p className="pr-2">{result.carrier}</p>
                    <p className="pr-2">{result.line_type}</p> */}
                    {/* <div>{result["Principal Entity Name"]}</div> */}
                </div>
              ))}

<ul className="h-[185px] text-white overflow-hidden px-2 bg-black">
  {Object.keys(searchResults3).length === 0 ? (
    <div>No Analysis Found</div>
  ) : (
    Object.entries(searchResults3).map(([key, value]) => (
      <div key={key} className=" border rounded-md flex p-2 m-1 hover:bg-white hover:text-black cursor-pointer">
        <p className="pr-2">{key}: {value}</p>
      </div>
    ))
  )}
</ul>

{searchResults3 && searchResults3.results && Array.isArray(searchResults3.results) ? (
    <ul className="h-[185px] text-white overflow-hidden px-2 bg-black">
        {searchResults3.results.map((result) => (
            <div key={result.id} className=" border rounded-md flex p-2 m-1 hover:bg-white hover:text-black cursor-pointer">
                <p className="pr-2">{result}</p>
                {/* <p className="pr-2">{result.spammer}</p> */}
            </div>
        ))}
    </ul>
) : (
    // Handle missing results (e.g., "No search results found")
    <></>
)}

          </ul>
          
        </div>

        <div className="text-white">
          <h2 className="text-lg">Sms Classification is done as:</h2>
          <ul>
            <li className="p-2 "> <i className="fa-solid fa-circle text-emerald-300 px-2 text-md"></i>No Risk</li>
            <li  className="p-2"> <i className="fa-solid fa-circle text-yellow-300 px-2 text-md"></i>Potential Risk</li>
            <li  className="p-2"> <i className="fa-solid fa-circle text-red-300 px-2 text-md"></i>Fraud</li>
          </ul>
        </div>
        </div>
      </div>





    </>
  );
};

export default page;

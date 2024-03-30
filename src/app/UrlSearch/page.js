import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  const fetchdata = async()=>{
    console.log("fetching data");
    try{
      const response = await axios.get("");
      setSearchResults3(response.data);
      if (response.data == null || response.data == undefined || response.data == "") {
        setSearchResults3(["No Analysis Found"]);
      }
    }
    catch{

    }
  }
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-24 lg:px-24 lg:pt-32 bg-gray-200 dark:bg-darkbg">
    <div className="w-full flex">
    <input type="text" placeholder="Enter your Url" name="" id="" className="p-2 rounded-md mx-2 grow"/>
    <button onClick="" className="bg-blue-500 text-white p-2 rounded-md "><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </main>
  </>
  )
}

export default page

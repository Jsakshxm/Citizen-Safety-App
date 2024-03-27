import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-24 lg:px-24 lg:pt-32 bg-gray-200 dark:bg-darkbg">
    <div className="w-full flex">
    <input type="text" placeholder="Enter your Url" name="" id="" className="p-2 rounded-md mx-2 grow"/>
    <button className="bg-blue-500 text-white p-2 rounded-md"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </main>
  </>
  )
}

export default page

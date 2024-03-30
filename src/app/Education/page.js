import React from "react";
import Navbar from "@/components/EducationNavbar";
import Topics from "@/components/Topics";
import LatestUpdate from "@/components/LatestUpdate";
import CyberCard from "@/components/CyberCard";
import CyberHub from "@/components/CyberHub";
import ReadStories from "@/components/ReadStories";

const page = () => {
  return (
    <div className="bg-darkbg text-white">
      <Navbar classname="" />
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <Topics /> 
        <LatestUpdate></LatestUpdate>
        <CyberHub></CyberHub>
        <ReadStories></ReadStories>
      </div>{" "}

    </div>
  );
};

export default page;

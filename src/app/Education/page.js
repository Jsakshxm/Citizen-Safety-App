import React from "react";
import Navbar from "@/components/EducationNavbar";
import Topics from "@/components/Topics";
import LatestUpdate from "@/components/LatestUpdate";

const page = () => {
  return (
    <div>
      <Navbar classname="" />
      <div className="flex ">
        <Topics /> <LatestUpdate></LatestUpdate>
      </div>{" "}
    </div>
  );
};

export default page;

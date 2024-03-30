import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import supabase from "../supabase";

const page = () => {
  const [mobileNumber, setmobileNumber] = useState("");
  const [MobileReport, setMobileReport] = useState("");
  const [Cryptowallet,setCryptowallet]=useState("");
  const [E,]=useState("");
  handlemoblereport= async(e)=>{
    e.preventDefault();
    console.log("clicked");

const { data, error } = await supabase
.from('MobileReport')
.insert([
  { MobileNumber: mobileNumber, MobileReport: MobileReport },
])
.select()
if(error){
  console.log(error);
  alert("Error in Reporting")
}else{
  console.log(data);
  alert("Reported Successfully")
}
  }
  return (
    <>
      <Navbar />
      <div className="bg-darkbg h-screen w-full">
        <div className="pt-40">
          <div className="flex font-concert-one justify-center items-center h-1/2">
            <div className=" text-5xl text-white font-bold">
              Fraud Reporting
            </div>
          </div>
          <div className="flex font-concert-one justify-center items-center h-1/2">
            <div className="text-2xl text-white font-semibold">
              Report any frauds here
            </div>
          </div>
          <div className="flex justify-evenly p-4 lg:p-24">
            <div className=" flex gap-4 flex-col min-w-96 bg-gray-200 p-4 rounded-md">
              <h1 className="font-concert-one text-xl">
                Mobile Number Reporting
              </h1>
              <input
              onChange={(e) => {setmobileNumber(e.target.value);}}
                className="p-2 shadow-lg"
                placeholder="Enter Mobile number here"
                type="text"
                name=""
                id=""
              />
              <textarea
              onChange={(e) => {setMobileReport(e.target.value);} }
                className="p-2 shadow-lg"
                placeholder="Enter Your report here"
                type="text"
                name=""
                id=""
              />
              <button onClick={handlemoblereport} className="submit bg-blue-500 p-4 p shadow-lg hover:bg-blue-600">Submit</button>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default page;

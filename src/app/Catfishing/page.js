import React from "react";
import Navbar from "@/components/EducationNavbar";
import Topics from "@/components/Topics";
import Link from "next/link";

const page = () => {

    const topicsData = [
        { guide: "Phishing 101", story: "John's Mistake", forum: "Ask Questions", achievement: true },
        { guide: "Secure Passwords", story: "The Hacker Attack", forum: "Share Experiences", achievement: false },
        { guide: "Public Wi-Fi", story: "The Coffee Shop Incident", forum: "Discuss Tips", achievement: true },
        { guide: "Social Engineering", story: "The Phone Call", forum: "Share Stories", achievement: false },
        { guide: "Malware Protection", story: "The Infected File", forum: "Ask for Help", achievement: true },
        { guide: "Data Encryption", story: "The Stolen Laptop", forum: "Share Advice", achievement: false },
        { guide: "Catfishing", story: "The Stolen Laptop", forum: "Share Advice", achievement: false },
      ];
  return (
    <div className="bg-darkbg text-white min-h-screen">
      <Navbar></Navbar>
      <div className="pt-4 p-x10 lg:px-48 text-lg grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-1  lg:col-span-2 ">
          <h1 className="text-center  concert-one text-3xl mb-10">
            Catfishing
          </h1>
          <p>
            {" "}
            <strong>What it is:</strong> It’s reported that 1 in 5 relationships
            begin online. Unfortunately, scammers take this as an opportunity to
            target people who are looking for love.
          </p>

          <p>
            Catfishing takes place when a scammer creates a fake identity for
            the purpose of starting a relationship. They form a connection with
            you until you ‘fall for them’, then they use this relationship to
            scam you out of money.
          </p>

          <p>
            An extreme example of this is Netflix’s recent documentary on The
            Tinder Swindler, who wooed women online and conned millions of
            dollars out of them.
          </p>

          <p>
            <strong>How to spot it:</strong> If this person is too good to be
            true (Tall, handsome, filthy rich, heir to a business empire, and
            flies exclusively in private jets — you get the gist), be on guard.
          </p>

          <p>
            Pay attention to any inconsistencies in their profile, and observe
            if they’re rushing to move the relationship along. It’s also a huge
            red flag if they won’t meet you in person.
          </p>
        </div>

        <div className="border-l">
            <h3 className="pl-10  mb-10 concert-one text-2xl">Other Blogs</h3>
            <ul className="pl-10 space-y-2 ">
            {topicsData.map((topic,index)=>(
                <li key={index}><Link href={topic.guide}>{topic.guide}</Link></li>
            ))}
            </ul>
            {/* {topicsData.guide} */}

        </div>
      </div>
    </div>
  );
};

export default page;

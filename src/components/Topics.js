import React from 'react';
import Link from 'next/link';

const Topics = () => {
  // Example data for the table, which can be replaced or extended.
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
    <div className='w-[690px] m-2 p-2 grow'>
      <h1 className='text-3xl font-normal'>Explore Security Topics</h1>
      <table className='w-full p-2 m-2 mt-4 text-left'>
        <thead>
          <tr>
            <th>Guide</th>
            <th>Story</th>
            <th>Forum</th>
            <th>Achievement</th>
          </tr>
        </thead>
        <tbody>
          {topicsData.map((topic, index) => (
            <tr key={index} className="p-2 m-2 ">
              <td><Link href={topic.guide}>{topic.guide}</Link></td>
              <td>{topic.story}</td>
              <td>{topic.forum}</td>
              <td>{topic.achievement ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Topics;

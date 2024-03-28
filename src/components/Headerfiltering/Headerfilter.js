"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import supabase  from '../../app/supabase'; // Assuming supabase.js is available in the app directory
import { data } from 'autoprefixer';

const Headerfilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const { data, error } = await supabase
      //   .from('SmsHeaders')
      //   .select('Principal Entity Name')
      //   .filter('Header', 'ilike', `%${searchQuery}%`);

      if (searchQuery !== '') {

let { data, error } = await supabase
.from('SmsHeaders')
.select('*')
.ilike('Header', `%${searchQuery}%`)
      if (error) {
        console.log('Error fetching data:', error);
      } else {
        setSearchResults(data);
      }
    };
  }
    fetchData();
  }, [searchQuery]);

  return (
    <div >
      <input
        name="" className="p-2 rounded-md mx-2 grow"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by Header"
      />

      <ul className='text-white h-[100px] overflow-hidden'>
        {searchResults.map((result) => (
          <li key={result.id}>{result[ 'Header','Principal Entity Name']}</li>
        ))}
      </ul>
    </div>
  );
};


export default Headerfilter;

import React from 'react';

const ReadStories = () => {
  return (
    <div className='p-2 m-2 shadow-xl w-72 h-96 bg-gray-100 bg-white'>
      <img src="" alt="" className='' /> {/* Placeholder for story image */}
      <h2 className='mt-2 text-xl font-semibold text-black¸'>Avoiding Cyber Scams</h2> {/* Story title */}
      <p className='mt-1 text-gray-600'>Author: CyberGuard Team</p> {/* Author information */}
      <p className='mt-1 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in semper odio. Donec eget lectus non nisl lobortis ultricies. Sed quis magna sit amet purus vestibulum varius. Mauris efficitur, ex et eleifend suscipit, nunc libero cursus nunc, vel posuere tortor odio sit amet metus.</p> {/* Story content */}
      <a href="#" className='block mt-2 text-blue-600 hover:underline'>Read More</a> {/* Link to read more */}
    </div>
  );
};

export default ReadStories;
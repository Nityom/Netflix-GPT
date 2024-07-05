import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[10%] w-screen aspect-video px-12 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 w-1/4  text-lg'>{overview}</p>
      <div>
        <button className='bg-gray-500 text-black px-12 text-lg p-4   rounded-lg'> Play</button>
        <button className='bg-gray-500 text-white px-12 text-lg p-4  mx-2 bg-opacity-50  rounded-lg'>More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;

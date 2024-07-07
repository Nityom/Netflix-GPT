import React, { useRef } from 'react';
import openai from '../utils/openai';

const GptSearchBar = () => {
    const searchText = useRef(null);

const handleGptSearchClick =async()=>{
console.log(searchText.current.value);
// make api call for movie results

const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value + ". only give name of 5 movies, comma separated like the example result given ahead. Example Result: Gadar,Sholay,Don,Agneepath,Bahubali, Koi Mil Gaya ";



const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
  
  console.log(gptResults.choices); 

}



  return (
    <div className="flex justify-center items-center w-full pt-[4%] bg-black">
      <form className="flex justify-center items-center w-full max-w-lg" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText}
          type="text"
          className="p-4 m-4 w-3/4 rounded-lg"
          placeholder="What would you like to watch today?"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

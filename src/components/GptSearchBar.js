import React from 'react'
import {lang} from "../utils/languageConstants"
import { useRef } from 'react'
// import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovieResult } from '../utils/gptSlice'
import { OPENAI_KEY } from '../utils/constants'
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {

  const genAI = new GoogleGenerativeAI (OPENAI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"})
const dispatch = useDispatch()
  const searchText= useRef(null)
  const searchMovieTMDB= async(movie)=>{
const data = await fetch ("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
const json=  await data.json()

return json.results;
  }



  const handleGptSearchClick = async()=>{
    console.log(searchText.current.value) 

    const gptQuery = "Act as a movie recommendation system and suggest some movie for the query"+ searchText.current.value + "only give me name of 5 movies, comma seperated like the example result given ahead.Example result : OMG2, Gadar, DON, Jawan etc"
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  //   const gptResults = await openai.chat.completions.create({
  //   messages: [{ role: 'user', content: gptQuery }],
  //   model: 'gpt-3.5-turbo',
  // });
  const gptMovies = text.split(', ').map(movie => movie.trim());
// const gptMovies = gptResults.choices[0]?.message?.content.split(",");
// const gptMovies = text;
const data = gptMovies.map(movie=> searchMovieTMDB(movie))
const tmdbResults =  await Promise.all(data)
dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
console.log(tmdbResults)

  }
  return (
    <div className=" pt-[50%] md:pt-[10%]">
    <form  className=" h-20 flex justify-center items-center bg-black " onSubmit={(e)=> e.preventDefault()}>
        <input className="px-4 py-3 w-1/2 rounded-l-md outline-none" type="text" ref={searchText} id="" placeholder={lang.en.gptSearchPlaceholder}/>
        <button className="bg-red-700 text-white px-4 py-3 rounded-r-md" onClick={handleGptSearchClick}>{lang.en.search}</button>
    </form>
    </div>
  )
}

export default GptSearchBar
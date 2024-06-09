import React, { useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef } from 'react';

const Gemini = () => {

    const searchText= useRef(null)
        const API_KEY = "AIzaSyDqjeKJ0lIlnSoTamI1BBBVkkeoXLUTbqc";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"})

    async function run() {
        // const prompt = "Write a story about a magic backpack."
        const gptQuery = "Act as a movie recommendation system and suggest some movie for the query"+ searchText.current.value + "only give me name of 5 movies, comma seperated like the example result given ahead.Example result : OMG2, Gadar, DON, Jawan etc"

        const result = await model.generateContent(gptQuery);
        const response = await result.response;
        const text = response.text();
        console.log(text);
      }
      
    //   useEffect(()=>{
    //     run();
    //   },[searchText])
  return (
    <div>Gemini

        <input type="text" ref={searchText}/>
        <button onClick={()=> run()}>Search</button>
    </div>
  )
}

export default Gemini
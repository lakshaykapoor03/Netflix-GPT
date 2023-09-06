import React from 'react'
import {lang} from "../utils/languageConstants"

const GptSearchBar = () => {
  return (
    <div className="pt-[10%]  ">
    <form  className="bg-black h-20 flex justify-center items-center bg-opacity-80" onSubmit={(e)=> e.preventDefault()}>
        <input className="px-4 py-3 w-1/2 rounded-l-md outline-none" type="text" name="" id="" placeholder={lang.hindi.gptSearchPlaceholder}/>
        <button className="bg-red-700 text-white px-4 py-3 rounded-r-md">{lang.hindi.search}</button>
    </form>
    </div>
  )
}

export default GptSearchBar
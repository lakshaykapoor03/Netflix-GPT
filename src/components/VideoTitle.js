import React from 'react'

const VideoTitle = ({overview, originalTitle}) => {
  return (
    <div className=" pt-20 md:pt-36 px-12 absolute  text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className=" mt-[5%] text-2xl md:text-6xl font-bold">{originalTitle}</h1>
        <p className=" hidden md:block md:w-1/4 py-6">{overview}</p>
        <div className="my-4 flex ">
            <button className="bg-gray-500 text-white  md:p-4 px-2 md:px-12 mr-4 rounded md:text-xl bg-opacity-50 hover:bg-opacity-80">▶️Play</button><button className="bg-gray-500 text-white p-4 px-2 md:px-12 mr-4 rounded md:text-xl bg-opacity-50 hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'; 
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="h-screen">
    <div className="text-center p-10">
        <h2 className="text-5xl lg:text-7xl py-2 text-teal-600 font-medium">Balaji</h2>
        <h3 className="text-2xl py-2 md:text-3xl lg:text-5xl">Frontend Developer</h3>

    </div>
    <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
    </div>
    <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96 ">
    <Image  src="/img/balaji.png" fill className="ml-10 object-cover"  />

    </div>


    </div>
    
  )
}

export default Hero
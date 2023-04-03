import Link from 'next/link'
import React from 'react'; 
import Image from 'next/image';


const Services = () => {
  return (
    <div>
        <div className="text-left md:text-center lg:text-center">
            <h3 className="text-3xl py-1 md:text-4xl lg:text-5xl font-medium">About Me: </h3>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-lg lg:text-xl">
            Hi, I am Balaji I Studied Bachelor of computer application in <Link href="https://kaasck.com/" target="_blank" className="text-teal-500 hover:underline">Krishna Arts and Science College</Link>
            
                 
                
            </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Image src="/design.png" width={100} height={100} />
                <h3 className=" text-3xl md:text-4xl lg:text-5xl font-medium pt-8 pb-2 ">Skills</h3>
                <p className="py-2 text-md md:text-lg lg:text-xl">Creating elegant designs suited for your design theory</p>
                <div>
            <p className="text-gray-800 py-1">HTML</p>
            <p className="text-gray-800 py-1">CSS</p>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">Java</p>

            </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default Services
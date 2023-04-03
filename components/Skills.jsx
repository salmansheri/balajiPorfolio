import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="h-auto my-10" id="skills">
    <h1 className="text-center my-10 text-3xl font-medium md:text-4xl lg:text-5xl">Skills</h1>
    <div className="lg:flex gap-5">
        <div className=" rounded-lg shadow-md p-5 mb-10">
            <div>
                <Image className="w-full"  src="/img/java.webp" width={300} height={100} />
            </div>
            <h2 className="text-2xl font-black my-5 text-center font-poppins md:text-3xl lg:text-4xl" >Java</h2>
            <p className="md:line-clamp-4">Java is a popular programming language used to develop mobile apps, web apps, desktop apps, games and much more1. It is a high level, robust, object-oriented and secure programming language2. Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 19952.</p>
        </div>
       
        <div className=" rounded-lg shadow-md p-5 mb-10">
            <div>
                <Image className="w-full"  src="/img/html.webp" width={300} height={100} />
            </div>
            <h2 className="text-2xl font-black my-5 text-center font-poppins md:text-3xl lg:text-4xl" >HTML</h2>
            <p className="md:line-clamp-4">HTML stands for Hyper Text Markup Language1. HTML is the standard markup language for creating Web pages1. HTML describes the structure of a Web page1. HTML consists of a series of elements1. HTML elements tell the browser how to display the content1. HTML elements label pieces of content such as “this is a heading”, “this is a paragraph”, “this is a link.</p>
        </div>
       
        <div className=" rounded-lg shadow-md p-5 mb-10">
            <div>
                <Image className="w-full"  src="/img/css.webp" width={300} height={100} />
            </div>
            <h2 className="text-2xl font-black my-5 text-center font-poppins md:text-3xl lg:text-4xl" >CSS</h2>
            <p className="md:line-clamp-4">CSS stands for Cascading Style Sheets1. CSS is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features1. CSS is a rule-based language</p>
        </div>
       
        <div className=" rounded-lg shadow-md p-5 mb-10">
            <div>
                <Image className="w-full"  src="/img/js.webp" width={300} height={100} />
            </div>
            <h2 className="text-2xl font-black my-5 text-center font-poppins md:text-3xl lg:text-4xl" >Javascript</h2>
            <p className="md:line-clamp-4">JavaScript is a programming language that is used primarily for creating interactive web pages1. It is one of the three languages that all web developers must learn, along with HTML and CSS1. JavaScript can be used to create dynamic effects on web pages such as pop-up windows, drop-down menus, and interactive form</p>
        </div>
       
       
        

    </div>
       
    </div>
  )
}

export default Skills
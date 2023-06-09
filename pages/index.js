import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'; 
import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero"; 
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import { useState } from 'react';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "class" : ""}>
      <Head>
        <title>Balaji Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-white dark:bg-black px-10 md:px-20 lg:px-40">
       <section className=" min-h-screen">
       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
       <Hero />
      <Skills />
       <Portfolio />
       
       

       </section>
      </div>
    </div>
  )
}

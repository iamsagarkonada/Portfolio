import React from 'react'
import {HiArrowRight} from "react-icons/hi"
import hero from '../assets/hero.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
            Hello, and welcome to my Portfolio! I'm Sagar, a dedicated and enthusiastic student with a deep passion for web development, particularly in working with React.js. From an early age, I discovered my fascination with technology and programming, and that passion has grown exponentially over the years.
            </p>
            <Link to="portfolio" smooth duration={600} className= 'group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                Portfolio 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowRight className='ml-1'/>
                </span>                
            </Link>
        </div>
        <div>
            <img src={hero} alt="my profile"/>
        </div>
      </div>
    </div>
  )
}

export default Home

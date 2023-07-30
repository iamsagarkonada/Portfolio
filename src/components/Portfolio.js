import React from 'react'
import quicknotes from '../assets/portfolio/quicknotes.jpg'
import newsinsighs from '../assets/portfolio/newsinsights.jpg'
import port from '../assets/portfolio/port.jpg'

const Portfolio = () => {
  const portfolio=[
    {
      id:1,
      src:quicknotes,
      link:"https://github.com/iamsagarkonada/QuickNotes-Frontend",
      demo: "https://dapper-seahorse-0e9b34.netlify.app/"
    },
    {
      id:2,
      src:newsinsighs,
      link:"https://github.com/iamsagarkonada/News-Insights-React",
      demo:"https://64c51bb6b41ae17249adea6d--roaring-monstera-fe6c97.netlify.app/"
    },
    {
      id:3,
      src:port,
      link:"https://github.com/iamsagarkonada/Portfolio",
      demo:"https://sagarportfolio.onrender.com/"
    }
  ]
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' name="portfolio">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolio.map(({id,src,link,demo})=>(
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <a href={demo} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
              <a href={link} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
            </div>
          </div>

          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio

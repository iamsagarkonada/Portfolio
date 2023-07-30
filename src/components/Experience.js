import React from 'react'
import css from '../assets/experience/css.png'
import html from '../assets/experience/html.png'
import javascript from '../assets/experience/javascript.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import github from '../assets/experience/github.png'


const Experience = () => {
    const experience=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:"JAVASCRIPT",
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:"REACT",
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:tailwind,
            title:"TAILWIND CSS",
            style:'shadow-sky-500'
        },
        {
            id:6,
            src:github,
            title:"GITHUB",
            style:'shadow-gray-500'
        },
        
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className=''>
            <p className='text-4xl font-bold border-gray-500 border-b-4 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                experience.map(({id,src,title,style})=>(
                    <div key={id}className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
                <img src={src}alt='' className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
                ))
            }
            
        </div>
        </div>
    </div>
  )
}

export default Experience

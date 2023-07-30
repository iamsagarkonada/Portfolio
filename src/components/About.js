import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

        </div>
        <p className='text-xl mt-20'>
        Hello, I'm Sagar, a passionate and dedicated web developer with a strong focus on React.js and front-end web development. With a profound love for technology and an insatiable curiosity, my journey in web development began at an early age, and it has been an exciting and fulfilling ride ever since.
        Throughout my academic pursuits, I quickly realized that web development was my true calling. The power of React.js and its ability to create dynamic and interactive user interfaces captured my imagination, propelling me to delve deeper into this fascinating realm.
        </p>
        <br/>
        <p className='text-xl'>
        Looking forward, I am eager to embark on a fulfilling career in web development. I am seeking opportunities to contribute my skills and expertise to a forward-thinking organization that shares my passion for React.js and values continuous improvement. I am excited to be part of a team that is committed to pushing the boundaries of web development and creating meaningful digital experiences.        </p>
      </div>
    </div>
  )
}

export default About

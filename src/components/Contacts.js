import React from 'react'

const Contacts = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white' name="contact">
      <div className='flex flex-col p-4 justify-center max-w-lg  mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold border-gray-500 border-b-4 p-2 inline'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/f366c8f7-3457-40a2-acf0-fbaa74a571a0" method="POST" className='flex flex-col w-full md:w-1/2'>
                <input type='text' name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                <input type='text' name='email' placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                <textarea placeholder="Enter your Message" name='message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-105 duration-200'>Let's Talk</button>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts

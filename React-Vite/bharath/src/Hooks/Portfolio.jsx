import React from 'react'
import image from '../../public/avatar.jpg'

const Portfolio = () => {
  return (
    <div>
      <nav className='bg-blue-300'>
        <ul className='flex p-2'>
            <li className='m-2 hover:bg-green-200 hover:text-red-500 hover:border-2 border:bg-green-500 border-2 border-green-400 text-xxl'><a href="" className='size-49'>About Me</a></li>
            <li className='m-2 hover:bg-green-200 hover:text-red-500 hover:border-2'><a href="">Education</a></li>
            <li className='m-2 hover:bg-green-200 hover:text-red-500 hover:border-2'><a href=""> Skills</a></li>
            <li className='m-2 hover:bg-green-200 hover:text-red-500 hover:border-2'><a href="">Cerrtificates</a></li>

        </ul>
      </nav>
      <img src={image} alt="" className='w-30 rounded-full' />
    </div>
  )
}

export default Portfolio

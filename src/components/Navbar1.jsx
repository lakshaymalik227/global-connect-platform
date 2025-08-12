import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <nav className='w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>
      <Link to ={'/'} className='flex justify-between'>
        <div className='flex gap-0 item-center cursor-pointer'>
          <h3 className='text-green-600 font-bold text-3xl'>Global Connect</h3>
          <img src={'https://gncipl.online/wp-content/uploads/2025/08/logo.png'} alt="GNCIPL LOGO" className='w-9 h-9'></img>
        </div>
      </Link>

      <div className='flex box-border md:gap-4 gap-2 justify-center items-center'>
        <Link to={'/signUp'} className='md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer'>Join Now</Link>
        <Link to ={'/Login'} className='px-4 py-2 box-border border-1 text-blue-800 border-blue-800 rounded-3xl text-xl hover:bg-blue-50 cursor-pointer'> Sign in</Link>
      </div>
    </nav>
  )
}

export default Navbar1


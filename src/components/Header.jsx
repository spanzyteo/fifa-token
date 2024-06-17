import React from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { SiCoinmarketcap } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import logo from '../assets/fifa-logo.png'
import fifa from '../assets/fifa-word.png'

const Header = () => {
  return (
    <div className="px-10 md:px-20 py-2 flex flex-row justify-between items-center bg-yellow-400 ">
      <div className='flex items-center'>
        <img className=' h-20 w-20' src={logo} alt="logo" />
        <img className='h-12 md:16 w-25 ml-10 md:ml-0' src={fifa} alt="" />
      </div>
      <div className="md:flex flex-row hidden gap-8">
        <h1 className="font-sans uppercase font-bold text-2xl">
          About
        </h1>
        <h1 className="font-sans uppercase font-bold text-2xl">
          Roadmap
        </h1>
        <h1 className="font-sans uppercase font-bold text-2xl">
          Lorem
        </h1>
      </div>
      <div className="block md:hidden">
        <IoMenuSharp className="h-12 w-12 cursor-pointer hover:opacity-60" />
      </div>
      <div className="md:flex hidden first-letter:flex-row gap-4">
        <FaXTwitter className="h-5 w-5 cursor-pointer" />
        <SiCoinmarketcap className="h-5 w-5 cursor-pointer" />
        <FaTelegramPlane className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  )
}

export default Header

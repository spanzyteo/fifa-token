import React from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { SiCoinmarketcap } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import logo from '../assets/fifa-logo.png'
import fifa from '../assets/fifa-word.png'

const Header = () => {
  return (
    <div className="px-2 md:px-10 py-2 flex flex-row justify-between items-center bg-yellow-400 ">
      <div className="flex items-center">
        <img className=" h-16 sm:h-20 w-16 md:w-20" src={logo} alt="logo" />
        <h1 className="font-sans ml-0 sm:ml-4 uppercase font-bold text-4xl">FIFA</h1>
      </div>
      <div className="md:flex flex-row hidden gap-8">
        <h1 className="font-sans uppercase font-bold text-2xl">About</h1>
        <h1 className="font-sans uppercase font-bold text-2xl">Roadmap</h1>
        <h1 className="font-sans uppercase font-bold text-2xl">Lorem</h1>
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

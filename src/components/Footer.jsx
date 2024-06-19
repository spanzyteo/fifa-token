import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiCoinmarketcap } from 'react-icons/si'
import { IoIosArrowDropup } from 'react-icons/io'

const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      })
    }
  return (
    <div className="px-2 md:px-10 py-2 flex flex-row justify-between items-center bg-yellow-400 mt-10">
      <div className="flex items-center"></div>
      <div className="flex gap-4">
        <FaXTwitter className="h-5 w-5 cursor-pointer" />
        <SiCoinmarketcap className="h-5 w-5 cursor-pointer" />
        <FaTelegramPlane className="h-5 w-5 cursor-pointer" />
      </div>
      <div>
        <IoIosArrowDropup onClick={scrollToTop} className='h-8 w-8 cursor-pointer hover:opacity-75'/>
      </div>
    </div>
  )
}

export default Footer

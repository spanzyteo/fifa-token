import React from 'react'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiCoinmarketcap } from 'react-icons/si'
import { IoIosArrowDropup } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="px-2 md:px-10 py-2 flex flex-row justify-between items-center bg-yellow-400 mt-10">
      <div className="flex items-center flex-col font-semibold text-xs md:text-lg">
        <h1>2024 $FIFA</h1>
        <h1> support@fifastreamdegen.com</h1>
      </div>
      <div className="flex gap-2 md:gap-4">
        <Link to={'https://x.com/home'} target="_blank">
          <FaXTwitter className="h-5 w-5 cursor-pointer" />
        </Link>
        <SiCoinmarketcap className="h-5 w-5 cursor-pointer" />
        <Link to={'https://t.me/+u_8-Xf9DmQU3ZTJk'} target="_blank">
          <FaTelegramPlane className="h-5 w-5 cursor-pointer" />
        </Link>
        <Link
          to={
            'https://www.facebook.com/profile.php?id=61561003928862&mibextid=ZbWKwL'
          }
          target="_blank"
        >
          <FaFacebookF className="h-4 w-4 cursor-pointer" />
        </Link>
      </div>
      <div>
        <IoIosArrowDropup
          onClick={scrollToTop}
          className="h-8 w-8 cursor-pointer hover:opacity-75"
        />
      </div>
    </div>
  )
}

export default Footer

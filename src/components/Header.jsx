import React from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { SiCoinmarketcap } from 'react-icons/si'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import logo from '../assets/fifa-logo.png'
import { useSection } from '../Context'
import { Link } from 'react-router-dom'

const Header = () => {
  const { state, dispatch } = useSection()

  const sectionRef = state.sectionRef
  const sectionTwoRef = state.sectionTwoRef
  const sidebar = state.sideBarOpen

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDE_BAR' })
  }

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL'})
  }

  const handleScrollToSection = () => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScrollToSectionTwo = () => {
    if (sectionTwoRef && sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="px-2 md:px-10 py-2 flex flex-row justify-between items-center bg-yellow-400 ">
      <div className="flex items-center">
        <img className=" h-16 lg:h-20 w-16 lg:w-20" src={logo} alt="logo" />
        <Link to="/">
          <h1 className="font-sans ml-0 sm:ml-4 uppercase font-bold text-4xl">
            FIFA
          </h1>
        </Link>
      </div>
      <div className="lg:flex flex-row hidden gap-8 items-center">
        <h1
          className="font-sans uppercase font-bold text-2xl cursor-pointer hover:opacity-75"
          onClick={handleScrollToSection}
        >
          About
        </h1>
        <h1
          className="font-sans uppercase font-bold text-2xl cursor-pointer hover:opacity-75"
          onClick={handleScrollToSectionTwo}
        >
          Roadmap
        </h1>
          <h1
            onClick={() => {
              openModal()
            }}
            className="font-sans uppercase font-bold text-2xl cursor-pointer hover:opacity-75 border-2 p-2 border-black "
          >
            Buy now
          </h1>
      </div>
      {!sidebar && (
        <div className="block lg:hidden">
          <IoMenuSharp
            className="h-12 w-12 cursor-pointer hover:opacity-60"
            onClick={() => {
              openSidebar()
            }}
          />
        </div>
      )}
      <div className="lg:flex hidden first-letter:flex-row gap-4">
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
    </div>
  )
}

export default Header

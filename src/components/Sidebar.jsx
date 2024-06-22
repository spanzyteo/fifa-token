import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaXTwitter } from 'react-icons/fa6'
import { SiCoinmarketcap } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { useSection } from '../Context'

const Sidebar = () => {
  const { state, dispatch } = useSection()
  const sectionRef = state.sectionRef
  const sectionTwoRef = state.sectionTwoRef
  const sidebar = state.sideBarOpen

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' })
  }

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDE_BAR' })
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
    <>
      <AnimatePresence>
        {sidebar && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute flex h-[250px] w-[90%] mx-auto bg-black right-0 left-0 top-[4%] border border-white justify-between"
          >
            <div className="flex ">
              <div className="flex flex-col ml-4 mt-4 gap-2">
                <h1 className="font-sans uppercase font-bold text-4xl text-white">
                  fifa
                </h1>
                <h1
                  className="font-sans uppercase font-semibold text-2xl cursor-pointer hover:opacity-75 text-white mt-4"
                  onClick={handleScrollToSection}
                >
                  About
                </h1>
                <h1
                  className="font-sans uppercase font-semibold text-2xl cursor-pointer hover:opacity-75 text-white"
                  onClick={handleScrollToSectionTwo}
                >
                  Roadmap
                </h1>
                <h1
                  onClick={() => {
                    openModal()
                    closeSidebar()
                  }}
                  className="font-sans uppercase font-semibold text-2xl cursor-pointer hover:opacity-75 text-white border-2 p-1"
                >
                  Buy now
                </h1>
                <div className="flex mt-3 first-letter:flex-row gap-4">
                  <Link to={'https://x.com/home'} target="_blank">
                    <FaXTwitter className="h-4 w-4 text-white cursor-pointer" />
                  </Link>
                  <SiCoinmarketcap className="h-4 w-4 text-white  cursor-pointer" />
                  <Link to={'https://t.me/+u_8-Xf9DmQU3ZTJk'} target="_blank">
                    <FaTelegramPlane className="h-4 w-4 text-white cursor-pointer" />
                  </Link>
                  <Link
                    to={
                      'https://www.facebook.com/profile.php?id=61561003928862&mibextid=ZbWKwL'
                    }
                    target="_blank"
                  >
                    <FaFacebookF className="h-4 w-4 text-white cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-[4%]">
              <MdOutlineCancel
                className="text-white h-8 w-8 mt-4"
                onClick={() => {
                  closeSidebar()
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar

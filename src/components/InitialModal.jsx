import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineCancel } from 'react-icons/md'
import fifa30 from '../assets/fifa-30.png'

const InitialModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false) // Close the modal when the cancel button is clicked
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => document.body.classList.remove('no-scroll')
  }, [showModal])

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-80 z-10 text-white"
          >
            <div className="flex flex-col items-center relative">
              <div className="h-[35px] w-[35px] absolute top-0 right-0">
                <MdOutlineCancel
                  onClick={handleClose}
                  className="h-full w-full cursor-pointer"
                />
              </div>
              <div className="md:h-[450px] md:w-[450px] h-[350px]">
                <img src={fifa30} alt="fifa-30" className="h-full w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default InitialModal

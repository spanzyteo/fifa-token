import { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import sol from '../assets/sol.png'
import usdt from '../assets/usdt.png'
import usdc from '../assets/usdc.png'
import { useSection } from '../Context'

const Modal = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USDC')
  const {state, dispatch} = useSection()
  const modal = state.modalOPen

    useEffect(() => {
      if (modal) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      // Cleanup function to remove the class when the component unmounts
      return () => {
        document.body.classList.remove('no-scroll')
      }
    }, [modal])

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const currencyImages = {
    USDC: usdc,
    USDT: usdt,
    SOL: sol,
  }

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed flex h-[550px] lg:w-[500px] w-[95%] bg-black border mx-auto my-auto z-20 rounded-lg flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className=" text-right mr-[5%]">
                <MdOutlineCancel
                  onClick={() => {
                    closeModal()
                  }}
                  className="text-white h-8 w-8 mt-4 inline-block align-top cursor-pointer"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-6">
                <div className="">
                  <h1 className="text-white uppercase font-semibold md:text-3xl text-2xl">
                    Countdown Timer
                  </h1>
                </div>
                <div className="flex flex-row mt-4 md:gap-4 gap-2">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row md:gap-2 gap-[2px] ">
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                    </div>
                    <div className=" mt-2">
                      <h1 className="text-white">Days</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row md:gap-2 gap-[2px] ">
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                    </div>
                    <div className=" mt-2">
                      <h1 className="text-white">Hours</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row md:gap-2 gap-[2px] ">
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                    </div>
                    <div className=" mt-2">
                      <h1 className="text-white">Minutes</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row md:gap-2 gap-[2px] ">
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                      <div className="bg-yellow-400 h-[40px] md:h-[65px] w-[30px] md:w-[50px] rounded-sm flex items-center justify-center">
                        <h1 className="font-bold text-xl md:text-3xl">0</h1>
                      </div>
                    </div>
                    <div className=" mt-2">
                      <h1 className="text-white">Seconds</h1>
                    </div>
                  </div>
                </div>
              </div>
              <form className="mt-10 ml-[10%]">
                <div>
                  <h1 className="text-white">Address</h1>
                  <input
                    type="text"
                    className=" border border-white bg-transparent text-white h-[40px] w-[90%] mt-1 rounded-md pl-2"
                  />
                </div>
                <div className="relative">
                  <h1>Select coin</h1>
                  <img
                    src={currencyImages[selectedCurrency]}
                    alt={`${selectedCurrency} icon`}
                    className="absolute left-3 top-[67%] transform -translate-y-1/2 w-6 h-6"
                  />
                  <select
                    id="currency"
                    name="currency"
                    className="block appearance-none w-[90%] bg-transparent border border-white px-10 py-2 pr-8 rounded leading-tight h-[40px] text-white"
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                  >
                    <option value="USDC" className="bg-black">
                      USDC
                    </option>
                    <option value="USDT" className="bg-black">
                      USDT
                    </option>
                    <option value="SOL" className="bg-black">
                      SOL
                    </option>
                  </select>
                </div>
                <div className="mt-4">
                  <h1 className="text-white">Amount</h1>
                  <input
                    type="number"
                    className=" border border-white bg-transparent text-white h-[40px] w-[90%] mt-1 rounded-md pl-2"
                  />
                </div>
                <div className="text-right mt-8 md:mt-2 mr-[10%]">
                  <button
                    className="text-black bg-yellow-400 p-3 px-4 rounded-lg font-semibold text-lg hover:opacity-80 active:opacity-70"
                    onSubmit={handleSubmit}
                  >
                    Get Tokens
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal

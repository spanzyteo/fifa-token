import { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { useSection } from '../Context'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import sol from '../assets/sol.png'
import usdt from '../assets/usdt.png'
import usdc from '../assets/usdc.png'
import logo from '../assets/fifa-logo.png'
import binance from '../assets/binance.png'

const Modal = () => {
  const [progress, setProgress] = useState(419184)
  const { state, dispatch } = useSection()
  const [solValue, setSolValue] = useState(0)
  const [fifaValue, setFifaValue] = useState(0)
  const modal = state.modalOPen

  const containerWidth = 80
  const max = 700000
  const percentage = (progress / max) * containerWidth

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

  const handleChange = (e) => {
    setSolValue(e.target.value)
  }

  const handleFifaChange = (e) => {
    setFifaValue(e.target.value)
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
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
              className="fixed flex h-[600px] lg:w-[500px] w-[95%] bg-black border mx-auto my-auto z-20 rounded-lg flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-row  justify-between">
                <div>
                  <img
                    src={logo}
                    alt="fifa-logo"
                    className="h-[120px] w-[120px] mt-[-3rem] ml-[-0.5rem]"
                  />
                </div>
                <div className=" text-right mr-[4%]">
                  <MdOutlineCancel
                    onClick={() => {
                      closeModal()
                    }}
                    className="text-white h-8 w-8 mt-2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="text-white flex items-center justify-center gap-4 mt-[-2.5rem] uppercase font-bold text-lg ml-4">
                <div>Buy</div>
                <div>Fifa</div>
                <div>Token</div>
              </div>
              <div className="flex flex-row text-yellow-400 gap-1 text-[0.8rem] items-center justify-center ml-4 font-bold">
                <div>LISTINGS</div>
                <div>ON</div>
                <div>
                  <img
                    src={binance}
                    alt="binance"
                    className="h-[20px] w-[20px]"
                  />
                </div>
                <div>BINANCE.</div>
                <div className="text-blue-400 beeping">coinbase</div>
              </div>
              <div className=" h-[150px] w-[90%]  bg-slate-900 mx-auto rounded-2xl mt-1">
                <h1 className=" text-slate-300 mt-4 ml-8 font-bold text-[0.9rem]">
                  USD raised
                </h1>
                <div className="flex flex-row ml-8 gap-2 items-center mt-1">
                  <h1 className="text-yellow-400 font-bold text-xl">
                    {progress.toLocaleString()}
                  </h1>
                  <h1 className="text-slate-300 font-semibold">/$700,000</h1>
                </div>
                <div className="flex items-center ml-8 text-slate-300 gap-1 font-semibold mt-2">
                  <div>$994,184</div>
                  <div>of</div>
                  <div>$7,000,000</div>
                </div>
                <div
                  className="mx-auto"
                  style={{ width: `${containerWidth}%` }}
                >
                  <div
                    className=" flex items-center h-[10px] mx-auto mt-6 bg-slate-500"
                    style={{ width: '100%' }}
                  >
                    <motion.div
                      style={{
                        width: `${percentage}%`,
                        height: '100%',
                        backgroundColor: 'yellow',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ backgroundPosition: '0 0' }}
                        animate={{ backgroundPosition: '200% 0' }}
                        transition={{
                          duration: 4,
                          ease: 'linear',
                          repeat: Infinity,
                        }}
                        style={{
                          width: '200%',
                          height: '100%',
                          backgroundImage:
                            'linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 75%, transparent 75%, transparent)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4 gap-4">
                <div className="flex flex-col items-center">
                  <h1 className=" text-yellow-400 font-bold text-xl">100</h1>
                  <h1 className="text-white font-semibold">days</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className=" text-yellow-400 font-bold text-xl">3</h1>
                  <h1 className="text-white font-semibold">hours</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className=" text-yellow-400 font-bold text-xl">32</h1>
                  <h1 className="text-white font-semibold">mins</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className=" text-yellow-400 font-bold text-xl">27</h1>
                  <h1 className="text-white font-semibold">secs</h1>
                </div>
              </div>
              <div className="relative mt-4">
                <div>
                  <img
                    src={sol}
                    alt="sol"
                    className="h-[20px] w-[20px] absolute top-[25%] left-[7%]"
                  />
                </div>
                <div>
                  <select
                    id="currency"
                    name="currency"
                    className="block appearance-none w-[90%] mx-auto bg-transparent border border-slate-700 px-10 py-2 pr-8 rounded-xl leading-tight h-[40px] text-white"
                  >
                    <option value="" className="bg-black">
                      SOL
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between text-slate-300 text-[0.7rem] mx-8 mt-4 font-bold">
                <h1>You pay:</h1>
                <h1 className="mr-8">You Receive:</h1>
              </div>
              <div className=" flex  items-center h-[60px] w-[90%] border border-slate-700 mx-auto rounded-2xl mt-2">
                <div className="flex items-center h-[100%] w-[100%] border-r-2 border-slate-700">
                  <div className="relative">
                    <img
                      src={sol}
                      alt={`sol-icon`}
                      className="absolute left-5 md:left-6 top-[50%] transform -translate-y-1/2 w-5 h-5"
                    />
                    <MdOutlineKeyboardArrowRight className="text-white absolute h-[30px] w-[30px] top-[16%] left-12" />
                    <select
                      id="currency"
                      name="currency"
                      className="block appearance-none w-[20%] bg-slate-900 px-10 py-2 pr-8 rounded-xl leading-tight h-[45px] text-white ml-3"
                    ></select>
                  </div>
                  <input
                    type="number"
                    value={solValue}
                    className="h-[40px] w-[35%] ml-2 bg-transparent border border-slate-700 focus:border-slate-700 focus:outline-none text-white rounded-lg pl-2 input"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <img
                      src={logo}
                      alt="logo"
                      className="h-[50px] w-[50px] ml-1"
                    />
                  </div>
                  <input
                    type="number"
                    value={fifaValue}
                    className="h-[40px] w-[35%] ml-4 bg-transparent border border-slate-700 focus:border-slate-700 focus:outline-none text-white rounded-lg pl-2 input"
                    onChange={handleFifaChange}
                  />
                </div>
              </div>
              <div className="flex flex-col text-white text-[0.7rem] font-semibold w-[90%] mx-auto mt-2">
                <div>1 FIFA = $0.OO25</div>
                <div className="flex items-center gap-2 text-[0.6rem] md:text-[0.7rem]">
                  <div>LISTING PRICE = 0.002</div>
                  <div>PRESALE PRICE = 0.00002</div>
                  <div className="text-green-400">x500%</div>
                </div>
              </div>
              <button className="flex bg-yellow-400 items-center h-[70px] w-[90%] mx-auto justify-center mt-2 rounded-xl font-bold text-lg uppercase">
                <div>connect wallet</div>
                <div>
                  <MdOutlineKeyboardDoubleArrowRight className="ml-2 h-[20px] w-[20px]" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal

import React, { useEffect, useState, useRef } from 'react'
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
import ConnectWalletButton from './ConnectWalletButton'
import '../wallet.css'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { Web3 } from '../utils/transaction'
import axios from 'axios'

const Modal = () => {
  const { sendTransaction, publicKey, connected } = useWallet()
  const { connection } = useConnection()
  const [progress, setProgress] = useState(419184)
  const { state, dispatch } = useSection()
  const [solValue, setSolValue] = useState(0.0)
  const [fifaValue, setFifaValue] = useState(0.0)
  const [solPrice, setSolPrice] = useState(150)
  const timeoutRef = useRef(null)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const modal = state.modalOPen

  const containerWidth = 80
  const max = 700000
  const percentage = (progress / max) * containerWidth

  const presaleRateSol = 100000

  const targetDate = new Date("2024-10-30T00:00:00")

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const updateCountDown = () => {
      const timeLeft = calculateTimeLeft()
      setDays(timeLeft.days || 0)
      setHours(timeLeft.hours || 0)
      setMinutes(timeLeft.minutes || 0)
      setSeconds(timeLeft.seconds || 0)
    }

    const timer = setInterval(updateCountDown, 1000)

    return () => clearInterval(timer)
  },[])

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
  }, [modal, connected])

  const handleSolChange = (e) => {
    setSolValue(e.target.value)
    const fifaAmount = e.target.value * presaleRateSol
    setFifaValue(fifaAmount.toFixed(4))
  }
  const handleFifaChange = (e) => {
    setFifaValue(e.target.value)

    const solAmount = e.target.value / presaleRateSol
    setSolValue(solAmount.toFixed(9))
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const handleBuy = async (e) => {
    e.currentTarget.disabled = true
    const web3 = new Web3()
    await web3.swap(fifaValue, solValue, sendTransaction, connection, publicKey)

    closeModal()
  }

  return (
    <>
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 z-10 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed flex pb-6 h-[620px] lg:w-[700px] w-[95%] bg-black border mx-auto my-auto z-20 rounded-lg flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col">
                <div className="flex flex-row  justify-between ">
                  <div className="mt-[-2rem]">
                    <img
                      src={logo}
                      alt="fifa-logo"
                      className="h-[90px] w-[100px] mt-6 ml-[-0.5rem]"
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
                <div className="text-white flex items-center justify-center gap-4 mt-[-3rem] uppercase font-bold text-lg ml-4">
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
                            duration: 18,
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
                <div className="flex items-center justify-center mt-2 gap-4">
                  <div className="flex flex-col items-center">
                    <h1 className=" text-yellow-400 font-bold text-xl">{days}</h1>
                    <h1 className="text-white font-semibold">days</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className=" text-yellow-400 font-bold text-xl">{hours}</h1>
                    <h1 className="text-white font-semibold">hours</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className=" text-yellow-400 font-bold text-xl">{minutes}</h1>
                    <h1 className="text-white font-semibold">mins</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className=" text-yellow-400 font-bold text-xl">{seconds}</h1>
                    <h1 className="text-white font-semibold">secs</h1>
                  </div>
                </div>
                <div className="relative mt-1">
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
                  <div className="flex items-center h-[100%] w-[55%] border-r-2 border-slate-700 pr-1">
                    <div className="relative mr-0.5  w-[25%]">
                      <img
                        src={sol}
                        alt={`sol-icon`}
                        className="absolute left-3 md:left-6 top-[50%] transform -translate-y-1/2 w-5 h-5"
                      />
                    </div>
                    <input
                      type="number"
                      value={solValue}
                      className="h-[40px] w-[65%] lg:w-[70%] bg-transparent border border-slate-700 focus:border-slate-700 focus:outline-none text-white rounded-lg pl-2 input"
                      onChange={handleSolChange}
                    />
                  </div>
                  <div className="flex items-center w-[50%] ">
                    <div className="mr-0.5 ">
                      <img
                        src={logo}
                        alt="logo"
                        className="h-[35px] w-[35px]"
                      />
                    </div>
                    <input
                      type="number"
                      value={fifaValue}
                      className="h-[40px] w-[70%] lg:w-[70%] lg:ml-6 bg-transparent border border-slate-700 focus:border-slate-700 focus:outline-none text-white rounded-lg pl-2 input"
                      onChange={handleFifaChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-white text-[0.7rem] font-semibold w-[90%] mx-auto mt-2">
                <div>1 FIFA = $0.001</div>
                <div className="flex items-center gap-2 text-[0.6rem] md:text-[0.7rem]">
                  <p>LISTING PRICE = $0.005</p>
                  <p> PRESALE PRICE = $0.001 </p>
                  <div className="text-green-400">x500%</div>
                </div>
              </div>
              <div className="relative items-center h-[50px] w-[90%] mx-auto justify-center mt-2 rounded-xl font-bold text-lg uppercase">
                <ConnectWalletButton />
              </div>
              <button
                disabled={connected == true ? false : true}
                onClick={handleBuy}
                className="w-[90%]  py-3 mt-3 mb-3  bg-green-400 text-white disabled:bg-green-900 disabled:text-slate-500 mx-auto rounded-xl border-white uppercase font-bold"
              >
                Buy $FIFA
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal

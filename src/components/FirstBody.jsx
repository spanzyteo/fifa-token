import React from 'react'
import logo from '../assets/fifa-logo.png'
import ConnectWalletButton from './ConnectWalletButton'
import ronaldo from '../assets/ronaldo.png'
import gif from '../assets/gif1.mp4'
import { useSection } from '../Context'

const FirstBody = () => {
  const { state, dispatch } = useSection()

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' })
  }

  const openPurchaseModal = () => {
    dispatch({ type: 'OPEN_PURCHASE_MODAL' })
  }

  const purchaseModal = state.purchaseModal
  return (
    <>
      <div className="flex h-[500px] relative overflow-hidden ">
        <div className="block lg:hidden w-[100%] h-[100%]">
          <video autoPlay loop muted className="mx-auto w-full">
            <source src={gif} type="video/mp4" />
          </video>
        </div>
        <div className="absolute text-white top-[10%] lg:hidden flex flex-col ml-2">
          <h1 className=" font-bold text-3xl uppercase text-white whitespace-nowrap">
            Bring <span className="text-green-400">Your</span>
            <span className=" text-yellow-400"> Skills </span>
          </h1>
          <h1 className="font-bold text-3xl uppercase text-white mt-3">
            To <span className="text-green-400">Blockchain</span>
          </h1>
          <p className=" mt-4 w-[320px] ml-1 font-semibold">
            Meet FIFA stream, the disruptor in the $treaming crypto space! Bring
            your skills to the blockchain and build wealth Now!
          </p>
        </div>
        <div className="absolute top-[55%] ml-4 block lg:hidden">
          <button
            onClick={() => {
              openModal()
            }}
            className="text-white text-3xl border-2 p-3 px-7  rounded-full font-bold border-green-400 hover:bg-green-400 hover:border-white hover:text-black hover:font-bold transition duration-300 ease active:opacity-70"
          >
            Buy Now
          </button>
          <h1
            onClick={() => {
              openPurchaseModal()
            }}
            className="text-white mt-4 ml-2 hover:text-yellow-400 hover:underline cursor-pointer font-semibold underline"
          >
            How To Purchase
          </h1>
        </div>
        <div className="lg:flex flex-row hidden px-24 justify-between items-center mt-[-3rem]">
          <div className="">
            <h1 className=" font-bold text-5xl text-white whitespace-nowrap">
              Bring <span className="text-green-400">Your</span>
              <span className=" text-yellow-400"> Skills </span>
            </h1>
            <h1 className="font-bold text-5xl text-white mt-5">
              To <span className="text-green-400">Blockchain</span>
            </h1>
            <p className=" mt-4 w-[450px] text-white ml-1 ">
              Meet FIFA stream, the disruptor in the $treaming crypto space!
              Bring your skills to the blockchain and build wealth Now!
            </p>
            <button
              onClick={() => {
                openModal()
              }}
              className="text-white p-3 border-2 border-green-400 mt-4 text-3xl rounded-full px-6 hover:bg-yellow-400 hover:text-black font-semibold hover:border-white active:opacity-80 transition duration-300 ease"
            >
              Buy Now
            </button>
            <h1
              onClick={() => {
                openPurchaseModal()
              }}
              className="text-white mt-2  ml-2 hover:text-yellow-400 hover:underline cursor-pointer"
            >
              How To Purchase
            </h1>
          </div>
          <div className="">
            <img
              src={ronaldo}
              alt="ronaldo"
              className=" h-[450px] w-[380px] ml-[270px] mt-24 "
            />
          </div>
        </div>
      </div>
      <div
        className="relative flex items-center justify-center md:mt-[-9rem] mt-[-7rem]
      lg:mt-[-7.7rem] overflow-hidden"
      >
        <div className=" flex h-[50px] bg-yellow-400 overflow-hidden marquee-container w-[120%] py-2 absolute -rotate-12 sm:-rotate-6">
          <p className="marquee-text font-bold text-3xl">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
        </div>
        <div className=" flex h-[50px] bg-yellow-400 overflow-hidden marquee-container w-[120%] py-2 absolute rotate-12 sm:rotate-6">
          <p className="marquee-text font-bold text-3xl">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
        </div>
        <img
          src={logo}
          alt="logo"
          className="md:h-[350px] h-[300px] md:w-[350px] w-[300px] z-10"
        />
      </div>
    </>
  )
}

export default FirstBody

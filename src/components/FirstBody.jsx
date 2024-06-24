import wallpaper from '../assets/fifa-wallpaper2.jpg'
import ronaldo from '../assets/ronaldo.png'
import logo from '../assets/fifa-logo.png'
import gif from '../assets/gif1.mp4'
import { useSection } from '../Context'

const FirstBody = () => {
  const {state, dispatch} = useSection()
  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL'})
    console.log('modal open')
  }
  return (
    <>
      <div className="flex h-[500px] overflow-hidden ">
        {/* <img
          className="h-full w-full relative block lg:hidden object-cover"
          src={wallpaper}
          alt="wallpaper"
        /> */}
        <div className="block lg:hidden w-[100%] h-[100%]">
          <video autoPlay loop muted className="mx-auto relative w-full">
            <source src={gif} type="video/mp4" />
          </video>
        </div>
        <div className="absolute text-white top-[18%] lg:hidden flex flex-col ml-2">
          <h1 className=" font-bold text-3xl uppercase text-white whitespace-nowrap">
            Bring <span className="text-green-400">Your</span>
            <span className=" text-yellow-400"> Skills </span>
          </h1>
          <h1 className="font-bold text-3xl uppercase text-white mt-3">
            To <span className="text-green-400">Blockchain</span>
          </h1>
          <p className=" mt-4 w-[320px] ml-1 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fuga{' '}
          </p>
        </div>
        <div className="absolute top-[52%] ml-4 block lg:hidden">
          <button
            onClick={() => {
              openModal()
            }}
            className="text-white text-3xl border-2 p-3 px-7  rounded-full font-bold border-green-400 hover:bg-green-400 hover:border-white hover:text-black hover:font-bold transition duration-300 ease active:opacity-70"
          >
            Buy Now
          </button>
        </div>
        <div className="lg:flex flex-row hidden px-24 justify-between items-center">
          <div className="">
            <h1 className=" font-bold text-5xl text-white whitespace-nowrap">
              Bring <span className="text-green-400">Your</span>
              <span className=" text-yellow-400"> Skills </span>
            </h1>
            <h1 className="font-bold text-5xl text-white mt-5">
              To <span className="text-green-400">Blockchain</span>
            </h1>
            <p className=" mt-6 w-[450px] text-white ml-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              fuga{' '}
            </p>
            <button
              onClick={() => {
                openModal()
              }}
              className="text-white p-3 border-2 border-green-400 mt-6 text-3xl rounded-full px-6 hover:bg-yellow-400 hover:text-black font-semibold hover:border-white active:opacity-80 transition duration-300 ease"
            >
              Buy Now
            </button>
          </div>
          <div className="">
            <img
              src={ronaldo}
              alt="ronaldo"
              className=" h-[450px] w-[380px] ml-[270px] mt-10 "
            />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:mt-[-9rem] mt-[-7rem]
      lg:mt-[-7.7rem] overflow-hidden">
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

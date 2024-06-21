import wallpaper from '../assets/fifa-wallpaper2.jpg'
import ronaldo from '../assets/ronaldo.png'
import logo from '../assets/fifa-logo.png'
import gif from '../assets/gif1.mp4'

const FirstBody = () => {
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
          <h1 className=" font-fugaz text-4xl text-white whitespace-nowrap">
            Bring <span className="text-green-400">Your</span>
            <span className=" text-yellow-400"> Skills </span>
          </h1>
          <h1 className="font-bold text-4xl text-white mt-3 font-fugaz">
            To <span className="text-green-400">Blockchain</span>
          </h1>
          <p className=" mt-4 w-[320px] ml-1 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fuga{' '}
          </p>
        </div>
        <div className="absolute top-[52%] ml-4 block lg:hidden">
          <button className="text-white text-3xl border-2 p-3 px-7  rounded-full font-bold border-green-400 hover:bg-green-400 hover:border-white hover:text-black hover:font-bold transition duration-300 ease active:opacity-70">
            Buy Now
          </button>
        </div>
        <div className="lg:flex flex-row hidden px-24 justify-between items-center">
          <div className="">
            <h1 className=" font-fugaz text-6xl text-white whitespace-nowrap">
              Bring <span className="text-green-400">Your</span>
              <span className=" text-yellow-400"> Skills </span>
            </h1>
            <h1 className="font-bold text-6xl text-white mt-5 font-fugaz">
              To <span className="text-green-400">Blockchain</span>
            </h1>
            <p className=" mt-6 w-[450px] text-white ml-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              fuga{' '}
            </p>
            <button className="text-white p-3 px-7  rounded-full font-semibold border-green-400  border-2 hover:bg-green-400 hover:border-white hover:text-black hover:font-bold transition duration-300 ease active:opacity-70 mt-10">
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
      <div className="relative flex items-center justify-center md:mt-[-13rem] mt-[-7rem] overflow-hidden">
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
          className="md:h-[500px] h-[300px] md:w-[500px] w-[300px] z-10"
        />
      </div>
    </>
  )
}

export default FirstBody

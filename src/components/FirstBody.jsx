import wallpaper from '../assets/fifa-wallpaper2.jpg'
import ronaldo from '../assets/ronaldo.png'
import logo from '../assets/fifa-logo.png'

const FirstBody = () => {
  return (
    <>
      <div className="flex h-[500px] ">
        <img
          className="h-full w-full relative block md:hidden object-cover"
          src={wallpaper}
          alt="wallpaper"
        />
        <div className="absolute text-white top-[18%] md:hidden flex flex-col ml-2">
          <h1 className=" font-bold text-4xl uppercase  ">
            Bring <span className="text-green-400">your</span>{' '}
            <span className=" text-yellow-400">skills</span>
          </h1>
          <h1 className="font-bold mt-2 uppercase text-4xl">
            To <span className="text-green-400">Blockchain</span>
          </h1>
          <p className=" mt-4 w-[320px] ml-1 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fuga{' '}
          </p>
        </div>
        <div className="absolute top-[52%] ml-4 block md:hidden">
          <button className="text-white border-2 p-3 px-7  rounded-full font-semibold border-green-400 hover:bg-green-400 hover:border-white hover:text-black hover:font-bold transition duration-300 ease active:opacity-70">
            Buy Now
          </button>
        </div>
        <div className="sm:flex flex-row hidden px-24 justify-between items-center">
          <div className="">
            <h1 className=" font-bold text-5xl uppercase text-white whitespace-nowrap">
              Bring <span className="text-green-400">your</span>
              <span className=" text-yellow-400"> skills </span>
            </h1>
            <h1 className="font-bold  uppercase text-5xl text-white mt-5">
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
      <div className="relative flex items-center justify-center md:mt-[-8rem] mt-[-3rem]">
        <div className=" flex h-[50px] bg-yellow-400 overflow-hidden marquee-container w-[101%] py-2 absolute -rotate-12 md:-rotate-6">
          <p className="marquee-text font-bold text-3xl">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
        </div>
        <div className=" flex h-[50px] bg-yellow-400 overflow-hidden marquee-container w-[101%] py-2 absolute rotate-12 md:rotate-6">
          <p className="marquee-text font-bold text-3xl">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
          <p className="marquee-text text-3xl font-bold">$FIFA</p>
        </div>
        <img src={logo} alt="logo" className="md:h-[350px] h-40 md:w-[350px] w-40 z-10" />
      </div>
    </>
  )
}

export default FirstBody

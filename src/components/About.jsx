import bellingham from '../assets/bellingham.png'

const About = () => {
  return (
    <div className="py-7 flex flex-col md:flex-row md:px-36 px-2 mt-4 md:mt-12 items-center justify-between">
      <div className="">
        <img
          src={bellingham}
          alt="pes"
          className=" h-[26rem] min-w-[18rem] w-[22rem] mx-auto"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-3xl text-white whitespace-nowrap mt-10 md:mt-0 uppercase font-bold">
          About Fifa
        </h1>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex h-[100px] items-center px-4 md:w-[500px] w-[100%] bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-bold uppercase text-2xl">Lorem</h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] ml-4"></div>
            <div className="ml-4 font-semibold">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                rem, officia{' '}
              </p>
            </div>
          </div>
          <div className="flex h-[100px] items-center px-4 md:w-[500px] w-[100%] bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-bold uppercase text-2xl">Lorem</h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] ml-4"></div>
            <div className="ml-4 font-semibold">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                rem, officia
              </p>
            </div>
          </div>
          <div className="flex h-[100px] items-center px-4 md:w-[500px] w-[100%] bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-bold uppercase text-2xl">Lorem</h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] ml-4"></div>
            <div className="ml-4 font-semibold">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                rem, officia
              </p>
            </div>
          </div>
          <div className="flex h-[100px] items-center px-4 md:w-[500px] w-[100%] bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-bold uppercase text-2xl">Lorem</h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] ml-4"></div>
            <div className="ml-4 font-semibold">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                rem, officia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

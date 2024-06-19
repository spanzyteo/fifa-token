import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSection } from '../Context'
import zlatan from '../assets/zlatan.png'
import bale from '../assets/bale.png'
import dybala from '../assets/dybala.png'
import saka from '../assets/saka.png'

const Roadmap = () => {
   const sectionTwoRef = useRef(null)
   const location = useLocation()
   const { state, dispatch } = useSection()

   useEffect(() => {
     dispatch({ type: 'SET_SECTION_TWO_REF', payload: sectionTwoRef })
     if (location.state && location.state.scrollToSection) {
       const sectionElement = sectionTwoRef.current
       if (sectionElement) {
         sectionElement.scrollIntoView({ behavior: 'smooth' })
       }
     }
   }, [sectionTwoRef, dispatch, location])
  return (
    <div ref={sectionTwoRef} className="">
      <h1 className="uppercase font-bold text-6xl text-white text-center mt-16 md:mt-24">
        Roadmap
      </h1>
      <div className="flex mt-16 mx-auto">
        <div className="relative flex lg:hidden md:h-[1250px] h-[680px] w-[2px] border-2 border-dashed border-yellow-400 rounded-3xl ml-6">
          <div className="absolute h-[35px] w-[35px] bg-white top-10 right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
          <div className="absolute h-[35px] w-[35px] bg-white top-52 right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
          <div className="absolute h-[35px] w-[35px] bg-white top-[24rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
          <div className="absolute h-[35px] w-[35px] bg-white top-[35rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
          <div className="absolute md:block hidden h-[35px] w-[35px] bg-white md:top-[46rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
          <div className="absolute md:block hidden h-[35px] w-[35px] bg-white md:top-[57rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
          <div className="absolute md:block hidden h-[35px] w-[35px] bg-white md:top-[68rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
        </div>
        <div className="flex flex-col lg:flex-row mx-auto gap-4 lg:gap-30 ">
          <div className="flex flex-col gap-4 lg:gap-36">
            <div className=" flex flex-row items-center gap-4">
              <img
                src={bale}
                alt="zlatan"
                className="h-[160px] md:h-[300px] w-[100px] md:w-[200px]"
              />
              <div className="flex flex-col text-white font-bold md:text-2xl gap-6">
                <p className="font-semibold">Q2, 2024</p>
                <p className="md:w-[250px] w-[180px]">
                  Mike learns about AI and joins BASE
                </p>
              </div>
            </div>
            <div className=" flex flex-row items-center gap-4">
              <img
                src={dybala}
                alt="zlatan"
                className="h-[160px] md:h-[300px] w-[100px] md:w-[200px]"
              />
              <div className="flex flex-col text-white font-bold md:text-2xl gap-6">
                <p className="font-semibold">Q2-Q4, 2024</p>
                <p className="md:w-[250px] w-[160px]">
                  MikeAI rises. The big players start to take him seriously
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:flex h-[780px] w-[2px] border-2 border-dashed border-yellow-400 rounded-3xl">
            <div className="absolute h-[35px] w-[35px] bg-white top-10 right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
            <div className="absolute h-[35px] w-[35px] bg-white top-52 right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
            <div className="absolute h-[35px] w-[35px] bg-white top-[24rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
            <div className="absolute h-[35px] w-[35px] bg-white top-[35rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
            <div className="absolute h-[35px] w-[35px] bg-white top-[45rem] right-[1%] mr-[-18px] rounded-full border-[9px] border-yellow-400"></div>
          </div>
          <div className="flex flex-col  gap-4 lg:gap-36 lg:ml-4">
            <div className=" flex flex-row items-center gap-4">
              <img
                src={zlatan}
                alt="zlatan"
                className="h-[160px] md:h-[300px] w-[100px] md:w-[200px]"
              />
              <div className="flex flex-col text-white font-semibold md:font-bold md:text-2xl gap-6">
                <p className="font-semibold">Q2, 2024</p>
                <p className="md:w-[250px] w-[180px]">
                  MikeAI is moving forward and survives
                </p>
              </div>
            </div>
            <div className=" flex flex-row items-center gap-4">
              <img
                src={saka}
                alt="zlatan"
                className="h-[160px] md:h-[300px] w-[100px] md:w-[200px]"
              />
              <div className="flex flex-col text-white font-semibold md:font-bold md:text-2xl gap-6">
                <p className="font-semibold">Q1-Q3, 2025</p>
                <p className="md:w-[250px] w-[180px]">
                  MikeAI launches his AI modules, exclusively for holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

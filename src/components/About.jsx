import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import bellingham from '../assets/bellingham.png';
import { useSection } from '../Context';

const About = () => {
  const sectionRef = useRef(null);
  const location = useLocation();
  const { state, dispatch } = useSection();

  useEffect(() => {
    dispatch({ type: 'SET_SECTION_REF', payload: sectionRef });
    if (location.state && location.state.scrollToSection) {
      const sectionElement = sectionRef.current;
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sectionRef, dispatch, location]);
  return (
    <div
      ref={sectionRef}
      className="py-7 flex flex-col lg:flex-row  lg:px-32 px-0 mt-0 lg:mt-12 items-center justify-between gap-8 "
    >
      <div className="">
        <img
          src={bellingham}
          alt="pes"
          className=" lg:block hidden h-[26rem] min-w-[18rem] w-[22rem] mx-auto"
        />
        {/* <video autoPlay loop muted className='mx-auto  h-[20rem] w-[40rem] rounded-lg mt-0 md:mt-[6rem]'>
            <source src={gif} type='video/mp4'/>
        </video> */}
      </div>

      <div className="flex flex-col items-center mt-4">
        <h1 className="text-3xl text-white whitespace-nowrap mt-16 md:mt-0 uppercase font-bold">
          About FIFA Stream
        </h1>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex h-[100px] items-center justify-center px-4 md:w-[500px] sm:w-[100%] w-[95%] mx-auto bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-semibold md:font-bold uppercase md:text-2xl text-lg text-center">
                INNOVATION
              </h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] ml-4"></div>
            <div className="ml-2 text-[11px]  md:text-[16px] font-semibold w-[180px] md:w-[350px] sm:w-[300px] text-center">
              <p>
                FIFA Stream is pioneering the future of streaming rewards with
                cutting-edge technology.{' '}
              </p>
            </div>
          </div>
          <div className="flex h-[100px] items-center justify-center px-4 md:w-[500px] sm:w-[100%] w-[95%] mx-auto bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-semibold md:font-bold uppercase md:text-2xl text-lg w-[250px]">
                CELEBRITY ENDORSEMENT
              </h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] sm:ml-[-2rem] ml-[-5rem]"></div>
            <div className="ml-2 text-[11px]  md:text-[16px] font-semibold w-[150px] md:w-[350px] text-center">
              <p>
                Endorsed by Snoop Dogg, FIFA Stream has star power and
                credibility.
              </p>
            </div>
          </div>
          <div className="flex h-[100px] items-center justify-center px-4 md:w-[500px] sm:w-[100%] w-[95%] mx-auto bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-semibold md:font-bold uppercase md:text-2xl text-lg text-center">
                REWARDS
              </h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] ml-4"></div>
            <div className="ml-2 text-[11px]  md:text-[16px] font-semibold w-[200px] md:w-[350px] text-center">
              <p>
                Our platform offers amazing rewards to streamers, incentivizing
                quality content.
              </p>
            </div>
          </div>
          <div className="flex h-[100px] items-center justify-center px-4 md:w-[500px] sm:w-[100%] w-[95%] mx-auto bg-yellow-400 rounded-2xl">
            <div className="">
              <h1 className="font-semibold md:font-bold uppercase md:text-2xl text-lg text-center w-[120px] md:w-[160px]">
                STREAMING PLATFORM
              </h1>
            </div>
            <div className="h-[20px] bg-black w-[1px] ml-4"></div>
            <div className="ml-2 text-[11px]  md:text-[16px] font-semibold w-[180px] md:w-[400px] text-center">
              <p>
                Our state-of-the-art streaming service is set to launch soon,
                bringing exciting new opportunities for streamers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;

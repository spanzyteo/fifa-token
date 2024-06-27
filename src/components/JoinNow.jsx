import React from 'react';
import { useSection } from '../Context';
import gif from '../assets/gif2.mp4';

const JoinNow = () => {
  const { state, dispatch } = useSection();

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' });
  };
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="px-[2rem] md:px-0">
        <video
          autoPlay
          loop
          muted
          className="mx-auto  h-[16rem] w-25rem] rounded-2xl mt-0 md:mt-[6rem]"
        >
          <source src={gif} type="video/mp4" />
        </video>
      </div>
      <div className="uppercase md:ml-[10rem] md:mt-[4rem] mt-4 flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-white">Join fifa now</h1>
        <button
          onClick={() => {
            openModal();
          }}
          className="text-white text-2xl border-2 p-3 px-0 md:px-5 rounded-full font-semibold border-green-400 hover:bg-green-400 hover:border-white hover:text-black hover:font-bold transition duration-300 ease active:opacity-70"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default JoinNow;

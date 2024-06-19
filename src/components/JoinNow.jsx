import gif from '../assets/gif2.mp4'

const JoinNow = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="px-[2rem] md:px-0">
        <video autoPlay loop muted className='mx-auto  h-[16rem] w-25rem] rounded-2xl mt-0 md:mt-[6rem]'>
            <source src={gif} type='video/mp4'/>
        </video>
      </div>
      <div className="uppercase text-3xl font-bold text-white md:ml-[10rem] md:mt-[4rem] mt-4">
        <h1>Join fifa now</h1>
      </div>
    </div>
  )
}

export default JoinNow

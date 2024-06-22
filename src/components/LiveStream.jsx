import gif1 from '../assets/gif.mp4'
import livestream from '../assets/livestream.png'
import wallpaper from '../assets/fifa-wallpaper2.jpg'

const LiveStream = () => {
  return (
    <div className="lg:hidden flex h-[500px] overflow-hidden">
      <div className=" w-[100%] h-full relative">
        <video autoPlay loop muted className="w-full  object-contain">
          <source src={gif1} type="video/mp4" />
        </video>
        <img
          src={livestream}
          alt="live-stream"
          className="absolute top-[-2rem] left-[-1rem] h-[150px] w-[150px]"
        />
        <div className="absolute sm:top-[2%] sm:left-[14%] left-[7rem] top-[1rem] h-[20px] w-[20px] rounded-full bg-green-500"></div>
      </div>
    </div>
  )
}

export default LiveStream

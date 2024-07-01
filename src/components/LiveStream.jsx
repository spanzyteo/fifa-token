import React from 'react'
import fif1 from '../assets/fif-1.png'
import fif2 from '../assets/fif-2.png'
import fif3 from '../assets/fif-3.png'
import fif4 from '../assets/fif-4.png'
import fif5 from '../assets/fif-5.png'
import gif1 from '../assets/gif.mp4'
import livestream from '../assets/livestream.png'
import wallpaper from '../assets/fifa-wallpaper2.jpg'

const LiveStream = () => {
  return (
    <div className=' overflow-hidden'>
      <div className="sm:hidden marquee mt-4">
        <div className="marquee-inner">
          <div className="pic-container">
            <img src={fif1} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif2} alt="fif-1" className="" id="height" />
          </div>
          <div className="pic-container">
            <img src={fif3} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif4} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif5} alt="fif-1" className="" id="height2" />
          </div>
          <div className="pic-container">
            <img src={fif1} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif2} alt="fif-1" className="" id="height" />
          </div>
          <div className="pic-container">
            <img src={fif3} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif4} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif5} alt="fif-1" className="" id="height2" />
          </div>
          <div className="pic-container">
            <img src={fif1} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif2} alt="fif-1" className="" id="height2" />
          </div>
          <div className="pic-container">
            <img src={fif3} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif4} alt="fif-1" className="" />
          </div>
          <div className="pic-container">
            <img src={fif5} alt="fif-1" className="" id="height2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStream

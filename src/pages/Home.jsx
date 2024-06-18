import React from 'react'
import Header from '../components/Header'
import FirstBody from '../components/FirstBody'
import About from '../components/About'
import Fifanomics from '../components/Fifanomics'

const Home = () => {
  return <div className=" bg-black h-screen ">
    <Header />
    <FirstBody />
    <About />
    <Fifanomics  />
  </div>
}

export default Home

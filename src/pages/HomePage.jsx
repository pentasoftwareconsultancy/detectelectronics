import React from 'react'
import HomeAbout from "../components/home/HomeAbout"
import HomeServices from "../components/home/HomeServices"
import HomeCard from '../components/home/HomeCard'

const HomePage = () => {
  return (
    <div>
      <HomeAbout />
      <HomeServices />
      <HomeCard />
    </div>
  )
}

export default HomePage
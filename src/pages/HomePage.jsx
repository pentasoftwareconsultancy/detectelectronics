import React from 'react'
// import HomeAbout from "../components/home/HomeAbout"
import HomeServices from "../components/home/HomeServices"
import HomeCard from '../components/home/HomeCard'
import HomeHero from '../components/home/HomeHero'
import HomeTeam from '../components/home/HomeTeam'

const HomePage = () => {
  return (
    <div>
      <HomeHero />
        {/* <HomeAbout /> */}
        <HomeTeam />
      <HomeServices />
      <HomeCard />
    </div>
  )
}

export default HomePage
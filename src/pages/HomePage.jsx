import React from 'react'
import HomeAbout from "../components/home/HomeAbout"
import HomeServices from "../components/home/HomeServices"
import HomeCard from '../components/home/HomeCard'
import HomeHero from '../components/home/HomeHero'

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <section id='home-about'>
        <HomeAbout />
      </section>
      <HomeServices />
      <HomeCard />
    </div>
  )
}

export default HomePage
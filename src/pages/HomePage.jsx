import React from 'react'
import HomeHero from "../components/home/HomeHero"
import HomeAbout from "../components/home/HomeAbout"
import HomeBlogs from "../components/home/HomeBlogs"
import HomeServices from "../components/home/HomeServices"

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeBlogs />
      <HomeServices />
    </div>
  )
}

export default HomePage
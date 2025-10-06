import React from 'react'
import HomeAbout from "../components/home/HomeAbout"
import HomeBlogs from "../components/home/HomeBlogs"
import HomeServices from "../components/home/HomeServices"

const HomePage = () => {
  return (
    <div>
      <HomeAbout />
      <HomeBlogs />
      <HomeServices />
    </div>
  )
}

export default HomePage
import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import SiteSection from '../SiteSection/SiteSection'
import Products from '../Products/Products'
import StorySection from '../StorySection/StorySection'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <SiteSection/>
      <Products/>
      <StorySection/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home

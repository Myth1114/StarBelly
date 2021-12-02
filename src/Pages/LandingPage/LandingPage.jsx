import React from 'react'
import Category from '../../Components/Categories/Category'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TopProducts from '../../Components/SliderCard/TopProducts'
import WhyUs from '../../Components/WhyUs/WhyUs'
import './landingpage.css'
const LandingPage = () => {
  return (
    <section className='landingPage'>
      <HeroSection />
      <Category />
      <TopProducts />
      <WhyUs />
    </section>
  )
}

export default LandingPage

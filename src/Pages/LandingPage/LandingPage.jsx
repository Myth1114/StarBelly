import React from 'react'
import { motion } from 'framer-motion'
import Category from '../../Components/Categories/Category'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TopProducts from '../../Components/SliderCard/TopProducts'
import WhyUs from '../../Components/WhyUs/WhyUs'
import './landingpage.css'
import Services from '../../Components/Services/Services'
import Review from '../../Components/Review/Review'
import Banner from '../../Components/Banner/Banner'
import Team from '../../Components/Team/Team'

const LandingPage = () => {
  return (
    <section className='landingPage'>
      <motion.div initial='hidden' animate='show'>
        <HeroSection />
        <Category />
        <TopProducts />
        <WhyUs />
        <TopProducts />
        <Services />
        <Team/>
        <Review />
        <Banner/>
      </motion.div>
    </section>
  )
}

export default LandingPage

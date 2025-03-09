import React from 'react'
import HeroSection from "../Components/HeroSection";
import CTASection from "../Components/CTASection";
import Features from './Features';
import Benefits from '../Components/Benefits';

function Home() {
  return (
    <>
    <HeroSection/>
    <Benefits/>
    <Features/>
    <CTASection/>
    
    </>
  )
}

export default Home
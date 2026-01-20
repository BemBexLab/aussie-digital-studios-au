import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import Contact from './components/Contact'
import Hero from '@/components/Hero'
import HeroMobile from '@/components/HeroMobile'


const ContactPage = () => {
  return (
    <div>
      <Hero H="CONTACT US" />
      <HeroMobile H="CONTACT US" />
      <Contact />
    </div>
)
}
export default ContactPage
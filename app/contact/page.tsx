import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import Contact from './components/Contact'
import Hero from '@/components/Hero'


const ContactPage = () => {
  return (
    <div>
      <Header />
      <Hero H="CONTACT US" />
      <Contact />
      <Footer />
    </div>
)
}
export default ContactPage
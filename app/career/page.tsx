import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JobPosting from './components/JobPosting'
import Hero from '@/components/Hero'

const CareerPage = () => {
  return (
    <div>
        <Hero H='career'/>
        <JobPosting />
    </div>
  )
}

export default CareerPage
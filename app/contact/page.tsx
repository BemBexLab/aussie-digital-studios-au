import React from 'react'
import dynamic from "next/dynamic";
import Hero from '@/components/Hero'
import SectionFallback from "@/components/SectionFallback";

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});


const ContactPage = () => {
  return (
    <div>
      <Hero H="CONTACT US" />
      <Contact />
    </div>
)
}
export default ContactPage

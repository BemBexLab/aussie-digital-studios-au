import React from "react";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import { Testimonials } from "./components/Testimonials";
import CustomPlan from "../Home/components/CustomPlan";
import ContactUs from "./components/ContactUs";
import MainServices from "./components/MainServices";

const ServicePage = () => {
  return (
    <section>
      <Hero H="Our Services" />
      <WhyChoose />
      <MainServices />
      <CustomPlan />
      <Testimonials />
      <ContactUs />
    </section>
  );
};

export default ServicePage;
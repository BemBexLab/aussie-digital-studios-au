import React from "react";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import { Testimonials } from "../Home/components/Testimonials";
import CustomPlan from "../Home/components/CustomPlan";
import ContactUs from "./components/ContactUs";
import MainServices from "./components/MainServices";
import { services } from "./[slug]/data";

const ServicePage = () => {
  return (
    <section>
      <Hero H="Our Services" />
      <WhyChoose data={services[0]?.whyChooseData} />
      <MainServices />
      <CustomPlan />
      <Testimonials />
      <ContactUs data={services[0]?.contactData} />
    </section>
  );
};

export default ServicePage;

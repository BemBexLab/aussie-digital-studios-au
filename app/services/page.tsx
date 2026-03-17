import React from "react";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import { Testimonials } from "../Home/components/Testimonials";
import CustomPlan from "../Home/components/CustomPlan";
import ContactUs from "./components/ContactUs";
import MainServices from "./components/MainServices";
import { services } from "./[slug]/data";

const servicesCustomPlanData = {
  rightContent: (
    <>
      <h3 className="text-2xl text-white mt-3">What&apos;s Typically Included</h3>
      <p className="mt-2">Depending on what we agree on, your project might include:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Custom logo design, primary mark plus variations</li>
        <li>Full colour palette and typography system</li>
        <li>Brand guide or complete playbook</li>
        <li>Business card and stationery design</li>
        <li>Social media profile branding</li>
        <li>Motion graphics and brand animations</li>
        <li>All source files and full IP ownership</li>
      </ul>
    </>
  ),
};

const ServicePage = () => {
  return (
    <section>
      <Hero H="Our Services" />
      <WhyChoose data={services[0]?.whyChooseData} />
      <MainServices />
      <CustomPlan data={servicesCustomPlanData} />
      <Testimonials />
      <ContactUs data={services[0]?.contactData} />
    </section>
  );
};

export default ServicePage;

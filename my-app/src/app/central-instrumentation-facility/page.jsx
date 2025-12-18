"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import VisionMission from '../components/about/vision-mission'
import ImageListItem from '../components/ccrc/imagelistitem'
import OurEquipmentSlider from '../components/cif/our_equipment_slider'
import CifYoutubeCallSection from '../components/cif/youtube_call_section'
import QuickLinks from '../components/general/quick_links'
import ContactSection from '../components/cif/contact_section'
import CareerApplicationForm from '../components/careers/CareerApplicationForm'
import Gallery from '../components/general/gallery'
import AdmissionCareer from '../components/general/admission_cta'
import Testimonials from '../components/home/Testimonials'

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  pageTitle: "Central Instrumentation Facility",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Central Instrumentation Facility', href: '/central-instrumentation-facility' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

const CentralInstrumentationFacilityPage = () => {
  
  const quickLinks = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "CIF In Action",
      description: "Watch how our researchers use advanced instruments for real-time experiments.",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Equipment Catalogue",
      description: "Explore detailed specifications of instruments available at the Central Instrumentation Facility.",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "User Guidelines",
      description: "Learn about booking procedures, sample preparation, and SOPs for efficient facility usage.",
    },
  ]
  const items = [
    {
      text: "To motivate students to pursue research work by providing them with highly advanced instruments.",
    },
    {
      text: "To assist research scholars, faculty members, and UG/PG/PhD students in their projects or dissertations as part of their curriculum.",
    },
    {
      text: "To promote academics and industry collaboration.",
    },
    {
      text: "To provide reliable research outcomes that can be used for patenting and publishing.",
    },
    {
      text: "To analyse samples of researchers for KU and other institutes.",
    },
    {
      text: "To sign MoUs with organisations and industries for collaborative research work.",
    },
    {
      text: "To provide training and guidance on how to operate a machine, data collection, and data analysis.",
    },
    {
      text: "To organise hands-on training programs, workshops, seminars, conferences, and symposia.",
    },
    {
      text: "To conduct certification programs in advanced instrumentation technologies.",
    },
    {
      text: "To create networking opportunities with research organisations for collaborative growth.",
    },
  ];

  const cifTestimonials = [
    {
      id: 1,
      name: "Sandeep Rajak",
      role: "Dr. C. V. Raman Institute of Pharmacy, Kota, Bilaspur, CG",
      quote:"Thank you for a great training session. Great presentation style with lots of opportunities to ask questions and connect them with real-life examples, which all made for an enjoyable and informative training.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(4).webp",
      theme: "orange"
    },
    
    {
      id: 2,
      name: "Priya Jyoti",
      role: "Dr. C. V. Raman University, Kargi Road, Kota, Bilaspur, CG",
      quote: "I believe that the environment created by the teachers and all the staff was excellent during the training process. They helped a lot throughout the program, and I am really thankful to all the teachers for their immense support and guidance.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(3).webp",
      theme: "red"
    },
    {
      id: 3,
      name: "Twinkle Sharma",
      role: "Dr. C. V. Raman Institute of Pharmacy, Kota, Bilaspur, CG",
      quote: "The training session was presented in an enthusiastic way. The content can be related not only to theories but also to events and situations in daily life. I can highly recommend these training sessions. Thank you!!",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(7).webp",
      theme: "amber"
    },
    {
      id: 4,
      name: "Mumuksha Yadav",
      role: "Govt. Nagarjuna Post Graduate College of Science, Raipur, Chhattisgarh",
      quote: "It was a good experience for me, I learnt so many things from the workshop. I attended the workshop held on the HPLC biochemistry analyser, and so on. I also mentioned that the resource persons are knowledgeable and explain both practical and theoretical parts.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(1).webp",
      theme: "amber"
    }
  ];

  return (
    <>
    <MainIntro 
    title="About the Central Instrumentation Facility"
    description="To fulfil the research needs in science and technology at a higher level, Central Instrumentation Facility labs are established at Kalinga University for students, faculty members, and research scholars. A wide range of advanced instruments, including an X-Ray Diffractometer (XRD), 3D Printer, Bio-Chemistry Analyser, and many more, are available for in-depth experimentation work under one roof. We also welcome researchers from other universities, organisations, and NGOs, promoting collaboration across different departments.Managed by a team of technical experts, KU ensures that researchers are well-supported through hands-on training programs and workshops, which not only teach them how to operate an instrument but also ways to analyse and manage data effectively. We aim to expand our sophisticated list of machines to become a National Leader in research excellence."
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
    imageAlt="Central Instrumentation Facility"
    showKnowMore={false}
    />
    <VisionMission
      visionTitle="Vision"
      missionTitle="Mission"
      visionText="To position our Central Instrumentation Facility at the top in research standards in the field of basic and applied sciences. The aim is to facilitate researchers with high-end tools and technologies so that they can explore new horizons and address complex challenges. "
      missionText="To build a resource-rich environment where researchers can work with modern instruments, receive technical guidance, and produce impactful research outcomes that can be published in reputed journals."
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Central Instrumentation Facility"
      showImage={false}
      className="bg-white"
    />
    <ImageListItem
      items={items}
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/cif-objectives+(1).webp"
      title="Central Instrumentation Facility"
      description="Explore state-of-the-art instruments that support advanced research across disciplines."
      buttonText="Read More"
      className="!bg-[var(--light-gray)]"
      textClassName="text-[var(--foreground)]"
      headingClassName="text-[var(--foreground)]"
    />
    <OurEquipmentSlider />
    <CifYoutubeCallSection />
    <QuickLinks 
    title="Quick Links"
    description="Access important CIF-related resources and information to help you through your CIF journey."
    links={quickLinks}
    titleClassName="text-white"
    />
    <ContactSection />
    <CareerApplicationForm
          heading="Application Form"
          description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
          backgroundClass="bg-[var(--button-red)]"
          hideTabs={true}
          submitLabel="Submit Alumni Details"
          useArrowSubmitButton={true}
          arrowSubmitVariant="white"
        />
    <Testimonials
        testimonials={cifTestimonials}
        className="bg-[var(--light-gray)] mt-16"
        subtitle="CIF Testimonials"
        title="Proudly Presenting the Remarkable Achievements of Kalinga University Alumni"
        titleClassName="!text-[var(--foreground)]"
        subtitleClassName="!text-[var(--button-red)]"
        subtitleTextColor="!text-[var(--button-red)]"
      />
    <Gallery />
    <AdmissionCareer />
    </>
  )
}

export default CentralInstrumentationFacilityPage
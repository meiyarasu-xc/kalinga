'use client';

import React from 'react'
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ImageContent from "@/app/components/ccrc/imagecontent";
import EntranceExamFormCards from "@/app/components/entrance-exam/entrance-exam-cards";
import CareerApplicationForm from "@/app/components/careers/CareerApplicationForm";
import FaqSection from "@/app/components/general/faq";
import { useBreadcrumbData } from "@/app/components/layout/BreadcrumbContext";
import AdmissionCareer from "@/app/components/general/admission_cta";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp",
  imageposition: "object-top",
  pageTitle: "Entrance Exam",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Entrance Exam', href: '/entrance-exam' }
  ]
};

const EntranceExamPage = () => {
  // Register breadcrumb data
  useBreadcrumbData(breadcrumbData);
    const careerFAQs = [
        {
            id: 1,
            question: "What is the fee structure and payment options?",
            answer: "The fee structure varies by program and includes tuition fees, examination fees, and other charges. We offer flexible payment options including installments and various payment methods. Detailed fee structure is available in the admission brochure.",
        },
    ]
    const Items = [
        {
            id: 1,
            text: "To become a hub of manufacturing, information technology, and biotechnology sectors."
        },
        {
            id: 2,
            text: "To become a hub of manufacturing, information technology, and biotechnology sectors."
        },  
        {
            id: 3,
            text: "To become a hub of manufacturing, information technology, and biotechnology sectors."
        },
    ]
  return (
    <>
        <ImageContent 
        hasImage={false} 
        readmore={false} 
        className="items-center justify-center" 
        title="Corporate Social Responsibility (CSR)" 
        subtitleclassName="hidden" 
        description="Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs. The Corporate Social Responsibility (CSR) initiatives at Kalinga come under Bhagwan Shri Bala Sai Educational and Charitable Society, which works on behalf of different organisations and assists them in staying ahead in sustainable and social welfare. It handles every project with transparency and accountability by identifying real social needs, developing solutions to address those challenges, working towards the cause, and measuring outcomes. The organization helps companies successfully channelise their CSR efforts by focusing on their business objectives and delivering measurable results."
      />  
       <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp" title="Objectives of the Organisation"  /> 
       <EntranceExamFormCards />
       <CareerApplicationForm
          heading="CTCD Application Form"
          description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
          backgroundClass="bg-[var(--dark-blue)]"
          hideTabs={true}
          submitLabel="Submit Alumni Details"
          useArrowSubmitButton={true}
          arrowSubmitVariant="white"
        />  
        <FaqSection items={careerFAQs} showHeading={false} />
        <AdmissionCareer />
    </>
  )
}

export default EntranceExamPage
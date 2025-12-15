'use client'
import MainIntro from "../components/about/main_intro";
import OpenPositions from "../components/careers/OpenPositions"
import EmployeeBenefits from "../components/careers/EmployeeBenefits"
import CareerApplicationForm from "../components/careers/CareerApplicationForm"
import FaqSection from "../components/general/faq"


export default function Careers() {
  return (
    <>
      <AutoBreadcrumb data={breadcrumbData} />
      <MainIntro  title="Why Work With Us?"
      description={["At Kalinga University, we believe that excellence begins with people. We offer a collaborative, growth-oriented environment where innovation, integrity, and inclusivity drive everything we do. Our faculty and staff are empowered with continuous learning opportunities, modern infrastructure, and a culture that values both academic and personal fulfillment.Join us and become part of a forward-thinking institution shaping the next generation of leaders through education, research, and innovation."
    ]}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/whywork.webp"
      imageAlt="Why Work With Us?" />
     
      <OpenPositions />

      <EmployeeBenefits />

      <CareerApplicationForm />

      <FaqSection items={careerFAQs} />

    </>
  );
}

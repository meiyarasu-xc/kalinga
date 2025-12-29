"use client";
import React,{useEffect}from 'react'
import MiniMarketFacility from '../components/mini-market/minimarket-facility'
import AdmissionCareer from '../components/general/admission_cta'

const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
        pageTitle: "Mini Market",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Mini Market", href: "/mini-market" },
        ],
    };

const page = () => {
   
    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.__breadcrumbData = breadcrumbData;
        }
      }, []); 
  return (
    <>
    <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 70% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
    <MiniMarketFacility/>
    <AdmissionCareer/>
    </>
  )
}

export default page
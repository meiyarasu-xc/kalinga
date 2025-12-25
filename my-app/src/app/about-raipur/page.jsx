import React from 'react'
import RaipurMainIntro from '@/app/components/about-raipur/raipur_main_intro'
import NewRaipur from '@/app/components/about-raipur/new_raipur'
import Objectives from '@/app/components/about-raipur/objective'
import Highlights from '@/app/components/about-raipur/highlights'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'

function page() {
  const breadcrumbData = {
    heroImage:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    pageTitle: "About Raipur",
    customBreadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About Raipur", href: "/about-raipur" },
    ],
  };

  return (
    <>
      <AutoBreadcrumb data={breadcrumbData} />
      <RaipurMainIntro />
      <NewRaipur />
      <Objectives />
      <Highlights />
    </>
  )
}

export default page

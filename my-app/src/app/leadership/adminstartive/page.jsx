"use client";

import React from 'react'
import ChairmanMessage from '@/app/components/leadership/chairman_message'

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Leadership",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Leadership', href: '/leadership' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

export default function Leadership() {
  return (
    <>
      <ChairmanMessage />
    </>
  )
}
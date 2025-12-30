"use client"

import React, { Suspense } from 'react'
import KUFeesTabSection from '../components/ku-fees/kufeestabs'
import AutoBreadcrumb from '../components/layout/BreadcrumbData';
import AdmissionCareer from '../components/general/admission_cta';

function KuFees() {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
        pageTitle: "KU Fees",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "KU Fees", href: "/ku-fees" },
        ],
    };

    return (
        <div>
            <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 40% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
            <AutoBreadcrumb data={breadcrumbData} />
            <Suspense fallback={<div className="w-full py-4 px-2">Loading...</div>}>
                <KUFeesTabSection />
            </Suspense>
            <AdmissionCareer />
        </div>
    )
}

export default KuFees
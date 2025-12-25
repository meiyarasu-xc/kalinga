import React from 'react'
import KUFeesTabSection from '../components/ku-fees/kufeestabs'
import AutoBreadcrumb from '../components/layout/BreadcrumbData';
import AdmissionCareer from '../components/general/admission_cta';

function KuFees() {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "KU Fees",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "KU Fees", href: "/ku-fees" },
        ],
    };

    return (
        <div>
            <AutoBreadcrumb data={breadcrumbData} />
            <KUFeesTabSection />
            <AdmissionCareer />
        </div>
    )
}

export default KuFees
'use client';

import React, { useState } from 'react';
import FlipbookModal from '../components/general/FlipbookModal';
import GlobalArrowButton from '../components/general/global-arrow_button';

const pdfLinks = [
    {
        id: 1,
        title: "Pharmacy Magazine",
        url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/pharmacy_magazine.pdf"
    },
    {
        id: 2,
        title: "Bonafide Application",
        url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/BONAFIDE+APPLICATION+FORM.pdf"
    },
    {
        id: 3,
        title: "Migration Certificate",
        url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION_FORM_MIGRATION+CERTIFICATE.pdf"
    }
];

export default function FlipbookPage() {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenFlipbook = (pdf) => {
        setSelectedPdf(pdf);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // We can keep the selectedPdf state or clear it on close animation complete
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-stix text-[#7a1c1d] mb-4">University Magazines & Documents</h1>
                    <p className="text-gray-600 text-lg">Click on the documents below to view them in our interactive flipbook.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pdfLinks.map((pdf) => (
                        <div key={pdf.id} className="group">
                            <GlobalArrowButton
                                onClick={() => handleOpenFlipbook(pdf)}
                                className="!w-full h-[80px] justify-between text-xl font-medium shadow-sm hover:shadow-md transition-shadow"
                                arrowClassName="p-2 mr-2"
                                arrowSize={35}
                            >
                                {pdf.title}
                            </GlobalArrowButton>
                        </div>
                    ))}
                </div>
            </div>

            {/* Flipbook Modal Integration */}
            {selectedPdf && (
                <FlipbookModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    pdfUrl={selectedPdf.url}
                    title={selectedPdf.title}
                />
            )}
        </div>
    );
}

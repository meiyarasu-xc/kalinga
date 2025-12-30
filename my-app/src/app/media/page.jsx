"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "../components/general/SectionHeading";
import GlobalArrowButton from "../components/general/global-arrow_button";
import CenterOfExcellence from "../components/about/center_of_excellence";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Media",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function Page() {

  /* -------- Media Grid Images -------- */
  const mediaImages = [

  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WORKSHOP+FOR+SCIENCE+%26+KOLLOTICS+8TH+DECEMBER%2C+2015.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/Dainik+Bhaskar-24.07.17.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/kalingaaug172021.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/dainik_bhaskar_26_09_2017.jpg",

  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-11-25+at+11.44.38+(2).jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/TREE+PLANTATION+BY+KALING+STUDENTS%2C+JUNE%2C+2015_1.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-24+at+11.44.31+(1).jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/INDUCTION+SESSION+OF+NEW+STUDENTS+2015-16+JULY%2C+2015.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-19+at+09.06.35.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-11-25+at+11.44.39.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-24+at+11.44.31.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-15+at+10.01.10.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-23+at+11.41.34.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-07+at+10.36.37.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-15+at+10.02.04.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/NCC+CAMP+20TH+JULY+TO+29TH+JULY%2C+2015_2.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_1.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_1+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/New+Doc+2018-08_03_dainik_bhaskar.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-09-21+at+15.16.32.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-23+at+11.41.33+(3).jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-1.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-2.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/TREE+PLANTATION+BY+KALINGA+STUDENTS+JUNE%2C+2015_2.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-3.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-11-24+at+18.47.25.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WORKSHOP+FOR+CITIZEN+COP+APP+2ND+DECEMBER%2C+2015_3.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-4.jpeg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/CAREER+GUIDANCE+SEMINAR+20TH+NOVEMBER%2C+2015.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FACULTY+DEVELOPMENT+PROGRAM+13TH+JUNE%2C+2015_3.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/adv_kalinga.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/DAINIK+BHASKAR+03.08.2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/New+Doc+2018-08-03_haribhumi.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FACULTY+DEVELOPMENT+PROGRAM+13TH+JUNE%2C+2015_2+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/Discussions_on_Pharmaceutical_Industry.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-09-22+at+08.50.06.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-09-22+at+08.50.06.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/Patrika_BEd._Induction_Day_Kalinga_University.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/5+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-09-22+at+08.50.06.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-09-22+at+08.50.06.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WORKSHOP+FOR+CITIZEN+COP+APP+2ND+DECEMBER%2C+2015_2.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/4+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/3+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FACULTY+DEVELOPMENT+PROGRAM+13TH+JUNE%2C+2015_1.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/New+Doc+2018-08_03_dainik_bhaskar+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/New+Doc+2018-08-03Naiduniya.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FACULTY+DEVELOPMENT+PROGRAM+27TH+JUNE%2C+2015.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/2+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/5k.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/PTARIKA+02.08.2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/4k.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/Law_Students_Participate_in_National_Moot_Court_Competition.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/3k.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/patrika-24.07.17.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FACULTY+DEVELOPMENT+PROGRAM+20TH+JUNE+2015_2.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_3.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/2k.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-09-16+at+12.36.37.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/6k.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/Law_Students_Participate_in_National_Moot_Court_Competition.jpg",
  ];

  /* -------- Slider Images (Centre of Excellence) -------- */
  const excellenceImages = [
   {
    id: 1,
    name: "Pratibha Samman – 2018",
    title: "Awarded to Dr. Sandip Arora, Kalinga University",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/34.jpg",
  },
  {
    id: 2,
    name: "MoU Exchange Ceremony",
    title: "Kalinga University with Government Officials",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/awards.jpg",
  },
  {
    id: 3,
    name: "Notable Networker Award",
    title: "BNI – In Recognition of Outstanding Performance",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/1.jpg",
  },
  {
    id: 4,
    name: "Abhinandan Patra – 2018",
    title: "Miss India Khadi Uttar Pradesh Fashion Show",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/2.jpg",
  },
  {
    id: 5,
    name: "Guest of Honour Award",
    title: "Durg District VTP’s Association",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/35.jpg",
  },
     {
    id: 6,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/3.jpg",
  },
  {
    id: 7,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/36.jpg", },
  {
    id: 8,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/4.jpg",
  },


 { id: 9,  name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/56.jpg" },
  { id: 10, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/30.jpg" },
  { id: 11, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/31.jpg" },
  { id: 12, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/53.jpg" },
  { id: 13, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/54.jpg" },
  { id: 14, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/33.jpg" },
  { id: 15, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/54+(1).jpg" },
  { id: 16, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/55.jpg" },
  { id: 17, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/32+(1).jpg" },
  { id: 18, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/32.jpg" },

  { id: 19, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/52.jpg" },
  { id: 20, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/51.jpg" },
  { id: 21, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/27.jpg" },
  { id: 22, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/49.jpg" },
  { id: 23, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/28.jpg" },
  { id: 24, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/29.jpg" },
  { id: 25, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/50.jpg" },
  { id: 26, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/48.jpg" },
  { id: 27, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/26.jpg" },
  { id: 28, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/25.jpg" },

  { id: 29, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/47.jpg" },
  { id: 30, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/23.jpg" },
  { id: 31, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/24.jpg" },
  { id: 32, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/46.jpg" },
  { id: 33, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/22.jpg" },
  { id: 34, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/20.jpg" },
  { id: 35, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/45.jpg" },
  { id: 36, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/21.jpg" },
  { id: 37, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/19.jpg" },
  { id: 38, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/44.jpg" },

  { id: 39, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/18.jpg" },
  { id: 40, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/16.jpg" },
  { id: 41, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/43.jpg" },
  { id: 42, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/14.jpg" },
  { id: 43, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/42.jpg" },
  { id: 44, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/13.jpg" },
  { id: 45, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/15.jpg" },
  { id: 46, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/17.jpg" },
    {
    id: 47,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/5.jpg",
  },
   { id: 48, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/41.jpg" },
  { id: 49, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/40.jpg" },
  { id: 50, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/11.jpg" },
  { id: 51, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/9.jpg" },
  { id: 52, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/12.jpg" },
  { id: 53, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8.jpg" },
  { id: 54, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/10.jpg" },
  { id: 55, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/39.jpg" },
  { id: 56, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/38.jpg" },
  { id: 57, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/7.jpg" },
  { id: 58, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/37.jpg" },
  { id: 59, name: "", title: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/6.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleImages = showAll ? mediaImages : mediaImages.slice(0, 9);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeImageModal();
      }
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      <SectionHeading
        title={
          <>
           Media Coverage
          </>
        }
        titleClassName="text-center text-2xl md:text-5xl font-stix mt-20"
      />

      {/* -------- Media Grid -------- */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white cursor-pointer"
              onClick={() => openImageModal(img)}
            >
              <img
                src={img}
                alt={`media-${index}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <GlobalArrowButton onClick={() => setShowAll(true)}>
              Read More
            </GlobalArrowButton>
          </div>
        )}
      </section>

      {/* -------- Center Of Excellence Slider -------- */}
      <CenterOfExcellence
        centres={excellenceImages}
        title="Awards"
        description={false}
        nameOnly={false}
      />

      {/* -------- Image Modal Popup -------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            
            {/* Full Image */}
            <img
              src={selectedImage}
              alt="Full size media"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

"use client"

import React from "react"
import Image from "next/image"

const defaultAwards = [
  {
    id: 1,
    title: "Walk-a-cause Award",
    subtitle: "By Pratigya Foundation",
    year: "2018-2019",
    active: true,
  },
  {
    id: 2,
    title: "Excellence Work In Educational Sector",
    subtitle: "By National Glory Awards",
    year: "2018-2019",
    active: false,
  },
  {
    id: 3,
    title: "Best Research And Innovation University",
    subtitle: "By Global Leaders Award",
    year: "2018-2019",
    active: false,
  },
  {
    id: 4,
    title: "Best Private University",
    subtitle: "By Education Summit Awards",
    year: "2019-2020",
    active: false,
  },
  {
    id: 5,
    title: "Best Private University",
    subtitle: "By Education Summit Awards",
    year: "2019-2020",
    active: false,
  },
  {
    id: 6,
    title: "Excellence in Student Support",
    subtitle: "By National Education Forum",
    year: "2019-2020",
    active: false,
  },
  {
    id: 7,
    title: "Innovation in Research",
    subtitle: "By Global Innovation Council",
    year: "2020-2021",
    active: false,
  },
]

export default function AwardsScrollbar({
  awards = defaultAwards,
  title = "Awards and Accolades",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="">
        {/* Header */}
         <div className="text-left md:text-center mb-6 sm:mb-8">
          <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl text-[var(--foreground)] mb-3">
            {title}
          </h2>
          <p className="text-[var(--light-text-gray)] text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Scrollable timeline */}
          <div className="relative overflow-hidden container mx-auto">
          {/* dashed connector line */}
            <div className="absolute top-[62px] sm:top-[138px] left-[260px] right-[260px] border-b border-dashed border-gray-500 pointer-events-none z-0" />

            <div className="flex gap-6 sm:gap-10 overflow-x-auto pb-6 pt-4 px-8 scrollbar-hide relative z-10 awards-scrollbar">
             {awards.map((award) => (
               <div key={award.id} className="flex flex-col items-center flex-shrink-0 min-w-[200px] sm:min-w-[220px]">
                 {/* Icon + texts with leaf images */}
                 <div className="flex items-center justify-center gap-2 mb-2">
                   <Image
                     src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/awards-leaf.png"
                     alt="Award leaf left"
                     width={50}
                     height={50}
                     className="object-contain"
                   />
                  <div className="flex flex-col items-center text-[var(--foreground)] text-center max-w-[200px]">
                    <h3 className="!text-[18px] font-stix break-words leading-tight">
                      {award.title}
                    </h3>
                    <p className="!text-[12px] sm:text-xs text-gray-500 font-plus-jakarta-sans">{award.subtitle}</p>
                  </div>
                   <Image
                     src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/awards-leaf.png"
                     alt="Award leaf right"
                     width={50}
                     height={50}
                    className="object-contain -scale-x-100"
                   />
                 </div>

                 {/* Year pill */}
                 <div
                   className={`mt-2 rounded-md px-5 py-3 text-xs sm:text-sm font-stix ${
                     award.active
                       ? "bg-[var(--button-red)] text-white shadow-md"
                       : "bg-[#e6e6e6] text-[var(--foreground)]"
                   }`}
                 >
                   {award.year}
                 </div>
               </div>
             ))}
           </div>
         </div>

        {/* scrollbar styling */}
        <style jsx global>{`
          .awards-scrollbar::-webkit-scrollbar {
            height: 4px;
          }
          .awards-scrollbar::-webkit-scrollbar-track {
            background: #f5f5f5;
            border-radius: 9999px;
          }
          .awards-scrollbar::-webkit-scrollbar-thumb {
            background: var(--dark-orange-red);
            border-radius: 9999px;
          }
          .awards-scrollbar {
            scrollbar-color: var(--dark-orange-red) #f5f5f5;
            scrollbar-width: thin;
          }
        `}</style>
      </div>
    </section>
  )
}


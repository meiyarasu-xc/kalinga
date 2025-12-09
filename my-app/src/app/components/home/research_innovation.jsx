import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'

export default function ResearchInnovation() {
  const stats = [
    { label: 'Research Publications', value: '3360+', variant: 'orange' },
    { label: 'Startups', value: '6+', variant: 'white' },
    { label: 'Research Labs', value: '90+', variant: 'white' },
    { label: 'Citations', value: '2136 +', variant: 'white' },
  ]

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Top section: Text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start mb-12 md:mb-16">
          {/* Left content */}
          <div className="pt-4 sm:pt-6 md:pt-12">
            <h5 className="text-sm sm:text-base md:!text-[25px] text-[var(--button-red)] mb-2 sm:mb-2.5 lg:mb-3 font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px]">
              Research At Kalinga
            </h5>
            <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight mb-4 sm:mb-6 text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <div className="mt-4 sm:mt-6">
              <GlobalArrowButton >
                Learn More
              </GlobalArrowButton>
            </div>
          </div>

          {/* Right side with image */}
          <div className="relative flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <div className="relative w-full h-[400px] rounded-[10px] overflow-hidden shadow-2xl">
              <Image 
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/staff-guiding.png"
                alt="Research & Innovation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom section: Statistics Cards in Dark Blue Container */}
        <div className="bg-[var(--dark-blue)] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 sm:p-6 flex flex-col justify-between transition-colors duration-300 bg-[var(--light-gray)] hover:bg-[var(--card-sandal)]"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-stix font-semibold text-[var(--foreground)] mb-4">
                    {stat.label}
                  </h3>
                  <div className="w-full h-px bg-[var(--foreground)] mb-4"></div>
                </div>
                <div>
                  <h3 className="!text-6xl !sm:text-4xl font-stix font-bold text-[var(--foreground)] mb-4">
                    {stat.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

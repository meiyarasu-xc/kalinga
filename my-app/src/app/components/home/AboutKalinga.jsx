"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'
import Link from 'next/link'
const AboutKalinga = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const fullText = "Established in 2013, Kalinga University, Raipur stands as one of the best private universities in Chhattisgarh, strategically located in the Smart City of New Raipur.With a 50-acre green campus, Centres of Excellence, and strong industry placement partnerships, Kalinga University is dedicated to nurturing global leaders through innovation, inclusivity, and excellence.Home to students from over 29+countries, the University offers state-of-the-art education in Arts & Humanities, Commerce & Management,Education,IT mention full form of this, Law, Pharmacy,Science and Technology supported by global collaborations with IBM, Cisco, Bosch, and more."
  
  const truncateLimit = 200
  const truncatedText = fullText.length > truncateLimit ? fullText.slice(0, truncateLimit) + '...' : fullText
  const hiddenText = fullText.length > truncateLimit ? fullText.slice(truncateLimit) : ''
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .about-kalinga-text {
          font-size: 50px !important;
        }
        @media (min-width: 768px) {
          .about-kalinga-text {
            font-size: 100px !important;
          }
        }
        @media (min-width: 1024px) {
          .about-kalinga-text {
            font-size: 110px !important;
          }
        }
      `}} />
      <section className="py-16 ">
        <div className="container mx-auto px-5 flex justify-center relative">
          {/* Single dark blue panel with overlapping image */}
          <div className={`relative bg-[var(--dark-blue)] rounded-2xl p-8 md:p-12 lg:p-16 text-white overflow-visible shadow-2xl w-full max-w-[1254px] transition-all duration-300 ${isExpanded ? 'min-h-[700px] md:min-h-[800px] pb-40 md:pb-48' : 'min-h-[500px] md:min-h-[600px] pb-28 md:pb-36'}`}>
            <div className={`grid md:grid-cols-2 gap-8 items-start relative z-1 transition-all duration-300 ${isExpanded ? 'mb-16 md:mb-20' : 'mb-12 md:mb-16'}`}>
              {/* Left: Title and button */}
              <div className="space-y-6">
                <h2 className="font-stix text-3xl md:text-4xl lg:text-5xl leading-tight">
                Kalinga University — The Pride of Central India
                </h2>
                <div className="mt-6">
                <Link href="/about-us" passHref legacyBehavior>
                <a className="inline-flex">
                <GlobalArrowButton className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                >Learn More</GlobalArrowButton>
                </a>
                </Link>
                </div>
              </div>

              {/* Right: Body text */}
              <div className="text-sm md:text-base text-white/90 leading-relaxed space-y-3">
                <p>
                  {isExpanded ? fullText : truncatedText}
                  {fullText.length > truncateLimit && (
                    <>
                      {' '}
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors cursor-pointer underline underline-offset-2"
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Decorative large outlined "About Kalinga" text (panel-relative and visible) */}
            <div className="pointer-events-none absolute left-6 md:left-10 bottom-6 md:bottom-15   opacity-100 select-none z-2">
              <h2
                className="font-stix about-kalinga-text leading-none whitespace-nowrap"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1.57px #FFFFFF',
                  fontWeight: 400,
                  fontStyle: 'normal'
                }}
              >
                About Kalinga
              </h2>
            </div>

          {/* Overlapping student image on the right side */}
          <div className={`absolute right-8 md:right-16 lg:right-15 z-1 hidden md:block transition-all duration-300 ${isExpanded ? 'top-[70%] -translate-y-[40%]' : 'top-1/2 -translate-y-[15%]'}`}>
            <div className="relative w-[555px] h-[452px] rounded-[10px] overflow-hidden shadow-2xl">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile: show image below on small screens */}
          <div className="mt-8 md:hidden flex justify-center">
            <div className="relative w-full max-w-[320px] h-[280px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutKalinga

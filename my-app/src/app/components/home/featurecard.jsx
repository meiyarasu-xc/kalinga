'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function FeatureCards({ 
  isSlider = true,
  cards = [
    { 
      id: 1, 
      title: 'Global Exposure', 
      body: 'Students from 29+ nationalities create a truly global learning environment. Collaborate, connect, and grow through multi-cultural programs and diverse perspectives.', 
      variant: 'amber' 
    },
    { 
      id: 2, 
      title: 'Vibrant Campus Life', 
      body: 'Experience an unforgettable college life filled with green spaces, lively events, and a dynamic student community.', 
      variant: 'gray' 
    },
    { 
      id: 3, 
      title: 'Career Counseling', 
      body: 'Get personalized guidance and support at every stage of your academic journey — from choosing the right path to landing your dream job.', 
      variant: 'amber' 
    },
    { 
      id: 4, 
      title: 'Wide Range of Programs', 
      body: 'Choose from 130+ industry-relevant programs across disciplines — from Computer Science to Pharmacy — and unlock limitless career opportunities.', 
      variant: 'gray' 
    },
    { 
      id: 5, 
      title: 'Abundant Scholarships', 
      body: 'Avail up to 100% scholarships through merit, sports, cultural, and achiever categories — rewarding talent and ambition.', 
      variant: 'amber' 
    },
    { 
      id: 6, 
      title: 'Industry-Relevant Curriculum', 
      body: 'Aligned with the New Education Policy 2020, our curriculum bridges classroom learning with real-world industry needs.', 
      variant: 'gray' 
    },
    { 
      id: 7, 
      title: 'Holistic Development', 
      body: 'We focus on nurturing confident, well-rounded individuals ready to make informed life and career decisions.', 
      variant: 'amber' 
    },
    { 
      id: 8, 
      title: 'Extensive Research Facilities', 
      body: 'With 90+ advanced labs, including IT and CIF labs, Kalinga University leads in innovation and research excellence.', 
      variant: 'gray' 
    },
    { 
      id: 9, 
      title: 'Experienced Faculties', 
      body: 'Learn from highly qualified professors from India and abroad who inspire and guide students toward leadership and success.', 
      variant: 'amber' 
    },
    { 
      id: 10, 
      title: 'Flagship Events', 
      body: 'Celebrate creativity and achievement through exciting events like Hackathons, Kalinga Utsav, Sports Fest, Moot Courts, and Convocation Ceremonies.', 
      variant: 'gray' 
    },
    { 
      id: 11, 
      title: 'Internships & Industrial Visits', 
      body: 'Gain real-world exposure with internship opportunities and industrial visits that build practical skills and confidence.', 
      variant: 'amber' 
    },
    { 
      id: 12, 
      title: 'Improve Employability', 
      body: 'Develop skills employers value — communication, leadership, teamwork, problem-solving, and critical thinking — beyond academics.', 
      variant: 'gray' 
    },
    { 
      id: 13, 
      title: 'Campus Placement Drives', 
      body: 'With 400+ recruitment partners, students secure placements across top industries and leading organizations.', 
      variant: 'amber' 
    },
    { 
      id: 14, 
      title: 'Networking Opportunities', 
      body: 'Engage with industry leaders, alumni, and professionals through workshops, seminars, and conferences that strengthen your career network.', 
      variant: 'gray' 
    },
    { 
      id: 15, 
      title: 'Cultural Celebrations', 
      body: 'Enjoy a vibrant campus culture through festivals, concerts, talent shows, and open mic events that unite students from all backgrounds.', 
      variant: 'amber' 
    },
    { 
      id: 16, 
      title: 'Community Services', 
      body: 'Join NCC and NSS initiatives and become a socially responsible citizen contributing to meaningful community work.', 
      variant: 'gray' 
    },
    { 
      id: 17, 
      title: 'Educational Tours', 
      body: 'Experience learning beyond classrooms through national and international educational tours, including visits to top industries and destinations like Dubai.', 
      variant: 'amber' 
    },
    { 
      id: 18, 
      title: 'Mentor-Mentee System', 
      body: 'Benefit from personalized guidance through one-on-one mentoring that supports your academic and personal growth.', 
      variant: 'gray' 
    },
    { 
      id: 19, 
      title: 'Emotional Well-Being', 
      body: 'Participate in wellness programs designed to support mental health, reduce stress, and promote a positive learning environment.', 
      variant: 'amber' 
    },
    { 
      id: 20, 
      title: '100% Automation', 
      body: 'Access everything digitally through our student ERP system — from admissions and academics to results, schedules, and notifications.', 
      variant: 'gray' 
    },
  ],
  title = "Why is Kalinga University the Right Choice?",
  fullText = "Spread across 50+ Acres of Land, the University offers fully equipped infrastructure with the most advanced curriculum that prepares students to compete in global opportunities. Every space on our campus generates curiosity and encourages motivation among young minds. We just don't focus on classroom-based learning, but our primary focus is to provide a holistic learning experience to our students so that they can become all-rounders in their personal and professional lives. With a supportive and inclusive learning environment, our students have achieved remarkable success and transformed their DREAMS into REALITY.",
  imageUrl = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  imageAlt = "Kalinga students celebrating"
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [cardExpanded, setCardExpanded] = useState({})
  const swiperRef = useRef(null)
  
  const truncate = (text, limit = 80) => (text?.length > limit ? text.slice(0, limit) + '...' : text)
  const toggleCard = (id) => setCardExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  // Dynamically calculate truncated and hidden text from fullText
  const truncateLimit = 200
  const truncatedText = fullText?.length > truncateLimit ? fullText.slice(0, truncateLimit) : fullText
  const hiddenText = fullText?.length > truncateLimit ? fullText.slice(truncateLimit) : ''
  const displayText = isExpanded ? fullText : truncatedText
 
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto relative">
        {/* Main rounded dark panel */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[var(--dark-blue)] overflow-visible text-white shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 pt-10">
          
          {/* Top section: Image left, Text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-6 sm:mb-8 md:mb-10">
            {/* Image on left - extending outside on top */}
            <div className="relative w-full h-[400px] -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-3d-slant-mirror">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content on right */}
            <div className="flex flex-col justify-center">
              <h2 className="font-stix text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-3 sm:mb-4 text-white">{title}</h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[15px] leading-relaxed">
                {displayText}
                {!isExpanded && hiddenText && (
                  <>
                    {' '}
                    <button 
                      onClick={() => setIsExpanded(true)}
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Read More
                    </button>
                  </>
                )}
                {isExpanded && (
                  <>
                    {hiddenText}
                    {' '}
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Read Less
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Cards row - Grid or Slider */}
          {isSlider ? (
            <div className="relative">
              {/* Swiper Slider */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                navigation={{
                  nextEl: '.feature-cards-swiper-button-next',
                  prevEl: '.feature-cards-swiper-button-prev',
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                className="feature-cards-swiper"
              >
                {cards.map((c) => (
                  <SwiperSlide key={c.id} className="h-auto">
                    <div className="px-2 sm:px-3 h-full">
                      <div className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-6 shadow-xl h-full flex ${c.variant === 'amber' ? 'bg-[var(--card-sandal)] text-black' : 'bg-[var(--card-gray)] text-gray-800'}`} style={{ minHeight: cardExpanded[c.id] ? 'auto' : '200px' }}>
                        <div className="flex flex-col gap-3 sm:gap-4 w-full h-full">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/60 flex-shrink-0" />
                          <div className="flex-1 flex flex-col">
                            <h4 className="font-semibold !text-base mb-1.5 sm:mb-2">{c.title}</h4>
                            <p className="text-xs sm:text-sm leading-relaxed text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] flex-1">
                              {cardExpanded[c.id] ? c.body : truncate(c.body, 60)}
                            </p>
                            {c.body && c.body.length > 50 && (
                              <button
                                onClick={() => toggleCard(c.id)}
                                className="mt-2 text-[var(--button-red)] text-xs sm:text-sm font-semibold hover:opacity-80 transition-opacity self-start"
                              >
                                {cardExpanded[c.id] ? 'Read Less' : 'Read More'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation buttons - bottom right */}
              <div className="flex justify-end items-center gap-3 mt-6 sm:mt-8">
                <button
                  className="feature-cards-swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Previous cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  className="feature-cards-swiper-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Next cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {cards.map((c) => (
                <div
                  key={c.id}
                  className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-6 shadow-xl flex ${c.variant === 'amber' ? 'bg-[var(--card-sandal)] text-black' : 'bg-[var(--card-gray)] text-gray-800'}`} style={{ minHeight: cardExpanded[c.id] ? 'auto' : '200px' }}>
                  <div className="flex flex-col gap-3 sm:gap-4 w-full h-full">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/60 flex-shrink-0" />
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-semibold !text-base mb-1.5 sm:mb-2">{c.title}</h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] flex-1">
                        {cardExpanded[c.id] ? c.body : truncate(c.body, 50)}
                      </p>
                      {c.body && c.body.length > 50 && (
                        <button
                          onClick={() => toggleCard(c.id)}
                          className="mt-2 text-[var(--button-red)] text-xs sm:text-sm font-semibold hover:opacity-80 transition-opacity self-start"
                        >
                          {cardExpanded[c.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

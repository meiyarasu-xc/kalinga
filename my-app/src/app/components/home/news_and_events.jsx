'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalArrowButton from '../general/global-arrow_button'
import FeaturedNewsCard from '../general/featured_news_card'
import SectionHeading from '../general/SectionHeading'

export default function NewsEvents() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [showAllNews, setShowAllNews] = useState(false)
  const datesScrollRef = useRef(null)

  const newsItems = [
    {
      id: 1,
      date: '12 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 2,  
      date: '15 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 3,
      date: '18 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    
  ]

  const events = [
    {
      id: 1,
      date: '12 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 2,
      date: '15 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 3,
      date: '18 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 4,
      date: '20 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 5,
      date: '22 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
    {
      id: 6,
      date: '25 July 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    },
  ]

  // Extract day and month from events dates
  const dateItems = events.map((item) => {
    const parts = item.date.split(' ')
    const day = parts[0]
    const month = parts[1] || ''
    return { day, month }
  })

  const handlePrevDay = () => {
    setSelectedIdx((prev) => (prev - 1 + dateItems.length) % dateItems.length)
    if (datesScrollRef.current) {
      datesScrollRef.current.scrollBy({ left: -120, behavior: 'smooth' })
    }
  }

  const handleNextDay = () => {
    setSelectedIdx((prev) => (prev + 1) % dateItems.length)
    if (datesScrollRef.current) {
      datesScrollRef.current.scrollBy({ left: 120, behavior: 'smooth' })
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .news-scrollbar-show::-webkit-scrollbar {
          width: 8px;
        }
        .news-scrollbar-show::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .news-scrollbar-show::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .news-scrollbar-show::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .news-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .news-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .events-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    <section className="relative w-full py-16">
      <div className="container mx-auto px-2">
        {/* Main Layout: News section with title + Event Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_2.0fr_0.8fr] gap-6 sm:gap-6 mt-10 sm:mt-14 items-end">
          {/* Left section: News & Events title and two cards */}
          <div className="md:col-span-2 flex flex-col">
            {/* Section title */}
            <SectionHeading
              // subtitle="News & Events"
              title="News & Events"
              titleClassName="text-[var(--foreground)] mb-5"
            />
            
            {/* Two column grid for news cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6">
              {/* Column 1: Featured news */}
              <FeaturedNewsCard
                image={newsItems[0].image}
                alt={newsItems[0].title}
                badgeText="Day 5 Highlights"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing"
              />

          {/* Column 2: stacked news list */}
          <div className="w-full">
            <div className="bg-[var(--light-gray)] rounded-lg shadow-lg w-full h-auto md:h-[380px] p-4 sm:p-5 flex flex-col">
              {!showAllNews ? (
                /* First 3 items - always visible when Read More is not clicked */
                <div className="flex-1 space-y-4">
                  {newsItems.slice(0, 3).map((news) => (
                    <div key={news.id} className="flex items-start gap-3">
                      <div className="relative w-22 h-22 rounded-lg overflow-hidden flex-shrink-0" style={{ borderRadius: '10px' }}>
                        <Image 
                          src={news.image} 
                          alt={news.title} 
                          fill
                          className="object-cover" 
                        />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-xs text-gray-600 font-semibold !text-[12px]">{news.date}</p>
                        <p className="text-sm text-gray-800 !font-medium leading-relaxed">{news.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* All items - shown in scrollable container when Read More is clicked */
                <div className="flex-1 overflow-y-scroll news-scrollbar-show space-y-4 max-h-[300px] pr-2">
                  {newsItems.map((news) => (
                    <div key={news.id} className="flex items-start gap-3">
                      <div className="relative w-22 h-22 rounded-lg overflow-hidden flex-shrink-0" style={{ borderRadius: '10px' }}>
                        <Image 
                          src={news.image} 
                          alt={news.title} 
                          fill
                          className="object-cover" 
                        />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-xs text-gray-600 font-semibold !text-[12px]">{news.date}</p>
                        <p className="text-sm text-gray-800 !font-medium leading-relaxed">{news.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {newsItems.length > 3 && (
                <div className="mt-2 flex justify-center flex-shrink-0">
                  <GlobalArrowButton
                    variant="no-arrow"
                    className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                    textClassName="!text-[#000] !font-semibold !ml-0 !px-0"
                    onClick={() => setShowAllNews(!showAllNews)}
                  >
                    {showAllNews ? 'Show Less' : 'Read More'}
                  </GlobalArrowButton>
                </div>
              )}

              <div className="mt-2 flex justify-center flex-shrink-0">
                <Link href="/news-and-events">
                  <GlobalArrowButton
                    variant="no-arrow"
                    className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                    textClassName="!text-[#000] !font-semibold !ml-0 !px-0"
                  >
                    Know More
                  </GlobalArrowButton>
                </Link>
              </div>
            </div>
              </div>
            </div>
          </div>

          {/* Column 3: Event Calendar */}
          <div className="w-full max-w-[380px] md:max-w-[420px]">
            <div className="bg-[var(--dark-blue)] text-white overflow-hidden shadow-lg h-auto md:h-[470px] w-full rounded-[9px] p-4 sm:p-5">
                <div className="pt-2 pb-6 flex justify-center">
                  <h3 className="!text-[30px] font-stix text-center font-medium ">Event Calendar</h3>
                </div>

                {/* Day selector */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mt-[-30px] pt-3 border-b border-white pb-3">
                  <button
                    onClick={handlePrevDay}
                    className="w-8 h-8 sm:w-10 sm:h-10  bg-[var(--dark-blue)] flex items-center justify-center transition-colors flex-shrink-0"
                    aria-label="Previous day"
                  >
                    <img
                      src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/arrow.png"
                      alt="Previous"
                      className="sm:w-10 sm:h-10 object-contain rotate-0"
                    />
                  </button>

                  <div
                    ref={datesScrollRef}
                    className="flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto date-scrollbar-hide flex-1 justify-between md:justify-center px-4 sm:px-6 first:ml-4"
                  >
                    {dateItems.map((item, idx) => {
                      const isActive = selectedIdx === idx
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedIdx(idx)}
                          className={`flex-shrink-0 flex flex-col items-center transition-all duration-200 md:first:ml-15 md:last:mr-2 ${isActive ? '' : 'text-white/70 hover:text-white'}`}
                        >
                          {isActive ? (
                            <div className={`bg-orange-500 text-white rounded-md w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex flex-col items-center justify-center font-bold shadow-md`}>
                              <span className="text-xl sm:text-2xl md:text-3xl">{item.day}</span>
                              <span className="text-[8px] sm:text-[10px] md:text-xs font-medium">{item.month}</span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-0.5">
                              <span className="text-sm sm:text-base md:text-lg font-semibold">{item.day}</span>
                              <span className="text-[10px] sm:text-xs text-white/60">{item.month}</span>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    onClick={handleNextDay}
                    className="w-8 h-8 sm:w-10 sm:h-10  bg-[var(--dark-blue)] flex items-center justify-center shadow-sm  transition-colors flex-shrink-0"
                    aria-label="Next day"
                  >
                    <img
                      src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/arrow.png"
                      alt="Next"
                      className="sm:w-10 sm:h-10 object-contain rotate-180"
                    />
                  </button>
                </div>

                {/* Events list */}
                <div className="overflow-y-auto events-scrollbar-hide max-h-[280px] space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-start gap-3">
                      <div className="relative w-22 h-22 rounded-lg overflow-hidden flex-shrink-0" style={{ borderRadius: '10px' }}>
                        <Image 
                          src={event.image} 
                          alt={event.title} 
                          fill
                          className="object-cover" 
                        />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-xs text-white/70 font-semibold !text-[12px]">{event.date}</p>
                        <p className="text-sm text-white !font-medium leading-relaxed">{event.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

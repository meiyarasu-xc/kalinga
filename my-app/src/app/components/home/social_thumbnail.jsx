import React from 'react'
import Image from 'next/image'

const items = [
  { id: 1, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-1.png', alt: 'Campus speaker' },
  { id: 2, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-2.png', alt: 'Students chatting' },
  { id: 3, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-3.png', alt: 'Lecture' },
  { id: 4, img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-4.png', alt: 'Career guidance' },
]

export default function SocialThumbs({ className = '' }) {
  return (
    <section className={`w-full py-16 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Title */}
        <div className="flex justify-center mb-4 sm:mb-2">
          <h2 className="!text-[50px] md:!text-[100px] leading-[50px] md:leading-[100px] font-stix text-transparent [-webkit-text-stroke:1.57px_var(--button-red)] font-normal not-italic mb-10">Social Media Presence</h2>
        </div>

        {/* Images gallery - Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-1">
          {items.map((it) => (
            <div 
              key={it.id} 
              className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[9.66px] aspect-[301/330]"
            >
              <Image src={it.img} alt={it.alt} fill className="object-cover" />
              <div className="absolute right-1.5 sm:right-2 bottom-1.5 sm:bottom-2 p-1 sm:p-1.5 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" aria-hidden>
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.75 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Instagram follow button - positioned at bottom, centered */}
        <div className="flex justify-center mt-2 sm:mt-8">
          <button className="flex items-center justify-center gap-2 bg-[var(--button-red)] hover:opacity-90 text-white px-6 py-2 rounded-[10px] font-semibold text-sm transition-colors shadow-md">
            <span className="font-light">Follow Us Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.75 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

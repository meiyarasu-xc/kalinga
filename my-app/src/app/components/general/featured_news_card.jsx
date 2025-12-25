import React from 'react'
import Image from 'next/image'

const FeaturedNewsCard = ({ 
  image, 
  alt, 
  badgeText = "Day 5 Highlights", 
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing" 
}) => {
  return (
    <div className="w-full">
      <div className="bg-white overflow-hidden shadow-lg rounded-[9px] w-full h-auto md:h-[380px]">
        <div className="relative h-64 sm:h-80 md:h-[380px]">
          <Image 
            src={image} 
            alt={alt} 
            fill
            className="object-cover" 
          />
          {/* Bottom overlay - reddish-brown semi-transparent */}
          <div 
            className="absolute bottom-0 left-0 right-0 text-white p-4 sm:p-6 !bg-[var(--button-red)]/60 flex flex-col justify-center backdrop-blur-xl h-auto min-h-[110px] sm:h-[110px] rounded-lg"
          >
            <p className="text-xs sm:text-sm tracking-wide font-light mb-1 sm:mb-[5px] mt-[-10px] sm:mt-[-15px]">{badgeText}</p>
            <p className="text-sm sm:text-base md:text-[16px] font-plus-jakarta-sans font-medium leading-[22px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedNewsCard


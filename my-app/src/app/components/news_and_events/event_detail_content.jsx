'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeading from '@/app/components/general/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const EventDetailContent = ({
  tags = [],
  title = '',
  description = [],
  mainImage = {
    src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    alt: 'Event Gallery'
  },
  galleryImages = []
}) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tags/Badges Section */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-3 py-1.5 rounded-lg text-white text-sm font-plus-jakarta-sans whitespace-nowrap ${
                  tag.color === 'orange' ? 'bg-[var(--dark-orange-red)]' :
                  tag.color === 'blue' ? 'bg-[var(--dark-blue)]' :
                  tag.color === 'red' ? 'bg-[var(--button-red)]' :
                  'bg-[var(--dark-blue)]'
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {/* Main Title */}
        {title && (
          <SectionHeading
            title={title}
            titleClassName="mb-6 text-left"
          />
        )}

        {/* Description Paragraphs */}
        {description.length > 0 && (
          <div className="mb-8 md:mb-12 space-y-4">
            {description.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Main Large Image */}
        {mainImage.src && (
          <div className="mb-5">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Gallery Grid or Slider - 4 Smaller Images */}
        {galleryImages.length > 0 && (
          galleryImages.length > 4 ? (
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={16}
                slidesPerView={2}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="gallery-swiper"
              >
                {galleryImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="relative w-full aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default EventDetailContent;



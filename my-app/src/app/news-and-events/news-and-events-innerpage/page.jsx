'use client';

import React from 'react';
import EventDetailContent from '@/app/components/news_and_events/event_detail_content';
import CareerApplicationForm from '@/app/components/careers/CareerApplicationForm';

import AdmissionCareer from '@/app/components/general/admission_cta';
import UpcomingEvents from '@/app/components/admissions/upcoming_events';
const NewsAndEventsInnerPage = () => {
  // Tags/Badges data
  const tags = [
    { label: 'August 25-2025', color: 'orange' },
    { label: 'Upcoming Conferences', color: 'blue' },
    { label: 'Bachelor of Animation & Visual Effects B.An & VFXO', color: 'red' }
  ];

  // Main title
  const title = 'Lorem ipsum dolor sit amet, consectetur';

  // Description paragraphs
  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi'
  ];

  // Main large image
  const mainImage = {
    src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    alt: 'Event Gallery - Students in traditional attire'
  };

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Dance performance'
    },
    {
      id: 2,
      src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Stage performance with Kalinga University banner'
    },
    {
      id: 3,
      src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Singer on stage'
    },
    {
      id: 4,
      src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Group performance on stage'
    },
    {
      id: 5,
      src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Group performance on stage'
    }
  ];

  return (
    <>
      <EventDetailContent
        tags={tags}
        title={title}
        description={description}
        mainImage={mainImage}
        galleryImages={galleryImages}
      />
      <CareerApplicationForm
        heading="Registration Form"
        description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
        backgroundClass="bg-[var(--dark-blue)]"
        hideTabs={true}
        submitLabel="Submit Career Details"
        useArrowSubmitButton={true}
        arrowSubmitVariant="white"
      />
      <UpcomingEvents />
      <AdmissionCareer />
    </>
  );
};

export default NewsAndEventsInnerPage;


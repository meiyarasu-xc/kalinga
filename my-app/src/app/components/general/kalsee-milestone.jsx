'use client';

import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function KalseeMilestone({ imageSrc, milestones: customMilestones }) {
  const defaultMilestones = [
    {
      value: '4 LPA',
      label: 'Average Package',
    },
    {
      value: '12L +',
      label: 'Highest Package',
    },
    {
      value: '400 +',
      label: 'Recruitment Partners',
    },
  ];

  const milestones = customMilestones || defaultMilestones;
  const defaultImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-cta-img.png";
  const finalImageSrc = imageSrc || defaultImageSrc;

  return (
    <section className="relative px-2 py-2">
      <div className="">
        
        {/* Dark Blue Banner */}
        <div className="relative bg-[var(--dark-blue)] rounded-2xl overflow-visible">
          <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-center md:justify-between pt-10 md:pt-0 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
            {/* First Milestone */}
            <div className="flex flex-col items-center md:items-start z-10 w-full md:w-auto">
              <SectionHeading
                title={milestones[0].value}
                titleClassName="!text-[var(--dark-orange-red)] mb-1 sm:mb-2 text-center md:text-left"
              />
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-stix text-center md:text-left">
                {milestones[0].label}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-[var(--dark-orange-red)] self-center"></div>

            {/* Second Milestone */}
            <div className="flex flex-col items-center md:items-start z-10 w-full md:w-auto">
              <SectionHeading
                title={milestones[1].value}
                titleClassName="!text-[var(--dark-orange-red)] mb-1 sm:mb-2 text-center md:text-left"
              />
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-stix text-center md:text-left">
                {milestones[1].label}
              </p>
            </div>

            {/* Student Image - Between 2nd and 3rd, top extends above banner */}
            <div className="relative flex-shrink-0 z-20 -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 order-last md:order-none">
              <div className="relative w-32 h-40 sm:w-36 sm:h-48 md:w-48 md:h-64 lg:w-56 lg:h-72">
                <Image
                  src={finalImageSrc}
                  alt="Student"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-[var(--dark-orange-red)] self-center"></div>

            {/* Third Milestone */}
            <div className="flex flex-col items-center md:items-start z-10 w-full md:w-auto">
              <SectionHeading
                title={milestones[2].value}
                titleClassName="!text-[var(--dark-orange-red)] mb-1 sm:mb-2 text-center md:text-left"
              />
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-stix text-center md:text-left">
                {milestones[2].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


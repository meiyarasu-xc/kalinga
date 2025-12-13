"use client";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const defaultActivities = [
  {
    id: 1,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 3,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
];

export default function StudentActivities({
  title = "Student Activities",
  subtitle = "Lorem ipsum dolor sit amet, consectetur",
  activities = defaultActivities,
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-16">
      <SectionHeading
        title={title}
        subtitle={subtitle}
        subtitleClassName="text-center"
        titleClassName="text-center"
      />
      <div className="container mx-auto px-6 mt-5">
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="student-activities-swiper !pb-12 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
          >
            {activities.map((activity) => (
              <SwiperSlide key={activity.id}>
                <div className="bg-[var(--light-gray)] rounded-lg p-5 h-full flex flex-col">
                  <div className="relative">
                    <Image
                      src={activity.imageSrc}
                      alt={activity.imageAlt}
                      width={500}
                      height={500}
                      className="rounded-lg object-cover w-full"
                    />
                    {activity.date && (
                      <div className="absolute bottom-3 right-3 bg-[var(--dark-orange-red-light)] px-3 py-1.5 rounded text-[#000] text-[10px] font-medium">
                        {activity.date}
                      </div>
                    )}
                  </div>
                  <h3 className="text-left text-lg mt-5 mb-2 leading-normal">{activity.title}</h3>
                  <p className="text-left flex-grow">{activity.description}</p>
                  <GlobalArrowButton
                    className="w-fit mt-1 !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                    textClassName="!text-[var(--button-red)]  !px-0"
                    arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                    arrowIconClassName="!text-white"
                  >
                    {activity.buttonText}
                  </GlobalArrowButton>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3 mt-4 md:absolute md:top-0 md:right-0 md:mt-0">
            <button
              ref={prevRef}
              className="student-activities-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="student-activities-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
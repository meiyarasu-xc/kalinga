"use client";

import React from 'react'
import MainIntro from '@/app/components/about/main_intro'
import ImageContent from '@/app/components/ccrc/imagecontent'
import ImageListItem from '@/app/components/ccrc/imagelistitem'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/general/tab'
const TrainingAndPlacementCell = () => {
    const items = [
        {
            id: 1,
            text: "With our personalised training programs, expert-led sessions, and interview preparation, you will be well-prepared to clear any job interview according to your skill set. Our expert mentors go beyond and guide you with skills that companies are looking for in the current job market, and even update the training modules accordingly. Apart from this, we also keep the database of job openings in various companies up-to-date, so that our students don't miss out on any opportunities. With our strong industry connections, we conduct campus drives each year, ensuring that our graduates are placed in leading companies with competitive salary packages."
        },
    ]
    return (
    <>
    <MainIntro
    title="Training And Placement Cell"
    description={[
      "The Career and Corporate Centre of Kalinga University is a hub for career guidance and training, and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations. The Kalinga University campus placements support cell introduces you to the professional world. We don't just prepare you for the corporate world, but give you a 360-degree training so that you can turn out to be a confident individual who is ready to tackle any challenge in life.",
      "With our personalised training programs, expert-led sessions, and interview preparation, you will be well-prepared to clear any job interview according to your skill set. Our expert mentors go beyond and guide you with skills that companies are looking for in the current job market, and even update the training modules accordingly. Apart from this, we also keep the database of job openings in various companies up-to-date, so that our students don't miss out on any opportunities. With our strong industry connections, we conduct campus drives each year, ensuring that our graduates are placed in leading companies with competitive salary packages."
    ]}
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/training-and-placement-cell-banner.webp"
    imageAlt="Training And Placement Cell"
    initialVisibleParagraphs={1}
    showKnowMore={true}
    />
    <ImageListItem items={items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/training-and-placement-cell-banner.webp" title="Training And Placement Cell" />
    <ImageContent
    title="Training And Placement Cell"
    description="The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support."
    imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/training-and-placement-cell-banner.webp"
    imageAlt="Training And Placement Cell"
    buttonLink="/career-and-corporate-resource-centre"
    buttonText="Explore More"
    />
    <div className="mt-8 rounded-2xl bg-[var(--card-gray)] p-5 md:p-7">
      <Tabs defaultValue="tab1">
        <TabsList className="gap-0">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1" className="pt-7">
          <h3 className="font-stix text-[var(--foreground)]">
            Tab 1 Content
          </h3>
          <p className="mt-5 text-[var(--light-text-gray)]">
            Add your content here for tab 1
          </p>
        </TabsContent>

        <TabsContent value="tab2" className="pt-7">
          <h3 className="font-stix text-2xl font-bold text-[var(--foreground)]">
            Tab 2 Content
          </h3>
          <p className="mt-5 text-[var(--light-text-gray)]">
            Add your content here for tab 2
          </p>
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}

export default TrainingAndPlacementCell
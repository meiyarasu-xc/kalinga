"use client"
import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ProgramsOffered from "../components/department/programs-offered"; 
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import MainIntro from "../components/about/main_intro";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
import MentorIntro from "../components/department/dept_head_intro";
import CenterOfExcellence from "../components/about/center_of_excellence";
import AwardsScrollbar from "../components/home/awards-scrollbar";  
import ImageContent from "../components/ccrc/imagecontent";
import Testimonials from "../components/home/Testimonials";
import Gallery from "@/app/components/general/gallery";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import DataTable from "@/app/components/general/data-table";
import SectionHeading from "@/app/components/general/SectionHeading";
import CareerApplicationForm from "../components/careers/CareerApplicationForm";



export default function Alumini() {
  const videoItems = [
    {
      id: 1,
      title: "Video 1",
      description: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
 const testimonials = [{
  id: 1,
  name: "David Chen",
  role: "Founder, TechFlow",
  quote: "The mentorship I received was transformative. They didn't just help me refine my pitch; they helped me reshape my entire business model for scalability.",
  image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/students-say-2.webp",
  theme: "orange"
},
{
  id: 2,
  name: "David Chen",
  role: "Founder, TechFlow",
  quote: "The mentorship I received was transformative. They didn't just help me refine my pitch; they helped me reshape my entire business model for scalability.",
  image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/students-say-2.webp",
  theme: "orange"
},
{
  id: 3,
  name: "David Chen",
  role: "Founder, TechFlow",
  quote: "The mentorship I received was transformative. They didn't just help me refine my pitch; they helped me reshape my entire business model for scalability.",
  image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/students-say-2.webp",
  theme: "orange"
}]
const data = [
  {
    id: 1,
    name: "Ravi Kumar",
    title: "Senior Software Engineer, Infosys",
  },
  {
    id: 2,
    name: "Ananya Singh",
    title: "Product Manager, TCS",
  },
  {
    id: 3,
    name: "Mohit Verma",
    title: "Data Analyst, Deloitte",
  },
];
const columns = [
  {
    id: 1,
    key: "name",
    label: "Name of member",
    width: "w-48",
  },
  {
    id: 2,
    key: "title",
    label: "Title",
    width: "w-48",
  },
];

  const newsConferences = [
    {
      id: 1,
      title: "Annual Research Symposium 2025",
      date: "November 10 · 2025",
      category: "Research & Innovation",
      description: "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.",
    },
    {
      id: 2,
      title: "International Education Summit",
      date: "December 05 · 2025",
      category: "Education",
      description: "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.",
    },
  ];
  const centres = [
    {
      id: 1,
      name: "Rajasthan Global Security Pvt. Ltd.",
      title: "Rapid prototyping & mentoring",
    },
    {
      id: 2,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
      title: "Rapid prototyping & mentoring",
    },
    {
      id: 3,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
      title: "Rapid prototyping & mentoring",
    },
    {
      id: 4,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
      title: "Rapid prototyping & mentoring",
    },
  ];
  const galleryImages = [
    {
      id: 1,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/Alumni+1+1.webp",
      alt: "Gallery Image 1",
    },
  ];
  const AlumniMeetImages = [
    {
      id: 1,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/Alumni+1+1.webp",
      alt: "Gallery Image 1",
    },
  ];
  return (
    <div>
      <ImageContent subtitleclassName="!hidden" titleClassName="!hidden" imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/Alumni+1+1.webp" title="About the KU Alumni Association" description="The Kalinga University’s alumni network is an open platform where our students share their experiences and build lifelong connections. More than creating a network, our current students and alumni from different academic backgrounds share their experiences from their professional journey, offer tips and tricks on how to crack any job interview, and motivate candidates." />

      <Testimonials testimonials={testimonials} className="bg-[var(--dark-blue)]" subtitleClassName="!text-white py-6" titleClassName="!text-white"></Testimonials>
      <OrganogramOfKalinga 
        title="Download Alumni Handbook"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ."
        buttonLabel="Explore Now"
        href="#"
      
      />
   <Gallery title=" Alumni  Glimpse" images={galleryImages} />
   <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass="text-gray-600"
        swiperClassName="ccrc-video-slider"
      />
    
     

      <UpcomingConferences 
        conferences={newsConferences}
        title="Alumni Meet"
    
      />
      <CenterOfExcellence
        centres={centres}
        title=" Alumni Cell"
        nameOnly={true}
        showDescription={false}
      />
      <SectionHeading
        title="Members of Our Alumni Association"
        titleClassName="text-center py-5"
      />
      <DataTable
        data={data}
        columns={columns}
        className="pb-20"
      />
    
        <CareerApplicationForm
          heading="Alumni Association Registration Form"
          description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
          backgroundClass="bg-[var(--button-red)]"
          hideTabs={true}
          submitLabel="Submit Alumni Details"
          useArrowSubmitButton={true}
          arrowSubmitVariant="white"
        />
  
   <Gallery title=" Alumni Meet" images={AlumniMeetImages} />
    
      <AdmissionCareer />
    </div>
  );        
}
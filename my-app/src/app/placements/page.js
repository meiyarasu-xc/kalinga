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
import MediaCardSlider from "@/app/components/general/media-card-slider";

export default function Research() {

  
  
  const links = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Entrepreneurial+Thinking.svg",
      title: "Entrepreneurial Thinking ",
      description: "We’re here to put your entrepreneurial ideas into action. Here, you will not just dream but build something real that solves people's problems.",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Backed+By+Powerful+Resources.svg",
      title: "Backed By Powerful Resources",
      description: "You won’t need to hassle anywhere to build your company; get complete support under one roof. From brainstorming ideas to product selling, you are free to utilise our in-house resources at any time.",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Build+Networks.svg",
      title: "Build Networks",
      description: "We organise industrial visits, seminars, guest lectures, and industrial talks every week, which help our young minds build new connections and clarity in launching their businesses.",
    },
    {
      id: 4,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Trainings+%26+Workshops.svg",
      title: "Trainings & Workshops",
      description: "To develop an entrepreneurial spirit among young students, we organise various hands-on training programs where they learn to build a plan, product, learn selling and marketing tactics, and lead like a true leader. ",
    },
    {
      id: 5,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Fundraising.svg",
      title: "Fundraising",
      description: "At Kalinga, you’ll not just learn to raise money but also to pitch ideas with power and purpose in our fundraising master class sessions. ",
    },
    {
      id: 6,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Business+Plan+Development.svg",
      title: "Business Plan Development",
      description: "We will guide you in building a strategic business plan from the idea stage to the launch stage, helping you grow the right way.",
    },
  ]
  const links2 = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Entrepreneurial+Thinking.svg",
      title: "Entrepreneurial Thinking ",
      description: "We’re here to put your entrepreneurial ideas into action. Here, you will not just dream but build something real that solves people's problems.",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Backed+By+Powerful+Resources.svg",
      title: "Backed By Powerful Resources",
      description: "You won’t need to hassle anywhere to build your company; get complete support under one roof. From brainstorming ideas to product selling, you are free to utilise our in-house resources at any time.",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Build+Networks.svg",
      title: "Build Networks",
      description: "We organise industrial visits, seminars, guest lectures, and industrial talks every week, which help our young minds build new connections and clarity in launching their businesses.",
    },
   
  ]
  const videoItems = [
    {
      id: 1,
      title: "Video 1",
      description: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div>
      <MainIntro title="Placement Overview" description="Kalinga University is a leading institution for research and innovation. We are committed to providing a platform for research and innovation to our students and faculty." imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg" imageAlt="Kalinga University Research" />

    
      <QuickLinks links={links} title="Placement Overview" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
       backgroundColor="bg-white" textColorClassName="text-black" showReadMore={false} />
    
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass="text-gray-600"
        swiperClassName="ccrc-video-slider"
      />
      <QuickLinks titleClassName="text-white" links={links2} />
    
      <FAQ 
        variant="button"
        buttons={[
          {
            id: 1,
            title: "Placements 2024-2025",
            description: "Lorem ipsum...",
            buttons: [
              { label: "Annual Reports", onClick: () => {} },
              { label: "Placement Details", onClick: () => {} }
            ]
          }
        ]}
      />
     
 
      <AdmissionCareer />
    </div>
  );        
}
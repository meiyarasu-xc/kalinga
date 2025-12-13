import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import DeptHeadIntro from "../../components/department/dept_head_intro";
import DeptSyllabus from "../../components/department/dept_syllabus";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";
import EligibilityCriteria from "../../components/course/eligibility_criteria";
import CareerPath from "../../components/course/career_path";
import BoardStudies from "../../components/course/board-studies";
import WhyStudy from "@/app/components/department/why-study";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CourseNavigation from "@/app/components/general/course-navigation";
import QuickLinks from "@/app/components/general/quick_links";

function Courses() {
  // MainIntro content
  const mainIntroContent = {
    title: "Have you ever wondered how impossible visuals are used in movies and games?",
    subtitle: "About The Program",
    description: [
      "A Bachelor of Animation & Visual Effects (B.An & VFX) program is a magical career option for individuals interested in bringing their unique ideas to the screen. The program focuses on creating moving images and visuals for the entertainment industry, utilising various artistic and technical skills for games, films, television, and other digital platforms.",
      "Students will learn 2D and 3D animation techniques, character design, VFX simulations, storyboarding, and the tools and software used in the industry.",
    ],
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    imageAlt: "Kalinga University campus",
  };

  // PublicationGrid content
  const publicationStats = [
    {
      title: "Publications",
      value: "1250 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Startups",
      value: "12 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Awards",
      value: "63 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Conferences",
      value: "78 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ];

  // EligibilityCriteria content
  const eligibilityContent = {
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/course_page.webp",
    imageAlt: "Students",
    duration: "3 Years (6 Semesters)",
    title: "Eligibility Criteria",
    criteria: [
      "The candidate should be a 12th pass with 45% aggregate marks.",
      'Take the Entrance Test: <a href="#" class="text-white hover:underline inline-flex items-center gap-1">KALSEE<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[var(--dark-orange-red)]"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a>.',
    ],
    admissionTitle: "Start Your Creative Journey in Animation & Visual Effects Today",
    admissionButtonLabel: "Admission Open",
  };

  // CareerPath content
  const careerPathContent = {
    title: "Career Pathway",
    description: "Get ready to turn your unique ideas into reality in the world of tech and design with limitless career opportunities.",
    careers: [
      {
        id: 1,
        title: "3D Animator",
        description: "Create 3D space, characters, and objects using advanced animation techniques.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 2,
        title: "VFX Artist",
        description: "Create realistic effects like a transformation or an explosion by combining footage.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 3,
        title: "Storyboard Artist",
        description: "Plan camera angles, shots, and scenes before production begins.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 4,
        title: "Motion Graphics Designer",
        description: "Create animated visuals by combining animation, graphic design, and storytelling.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 5,
        title: "Character Designer",
        description: "Bring characters to life through sketches, digital arts, and 3D models.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 6,
        title: "Video Editor",
        description: "Convert raw footage into a final polished video using different editing software.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 7,
        title: "Game Animator",
        description: "Use animation software to develop characters, objects, and creatures.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 8,
        title: "Compositing Artist",
        description: "Combine multiple visual elements and create a realistic final image.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
      {
        id: 9,
        title: "Texturing Artist",
        description: "Create and apply textures to 3D models in games, movies, and animations.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      },
    ],
  };

  // WhyStudy content
  const whyStudyContent = {
    sectionTitle: "Specialization",
    backgroundImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp",
    items: [
      {
        id: 1,
        title: "Become Tech-Savvy",
        body: "The world needs new technologies, and companies are hunting for skilled professionals who generate code or are good problem solvers. We'll help you turn your ideas into a viral application.",
        variant: "gray",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg",
      },
      {
        id: 2,
        title: "Industry-Ready Programs",
        body: "We design programs with the latest tools and industry practices so you graduate with the skills employers seek and the confidence to build real-world solutions.",
        variant: "amber",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/university.svg",
      },
      {
        id: 3,
        title: "Future-Proof Skills",
        body: "Learn critical thinking, communication, and collaboration alongside core tech so you can adapt quickly and lead in fast-changing digital environments.",
        variant: "gray",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg",
      },
    ],
  };

  // FAQ content
  const faqContent = {
    title: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "What is the admission process?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 2,
        question: "What are the eligibility criteria?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 3,
        question: "What documents are required?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 4,
        question: "How can I apply for scholarships?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 5,
        question: "What is the fee structure?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
    ],
  };

  // QuickLinks content
  const quickLinksContent = {
    title: "Quick Links",
    description: "Explore our comprehensive resources and services designed to support your academic journey and career development.",
    links: [
      {
        id: 1,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Admissions",
        description: "Learn about our admission process, eligibility criteria, and how to apply to your desired program.",
      },
      {
        id: 2,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Scholarships",
        description: "Discover various scholarship opportunities available to help fund your education at Kalinga University.",
      },
      {
        id: 3,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Placements",
        description: "Explore our placement opportunities and career services that connect students with top employers.",
      },
    ],
  };

  // Course Navigation Tabs
  const navigationTabs = [
    { id: 'about', label: 'About The Program' },
    { id: 'specialization', label: 'Specialisations' },
    { id: 'career', label: 'Career Pathways' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'duration', label: 'Duration' },
    { id: 'fees', label: 'Fees' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'learning-outcomes', label: 'Learning Outcomes' },
    { id: 'hiring-partners', label: 'Hiring Partners' },
    { id: 'beyond-curriculum', label: 'Beyond The Curriculum' },
    { id: 'activities', label: 'Activities & Events' },
  ];

  return (
    <div>
      <CourseNavigation tabs={navigationTabs} />
      <div id="about">
        <MainIntro 
          title={mainIntroContent.title}
          subtitle={mainIntroContent.subtitle}
          description={mainIntroContent.description}
          imageUrl={mainIntroContent.imageUrl}
          imageAlt={mainIntroContent.imageAlt}
        />
      </div>
      <PublicationGrid stats={publicationStats} />
      <div id="specialization">
        <WhyStudy 
          sectionTitle={whyStudyContent.sectionTitle}
          backgroundImage={whyStudyContent.backgroundImage}
          items={whyStudyContent.items}
        />
      </div>
      <div id="career">
        <CareerPath 
          title={careerPathContent.title}
          description={careerPathContent.description}
          careers={careerPathContent.careers}
        />
      </div>
      <div id="eligibility">
        <EligibilityCriteria 
          imageUrl={eligibilityContent.imageUrl}
          imageAlt={eligibilityContent.imageAlt}
          duration={eligibilityContent.duration}
          title={eligibilityContent.title}
          criteria={eligibilityContent.criteria}
          admissionTitle={eligibilityContent.admissionTitle}
          admissionButtonLabel={eligibilityContent.admissionButtonLabel}
        />
      </div>
      <div id="duration">
        {/* Duration section - content to be added */}
      </div>
      <div id="fees">
        {/* Fees section - content to be added */}
      </div>
      <div id="syllabus">
        <DeptSyllabus />
      </div>
      <div id="learning-outcomes">
        {/* Learning Outcomes section - content to be added */}
      </div>
      <div id="hiring-partners">
        {/* Hiring Partners section - content to be added */}
      </div>
      <div id="beyond-curriculum">
        {/* Beyond the Curriculum section - content to be added */}
      </div>
      <OrganogramOfKalinga
        title="Organogram of Kalinga University"
        description="Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence."
        buttonLabel="Explore Now"
        href="/about-us"
        buttonClassName="!bg-white !text-black"
        arrowClassName="!bg-[var(--dark-orange-red)]"
        arrowIconClassName="!text-white"
        textClassName="!text-black"
        cardBackgroundColor="bg-[var(--button-red)]"
      />
      <div id="facilities">
        <Facility />
      </div>
      <QuickLinks 
        title={quickLinksContent.title}
        description={quickLinksContent.description}
        links={quickLinksContent.links}
        titleClassName="text-white"
      />
      <FAQ 
        title={faqContent.title}
        items={faqContent.items}
      />
      {/* <BoardStudies /> */}
      <div id="activities">
        <StudentActivities />
      </div>
      <AdmissionCareer />
    </div>
  );
}

export default Courses;
import AboutHero from "../components/about/AboutHero";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import WhoWeAre from "../components/about/who_we_are";
import OurJourney from "../components/about/our_journey";
import CenterOfExcellence from "../components/about/center_of_excellence";
import Leadership from "../components/about/leadership";
import Facility from "../components/admissions/facility";
import AccreditationRanking from "../components/home/AccreditationRanking";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import AdmissionCareer from "../components/general/admission_cta";
import FeatureCards from "../components/home/featurecard";
import GlobalPresence from "../components/home/global_presence";

const aboutFeatureCards = [
  {
    id: 1,
    title: 'Global Exposure & Campus Life',
    body: 'Students from 29+ nationalities, vibrant events, green campus, cultural fests, NCC/NSS, educational tours (incl. Dubai), and 100% ERP-driven automation.',
    variant: 'gray',
  },
  {
    id: 2,
    title: 'Career & Curriculum Edge',
    body: '130+ industry-relevant programs, NEP 2020-aligned curriculum, internships & industrial visits, career counseling, mentor-mentee support, 90+ labs and research excellence.',
    variant: 'amber',
  },
  {
    id: 3,
    title: 'Scholarships & Placements',
    body: 'Up to 100% scholarships (merit, sports, cultural), 400+ recruitment partners, employability skills, networking, flagship hackathons, and strong placement drives.',
    variant: 'gray',
  },
];

export default function About() {
  return (
    <div>
      <MainIntro />
      <AccreditationRanking />
      <VisionMission />
      <WhoWeAre />
      <Leadership />
      <AccreditationRanking />
      <OurJourney />
    <CenterOfExcellence />
    <OrganogramOfKalinga />
    <FeatureCards 
      isSlider={true}
      cards={aboutFeatureCards}
      title="Discover What Makes Kalinga University Exceptional"
      fullText="Kalinga University stands as a beacon of academic excellence, committed to nurturing future leaders through innovative education, cutting-edge research, and holistic development. Our institution combines traditional values with modern teaching methodologies to create an environment where students can thrive academically, professionally, and personally. With state-of-the-art facilities, experienced faculty, and strong industry connections, we provide a comprehensive educational experience that prepares students for success in their chosen fields."
      truncatedText="Kalinga University stands as a beacon of academic excellence, committed to nurturing future leaders through innovative education, cutting-edge research, and holistic development."
      hiddenText=" Our institution combines traditional values with modern teaching methodologies to create an environment where students can thrive academically, professionally, and personally. With state-of-the-art facilities, experienced faculty, and strong industry connections, we provide a comprehensive educational experience that prepares students for success in their chosen fields."
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Kalinga University campus"
    />
    <Facility />
    <GlobalPresence 
      subtitle="Global Presence"
      title="Building Bridges Across Continents"
      description="Kalinga University welcomes students from over 50 countries, creating a vibrant multicultural community. Through international exchange programs, collaborative research initiatives, and diverse cultural activities, we prepare students to become global citizens ready to make a positive impact worldwide."
      logos={['Infosys','Citi','Microsoft','Adobe','Cognizant','PayPal']}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png"
      imageAlt="Kalinga University global presence map"
      subtitleColor="text-[var(--button-red)]"
      titleColor="text-[var(--foreground)]"
      descriptionColor="text-gray-600"
      backgroundColor="bg-transparent"
    />
    <AdmissionCareer />
    </div>
  );
}


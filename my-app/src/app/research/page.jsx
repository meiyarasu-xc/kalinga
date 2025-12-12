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
export default function Research() {

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
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
    },
    {
      id: 2,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
      title: "Rapid prototyping & mentoring",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
    },
    {
      id: 3,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
      title: "Rapid prototyping & mentoring",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
    },
  ];
  const awards = [
    {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },  {
      id: 1,
      year: "2024",
     
      active: true,
    },
  ];
  return (
    <div>
      <MainIntro title="Research at Kalinga University" description="Kalinga University is a leading institution for research and innovation. We are committed to providing a platform for research and innovation to our students and faculty." imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg" imageAlt="Kalinga University Research" />

      <PublicationGrid  />
      <OrganogramOfKalinga 
        title="Apply of Kalinga University"
        description="Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence."
        buttonLabel="Explore Now"
        href="/about-us"
      
      />
      <UGCLogo />
      <QuickLinks titleClassName="text-white" />
      <MentorIntro   imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png"
  title = "Mr. Amul"
  subtitle = "Head of Research"
  department = "Faculty of Information Technology"
  quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />  
      <FAQ 
        title="Research Committee Members" 
        subtitleClassName="!hidden" 
        variant="table-display"
        tableColumns={[
          { key: "slNo", label: "Sl. No", width: "w-20" },
          { key: "name", label: "Name of member", width: "w-48" },
          { key: "designation", label: "Designation", width: "flex-1" },
          { key: "category", label: "Category", width: "w-40" }
        ]}
        tableSections={[
          {
            id: 1,
            title: "2023-2024",
            data: [
              { slNo: 1, name: "Dr. John Smith", designation: "Professor/Computer Science", category: "Chairperson" },
              { slNo: 2, name: "Dr. Jane Doe", designation: "Professor/Mechanical Engineering", category: "Member" },
              { slNo: 3, name: "Dr. Robert Johnson", designation: "Associate Professor/ECE", category: "Member" },
              { slNo: 4, name: "Dr. Sarah Williams", designation: "Assistant Professor/Research", category: "Member" },
              { slNo: 5, name: "Dr. Michael Brown", designation: "Professor/Pharmacy", category: "Member" },
              { slNo: 6, name: "Dr. Emily Davis", designation: "Associate Professor/Biotechnology", category: "Member" },
              { slNo: 7, name: "Dr. David Wilson", designation: "External Expert", category: "Asso. Committed" },
              { slNo: 8, name: "Dr. Lisa Anderson", designation: "Professor/Mathematics", category: "Member" },
              { slNo: 9, name: "Dr. James Taylor", designation: "Associate Professor/Physics", category: "Member" }
            ]
          }
        ]}
        overflowX={false}
      />
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
      <ResearchSixGridButtons />

      <UpcomingConferences 
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
    
      />
          <CenterOfExcellence
        centres={centres}
        title=" Collaborative Activities/MoU"
        description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation."
      />
      <AwardsScrollbar 
        awards={awards} 
        hideTitle={true}
        headerButtonLabel="View All Awards"
        onHeaderButtonClick={() => console.log('View all awards clicked')}
      />
      <AdmissionCareer />
    </div>
  );        
}
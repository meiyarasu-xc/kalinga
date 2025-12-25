import DeptSyllabus from "../components/department/dept_syllabus";
import HeroSectionTwo from "../components/general/hero-section-two";
import KalseeApplicationForm from "../components/kalsee/kalsee-application-form";
import KalseeMilestone from "../components/general/kalsee-milestone";
import MainIntro from "../components/about/main_intro";
import ImageListItem from "../components/ccrc/imagelistitem";
import OurPrograms from "../components/admissions/our_programs";
import AdmissionSteps from "../components/admissions/admission-steps";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import SampleTesting from '../components/cif/sample_testing';
import Testimonials from "../components/home/Testimonials";
export default function KalseePage() {
  const milestones = [
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
  ]
  const faqItems = [
    {
      question: "What is the purpose of KU's KAL-MAT exam?",
      answer: "We have designed this exam to assess the logical skills, communication skills, and subject knowledge of students who want to pursue their careers in BBA and MBA programs."
    },
    {
      question: "How can I prepare for the KAL-MAT exam?",
      answer: "Some of the prep tips include: Clear all your concepts till class 12th. Give a specific time to all 4 subjects during your preparation. Focus on weak subjects or chapters. Practice sample papers or mock tests regularly. Refer to books of reputed publishers."
    },
    {
      question: "Is KAL-MAT mandatory for admission into BBA and MBA programs?",
      answer: "Yes, if you want to secure your spot in our BBA and MBA programs, then you compulsorily have to give KAL-MAT."
    },
    {
      question: "How long will my score be valid?",
      answer: "Your KAL-MAT score will be valid for one academic year."
    },
    {
      question: "What time management strategies can I follow during the exam?",
      answer: "First, scan all questions carefully. Prioritise solving easier questions. Manage your time for each question. Solve difficult questions in the end."
    },
    {
      question: "When will the KAL-MAT results be declared?",
      answer: "Within one week, you'll get the results via email."
    },
    {
      question: "What if I face any technical issues during the exam?",
      answer: "If candidates face any technical issues, they must immediately inform the support team. We can also reschedule the exam depending on the situation."
    },
  ]
  const testimonials = [
    {
      name: "John Doe",
      role: "Student",
      quote: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      name: "John Smith",
      description: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      name: "Jane Doe",
      role: "Student",
      quote: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]
  const kifSteps = [
    {
      title: "Step 1: Visit & Apply",
      description: "Visit https://admissions.kalingauniversity.ac.in/ and apply for the KAL-MAT Exam.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 2: Fill Application Form",
      description: "Fill out the online application form with your details.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 3: Pay Application Fees",
      description: "Pay the application fees to complete your registration.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },  
    {
      title: "Step 4: Receive Login Details",
      description: "Get login details & scheduling link within 24 hours.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 5: Take the CBT",
      description: "Take the Computer-Based Test (CBT) as per your scheduled date.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 6: Check Results",
      description: "Check your final results online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 7: Welcome to KU",
      description: "Welcome to Kalinga University!",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]

  const links = [
    {
      title: "Apply Now",
      description: "Apply for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Prepare for KALSEE",
      description: "Prepare for KALSEE by studying the exam pattern and syllabus.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Take the Exam",
      description: "Take the KALSEE exam by attending the exam center on the scheduled date.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]
  const boxItems = [
    {
      title: "Eligibility",
      description: "10 + 2 For BBA, Graduation For MBA"
    },
    {
      title: "Mode",
      description: "Online; Flexible scheduling for BBA & fixed date for MBA"
    },
    {
      title: "Exam Dates & Registration",
      description: "BBA - Anytime within a week after registration, MBA - 8th March 2025"
    },
    {
      title: "Exam Pattern",
      description: "MCQ-Based"
    },
    {
      title: "Total Questions",
      description: "90 questions, 90 minutes for BBA and MBA"
    },
    {
      title: "Negative Marking",
      description: "No Negative Marking"
    },
    {
      title: "Passing Marks",
      description: "Need 50% to qualify"
    },
    {
      title: "Exam Fee",
      description: "BBA - INR 1,400/- (Online Exam) + INR 1,000/- (Personal Interview) (one-time eligibility), MBA - INR 2,000/- (Online Exam) + INR 1,500/- (Personal Interview) (one-time eligibility)"
    },
    {
      title: "Scholarships",
      description: "Attractive scholarships to top scorers for BBA and MBA courses."
    },
  ]
  return (
    <>
      <HeroSectionTwo 
        backgroundImage="https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
        title="Turn Your Business Ambition Into A Thriving Career"
        description=""
        buttonText="Apply Now"
        buttonLink="/admissions"
        showForm={false}
        customForm={<KalseeApplicationForm />}
      />
      <KalseeMilestone 
        milestones={milestones} 
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/student-img.png"
      />
      <MainIntro
        title="What is KAL-MAT?"
        description="Kalinga Management Aptitude Test (KAL-MAT) 2025-26 is your pathway to book a spot in KU’s prestigious BBA and MBA programs. Aspiring students from India and other countries can appear for this exam and shape their destiny."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/kal-mat/kalmat-intro.jpg"
        imageAlt="KALSEE"
      />
      <ImageListItem textClassName="hidden" listItemTextClassName="text-black"  imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" boxItems={boxItems} title="Details of KAL-MAT" subtitle="KAL-MAT Exam Information" description="Comprehensive details about the Kalinga Management Aptitude Test (KAL-MAT) including eligibility, exam pattern, dates, fees, and more." />
      <DeptSyllabus 
        title="Personal Interview"
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/bg-course.webp"
        imageAlt="KAL-MAT Course Materials"
        leftCardTitle="BBA"
        leftCardDescription="All questions carry 1 mark each."
        leftCardButtonText="Know more"
        leftCardSecondButtonText="Register now"
        rightCardTitle="MBA"
        rightCardDescription="22nd March 2025"
        rightCardButtonText="Know more"
        rightCardSecondButtonText="Register now"
        mobileImageHeight={700}
      />
      <SampleTesting 
        title="Pattern of KAL-MAT Exam"
        instruction="All questions carry 1 mark each."
        subtitle=""
        description=""
        note="*Note: Scheduling of the KAL-MAT Exam must be completed at least 48 hours before the desired exam appointment"
        tableColumns={[
          { key: "slNo", label: "Sl. No", width: "w-20" },
          { key: "section", label: "Section", width: "w-32" },
          { key: "subject", label: "Subject", width: "w-64" },
          { key: "questions", label: "Questions", width: "w-32" }
        ]}
        tableData={[
          {
            slNo: 1,
            section: "Section A",
            subject: "Physics/ECE",
            questions: 25
          },
          {
            slNo: 2,
            section: "Section B",
            subject: "Chemistry",
            questions: 25
          },
          {
            slNo: 3,
            section: "Section C",
            subject: "Maths",
            questions: 25
          },
          {
            slNo: 4,
            section: "Section D",
            subject: "English Communication",
            questions: 15
          },
          {
            slNo: "Total",
            section: "",
            subject: "",
            questions: 90,
            colSpan: {
              slNo: 3, // Merge Sl. No, Section, and Subject columns (Total spans all three)
              section: 0, // Skip this cell (merged into slNo)
              subject: 0, // Skip this cell (merged into slNo)
              questions: 1
            }
          }
        ]}
      />
      <OurPrograms 
        customPrograms={[
          {
            id: 1,
            title: "BBA",
            specialization: "Bachelor of Business Administration",
            duration: "4 Year",
            eligibility: "10+12",
            type: "UG",
            showSpecializationDropdown: true,
            specializationOptions: [
              "Airlines & Airport Operations Management",
              "Digital Marketing & E-Commerce",
              "Event Management & Public Relations",
              "Family Business & Startups",
              "Finance",
              "Fintech",
              "Hospital Administration",
              "Human Resource Management",
              "Marketing Management",
              "Aviation"
            ],
            specializationPlaceholder: "- Select Single Specialisation -",
            coursePageUrl: "/courses/bba"
          },
          {
            id: 2,
            title: "MBA",
            specialization: "Master of Business Administration",
            duration: "2 Year",
            eligibility: "Graduation",
            type: "PG",
            showSpecializationDropdown: true,
            specializationOptions: [
              "Banking & Insurance",
              "Business Analytics",
              "Digital Marketing & E-Commerce",
              "Finance",
              "Healthcare & Hospital Management",
              "Hotel & Hospitality Management",
              "Human Resource Management",
              "Information Technology",
              "NGO Management",
              "International Business",
              "Logistics & Supply Chain Management",
              "Marketing Management"
            ],
            specializationPlaceholder: "- Select Dual Specialisation -",
            coursePageUrl: "/courses/mba"
          }
        ]}
        hideSearchFilter={true}
        customTitle="Lorem ipsum dolor sit amet, consectetur"
        customSubtitle="Explore Our Programs"
        maxPrograms={2}
        mobileMaxWidth={700}
      />
      <AdmissionSteps
        steps={kifSteps}
        subtitleClassName="hidden"
        title="Your Step-By-Step Startup Process"
        ctaLabel="Apply Now"
        showReadMore={false}
        showHeaderButton={false}
        showIcon={false}
        showImage={false}
        bgColor="bg-white"
      />
      <Testimonials testimonials={testimonials} />
      <FAQ title="Frequently Asked Questions" items={faqItems} />
      <AdmissionCareer />
    </>
  );
}


"use client"
import MainIntro from "@/app/components/about/main_intro";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ResearchResourceFaqClient from "../components/research-resources/research_resource_faq";
import AutoBreadcrumb from "../components/layout/BreadcrumbData";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfaciities-introimg2.webp",
  pageTitle: "Research Resources",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Research Resources", href: "/research-resources" },
  ],
};

const Items = [
  {
    id: 1,
    text: "Library access to thousands of books, journals, magazines, research papers, dissertations, e-catalogues, online search tools, newspapers, and rare publications."
  },
  {
    id: 2,
    text: "SPSS software support for academic and research work."
  },
  {
    id: 3,
    text: "Online study materials including DELNET, NPTEL, National Digital Library, J-Gate (Social Science and Science & Technology), INSPEC by Elsevier, and Web of Science."
  },
  {
    id: 4,
    text: "CIF labs equipped with advanced instruments such as X-Ray Diffractometer, Viscometer, Scanning Electron Microscope, Digital pH Meter, 3D Printer, and more."
  },
  {
    id: 5,
    text: "Computer labs with high-performance computing systems and pre-installed software."
  },
  {
    id: 6,
    text: "Centres of Excellence including IBM Innovation Centre for Education, IamSMEofIndia, EBLU, BDS Education, IIoT, BOSCH, and JustAuto."
  },
  {
    id: 7,
    text: "Publication support for writing, editing, indexing, and publishing papers in UGC-CARE and Scopus-listed journals."
  },
  {
    id: 8,
    text: "IPR Support Cell assisting with patent filing, copyright support, ethics compliance, and plagiarism detection."
  },
  {
    id: 9,
    text: "Incubation Centre through Kalinga Incubation Foundation supporting startup ideas, business models, mentorship, and fund generation."
  },
  {
    id: 10,
    text: "Workshops, seminars, and competitions to showcase talent to a larger audience."
  },
  {
    id: 11,
    text: "Research grants and funding guidance for applying to grants and fellowships."
  }
];


export default function ResearchResources() {
  return (
    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 10% !important;
      }

      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
  `}</style>
      <AutoBreadcrumb data={breadcrumbData} />

      <MainIntro
        title="Powering Your Curiosity At Every Step"
        subtitle="Research Resources"
        description={[
          "Kalinga University is one of the best Research-Intensive University as it is more than just your academic curriculum; it’s about generating curiosity, creativity, and a continuous learning environment. From the first year, we encourage our students to develop a passion for research and execute their ideas into a paper, a book, or a startup. Our tech-savvy research scholars transform their ideas into impactful outcomes through our abundant research facilities."
          , "With our open-access tools and next-gen facilities, our research team ensures that your output is not only academically correct but also socially and economically relevant. Our National and Global tie-ups will change the game of your research work by extending your networking opportunities.",
        ]}
        readMoreLabel="Read More"
        readLessLabel="Read Less"
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/whywork.webp"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />

      {/* Toolkit Section */}

      <ImageListItem
        items={Items}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/research-resources/research-toolkit.webp"
        title="Your Research Toolkit"
      />

      <ResearchResourceFaqClient />
    </>
  );
}
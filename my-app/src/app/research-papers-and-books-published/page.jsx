"use client";
import ResearchIntro from "@/app/components/research-resources/research_intro";
import BoardOfStudiesTable from "@/app/components/general/board_of_studies_table";
import AccreditationRanking from "@/app/components/home/AccreditationRanking";

export default function ResearchPapersAndBooksPublished() {
  return (
    <>
      <ResearchIntro
        title="Transforming Your Results Into Publications"
        description="Kalinga University actively supports its researchers by providing them with resources, guidance, and support in their publication journey. From expert mentorship to providing access to publication tools and final printing, we’re with them at every step. We also help them present their work in front of a wider audience on both physical and digital platforms. "
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="Kalinga University Research"
      />

      <BoardOfStudiesTable
        title="List of Books Published"
        description="Explore the published research works of our scholars, whose hard work in researching and putting their ideas together in one place can be seen in their impactful books."
        columns={[" ", " ", " "]}
        emptyRows={4}
      />

      <BoardOfStudiesTable
        title="List of Research Papers Published"
        description="Explore the list of published papers that reflect their contribution to student research work and academic excellence. "
        columns={[" ", " ", " "]}
        emptyRows={4}
      />

      <BoardOfStudiesTable
        title="Kalinga University Patents"
        columns={[" ", " ", " "]}
        emptyRows={4}
      />
      
      <AccreditationRanking />
    </>
  );
}

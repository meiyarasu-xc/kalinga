import ResearchIntro from "@/app/components/research-resources/research_intro";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ResearchResourceFaqClient from "../components/research-resources/research_resource_faq";

const formatItemText = (text) => {
    const [boldPart, ...rest] = text.split(" - ");
    return (
        <>
            <strong className="font-semibold">{boldPart}</strong>
            {rest.length > 0 && <>{" - "}{rest.join(" - ")}</>}
        </>
    );
};
const Items = [
    {
        id: 1,
        text: formatItemText(
            "Library - Access to thousands of books, journals, magazines, research papers, dissertations, e-catalogues, online search tools, newspapers, and rare publications."
        ),
    },
    {
        id: 2,
        text: formatItemText(
            "SPSS Software - Support your research work."
        ),
    },
    {
        id: 3,
        text: formatItemText(
            "Online Study Materials - DELNET, NPTEL, NDL (National Digital Library), J-Gate (Social Science), J-Gate (Science and Technology), INSPEC Database of Elsevier, and Web of Science."
        ),
    },
    {
        id: 4,
        text: formatItemText(
            "CIF Labs - Advanced instruments like X-Ray Diffractometer, Viscometer, Scanning Electron Microscope, Digital pH Meter, 3D Printer, and many more are available for in-depth experimentation."
        ),
    },
    {
        id: 5,
        text: formatItemText(
            "Computer labs - With high-performing computing systems and software pre-installed."
        ),
    },
    {
        id: 6,
        text: formatItemText(
            "CoE - Our 7 Centres of Excellence include - IBM Innovation Centre for Education, IamSMEofIndia, EBLU, BDS Education, IIoT, BOSCH and JustAuto."
        ),
    },
    {
        id: 7,
        text: formatItemText(
            "Publication Support - Assistance in writing, editing, indexing, and publishing papers in UGC-CARE and Scopus-listed journals."
        ),
    },
    {
        id: 8,
        text: formatItemText(
            "IPR Support Cell - Helps in patent filing, copyright support, ethics compliance, and plagiarism detection."
        ),
    },
    {
        id: 9,
        text: formatItemText(
            "Incubation Centre - Kalinga Incubation Foundation supports your unique startup ideas, designs business models, mentorship, and fund generation."
        ),
    },
    {
        id: 10,
        text: formatItemText(
            "Workshops/Seminars/Competitions - Showcase your talent to a larger audience."
        ),
    },
    {
        id: 11,
        text: formatItemText(
            "Research Grants & Funding Guidance - Guidance on applying for grants and fellowships."
        ),
    },
];



export default function ResearchResources() {
    return (
        <>
            <ResearchIntro
                title="Research Resources"
                subtitle="Powering Your Curiosity At Every Step"
                secondarySubtitle="Comprehensive Research Resources And Tools"
                description={["Kalinga University is one of the best Research-Intensive University as it is more than just your academic curriculum; it’s about generating curiosity, creativity, and a continuous learning environment. From the first year, we encourage our students to develop a passion for research and execute their ideas into a paper, a book, or a startup. Our tech-savvy research scholars transform their ideas into impactful outcomes through our abundant research facilities. ",
                    "With our open-access tools and next-gen facilities, our research team ensures that your output is not only academically correct but also socially and economically relevant. Our National and Global tie-ups will change the game of your research work by extending your networking opportunities. "
                ]}
                initialVisibleParagraphs={1}
                buttonLabel="Read more"
                showButton={true}
                showKnowMore={false}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
                imageAlt="Kalinga University campus"
            />
            <ImageListItem
                items={Items}
                imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
                title="Your Research Toolkit"
                headingClassName="!text-white !text-[52px] !leading-[60px] !text-center lg:!text-left"
                textClassName="!text-white/90 !text-[16px] !leading-[26px]"
                className="rounded-[28px] mx-0 md:mx-2px-4 md:px-10 py-12 md:py-16"
            />

            <ResearchResourceFaqClient />

        </>
    )
}
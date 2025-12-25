"use client";

/**
 * Dynamic Department Page
 * Route: /departments/[slug]
 * 
 * This page dynamically loads department data based on the slug from the URL.
 */

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import MainIntro from "@/app/components/about/main_intro";
import PublicationGrid from "@/app/components/research/publication-grid";
import ProgramsOffered from "@/app/components/department/programs-offered";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";
import DeptSyllabus from "@/app/components/department/dept_syllabus";
import Facility from "@/app/components/admissions/facility";
import StudentActivities from "@/app/components/department/student_activities";
import WhyStudy from "@/app/components/department/why-study";
import Placements from "@/app/components/home/placements";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FAQ from "@/app/components/general/faq";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import WeStandOut from "@/app/components/department/we_stand_out";
import UpcomingConference from "@/app/components/research/upcoming_conference";
import { fetchAllDepartments, fetchDepartmentCompleteDetail, parseHtmlToParagraphs, parseHtmlToText } from "@/app/lib/api";
import { useBreadcrumbData } from "@/app/components/layout/BreadcrumbContext";

// Generate slug from department name if slug is not available
const generateSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function DynamicDepartmentPage() {
  const params = useParams();
  const slug = params?.slug;
  
  const [departmentData, setDepartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);

  // Find department ID from slug
  useEffect(() => {
    const findDepartment = async () => {
      try {
        const departments = await fetchAllDepartments();
        const dept = departments.find(d => 
          (d.slug && d.slug === slug) || 
          generateSlug(d.name) === slug
        );
        
        if (dept) {
          setDepartmentId(dept.id);
        } else {
          setError('Department not found');
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to find department:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (slug) {
      findDepartment();
    }
  }, [slug]);

  // Fetch department data from API
  useEffect(() => {
    if (!departmentId) return;

    const loadDepartmentData = async () => {
      try {
        setLoading(true);
        const data = await fetchDepartmentCompleteDetail(departmentId);
        setDepartmentData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load department data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDepartmentData();
  }, [departmentId]);

  // Update SEO metadata when departmentData is available
  useEffect(() => {
    if (!departmentData) return;

    const updateMetaTag = (name, content, attribute = 'name') => {
      if (!content) return;
      
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (departmentData?.meta_title) {
      document.title = departmentData.meta_title;
    } else if (departmentData?.name) {
      document.title = departmentData.name;
    }

    updateMetaTag('description', departmentData?.meta_description);
    updateMetaTag('keywords', departmentData?.keywords);
    updateMetaTag('author', departmentData?.author);
    updateMetaTag('robots', departmentData?.robots);

    if (departmentData?.canonical_url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', departmentData.canonical_url);
    }

    updateMetaTag('og:title', departmentData?.og_title || departmentData?.meta_title || departmentData?.name, 'property');
    updateMetaTag('og:description', departmentData?.og_description || departmentData?.meta_description, 'property');
    updateMetaTag('og:image', departmentData?.og_image, 'property');
    updateMetaTag('og:type', departmentData?.og_type, 'property');
    updateMetaTag('og:locale', departmentData?.og_locale, 'property');
    updateMetaTag('og:site_name', departmentData?.og_site_name, 'property');
    updateMetaTag('og:url', departmentData?.og_url || departmentData?.canonical_url, 'property');

    updateMetaTag('twitter:card', departmentData?.twitter_card);
    updateMetaTag('twitter:title', departmentData?.twitter_title || departmentData?.meta_title || departmentData?.name);
    updateMetaTag('twitter:description', departmentData?.twitter_description || departmentData?.meta_description);
    updateMetaTag('twitter:image', departmentData?.twitter_image);

    if (departmentData?.schema_json) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      try {
        schemaScript.textContent = departmentData.schema_json;
      } catch (e) {
        console.error('Error parsing schema JSON:', e);
      }
    }
  }, [departmentData]);

  // Map API data to components (same logic as static page)
  const mainIntroContent = departmentData?.about_sections?.[0] ? (() => {
    const apiParagraphs = parseHtmlToParagraphs(departmentData.about_sections[0].content);
    const mockSecondParagraph = "The Faculty of Computer Science and Information Technology is a department of skilled professionals who combine theoretical and practical knowledge and prepare students with the trending IT skills that will keep them ahead in the digital world.";
    
    const description = apiParagraphs.length > 0 
      ? [apiParagraphs[0], mockSecondParagraph, ...apiParagraphs.slice(1)]
      : [mockSecondParagraph];
    
    return {
      title: departmentData.about_sections[0].heading,
      subtitle: departmentData.about_sections[0].heading,
      description: description,
      imageUrl: departmentData.about_sections[0].image,
      imageAlt: departmentData.about_sections[0].alt,
      initialVisibleParagraphs: 2,
      showKnowMore: true,
      knowMoreLabel: "Read More",
    };
  })() : null;

  const deptHeadIntroContent = departmentData?.department_faculty_details?.[0] ? {
    name: departmentData.department_faculty_details[0].name,
    designation: departmentData.department_faculty_details[0].designation,
    imageUrl: departmentData.department_faculty_details[0].image,
    imageAlt: departmentData.department_faculty_details[0].image_alt,
    quote: departmentData.department_faculty_details[0].quote_description,
    about: parseHtmlToParagraphs(departmentData.department_faculty_details[0].about),
  } : null;

  const publicationStats = departmentData?.milestones && departmentData.milestones.length > 0
    ? departmentData.milestones
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(milestone => ({
          title: milestone.heading || "",
          value: `${milestone.number || ""} ${milestone.symbol || ""}`.trim(),
          description: milestone.description || "",
        }))
    : null;

  const programsOffered = useMemo(() => {
    const coursesData = departmentData?.department_courses;
    
    if (!coursesData || !Array.isArray(coursesData) || coursesData.length === 0) {
      return null;
    }
    
    return coursesData.map(course => {
      let level = "UG";
      if (course.program_type) {
        const programType = course.program_type.toLowerCase();
        if (programType === "pg" || programType === "postgraduate") {
          level = "PG";
        } else if (programType === "phd" || programType === "doctorate") {
          level = "PhD";
        } else if (programType === "diploma") {
          level = "Diploma";
        } else if (programType === "ug" || programType === "undergraduate") {
          level = "UG";
        }
      }
      
      const durationNum = typeof course.duration === 'number' ? course.duration : parseInt(course.duration);
      let duration = "3 Year";
      if (!isNaN(durationNum)) {
        duration = `${durationNum} Year${durationNum > 1 ? 's' : ''}`;
      } else if (course.duration && typeof course.duration === 'string') {
        duration = course.duration;
      }
      
      return {
        id: course.id,
        title: course.name || "",
        duration: duration,
        level: level,
      };
    });
  }, [departmentData?.department_courses]);

  const programsImage = departmentData?.programs_image || null;
  const programsImageAlt = departmentData?.programs_image_alt || "Programs Offered";
  const programsOverview = departmentData?.programs_offered_overview || "";

  const placementData = {
    placement_info: departmentData?.placement_info || [],
    placement_statistics: departmentData?.placement_statistics || departmentData?.statistics || [],
    placement_student_photos: departmentData?.placement_student_photos || [],
  };

  const whyStudyContent = departmentData?.benefits && departmentData.benefits.length > 0 ? {
    sectionTitle: `Why Study ${(departmentData.name || "").replace(/^Faculty of\s+/i, '')}?`,
    backgroundImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp",
    items: departmentData.benefits
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map((benefit, index) => ({
        id: benefit.id,
        title: benefit.heading || "",
        body: parseHtmlToText(benefit.text) || "",
        variant: index % 2 === 0 ? "gray" : "amber",
        image: benefit.image || null,
      }))
  } : null;

  const faqItems = useMemo(() => {
    if (!departmentData?.faqs || !Array.isArray(departmentData.faqs) || departmentData.faqs.length === 0) {
      return [];
    }
    
    return departmentData.faqs
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map(faq => ({
        id: faq.id,
        question: faq.question || "",
        answer: parseHtmlToText(faq.answer) || "",
      }));
  }, [departmentData?.faqs]);

  const breadcrumbData = (departmentData?.name && !loading) ? {
    heroImage: departmentData?.banners?.[0]?.image || departmentData?.banners?.[0]?.image_url || "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/student-gathered.webp",
    pageTitle: departmentData.name,
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { 
        label: departmentData.name, 
        href: `/departments/${departmentData.slug || generateSlug(departmentData.name)}` 
      }
    ]
  } : loading ? {
    customBreadcrumbs: []
  } : null;

  useBreadcrumbData(breadcrumbData);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
          <p className="text-[var(--light-text-gray)]">Loading department information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading department data: {error}</p>
          <p className="text-[var(--light-text-gray)]">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  if (!departmentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--light-text-gray)]">Department not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {mainIntroContent && (
        <MainIntro 
          title={mainIntroContent.title}
          subtitle={mainIntroContent.subtitle}
          description={mainIntroContent.description}
          imageUrl={mainIntroContent.imageUrl}
          imageAlt={mainIntroContent.imageAlt}
          initialVisibleParagraphs={mainIntroContent.initialVisibleParagraphs}
          showKnowMore={mainIntroContent.showKnowMore}
          knowMoreLabel={mainIntroContent.knowMoreLabel}
        />
      )}
      {publicationStats && publicationStats.length > 0 && (
        <PublicationGrid stats={publicationStats} />
      )}
      {deptHeadIntroContent && (
        <DeptHeadIntro
          name={deptHeadIntroContent.name}
          designation={deptHeadIntroContent.designation}
          imageUrl={deptHeadIntroContent.imageUrl}
          imageAlt={deptHeadIntroContent.imageAlt}
          quote={deptHeadIntroContent.quote}
          about={deptHeadIntroContent.about}
        />
      )}
      {programsOffered && programsOffered.length > 0 && (
        <ProgramsOffered
          programs={programsOffered}
          title="Programs Offered"
          description={parseHtmlToText(programsOverview)}
          backgroundImage={programsImage}
          imageAlt={programsImageAlt}
        />
      )}
      <Placements placementData={placementData} />
      {whyStudyContent && whyStudyContent.items && whyStudyContent.items.length > 0 && (
        <WhyStudy 
          sectionTitle={whyStudyContent.sectionTitle}
          backgroundImage={whyStudyContent.backgroundImage}
          items={whyStudyContent.items}
        />
      )}
      {departmentData?.how_we_stand_items && departmentData.how_we_stand_items.length > 0 && (
        <WeStandOut
          items={departmentData.how_we_stand_items
            .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
            .map(item => parseHtmlToText(item.description))
          }
        />
      )}
      {departmentData?.clubs && departmentData.clubs.length > 0 && (
        <UpcomingConference
          conferences={departmentData.clubs
            .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
            .map(club => ({
              id: club.id,
              title: club.name || "",
              description: parseHtmlToText(club.description) || "",
              imageUrl: club.logo || null,
              imageAlt: club.logo_alt || "",
              link: club.join_link || null,
            }))
          }
        />
      )}
      {departmentData?.video_interviews && departmentData.video_interviews.length > 0 && (
        <MediaCardSlider
          cards={departmentData.video_interviews
            .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
            .map(interview => ({
              id: interview.id,
              title: interview.heading || "",
              description: parseHtmlToText(interview.description) || "",
              videoUrl: interview.video_link || null,
              placeholderImage: interview.placeholder_image || null,
              placeholderAlt: interview.placeholder_alt || "",
            }))
          }
        />
      )}
      <Facility />
      <StudentActivities />
      {faqItems && faqItems.length > 0 && (
        <FAQ 
          title="Frequently Asked Questions"
          items={faqItems}
          key={`${departmentData.id}-${faqItems.length}-${faqItems.map(item => item.id).join('-')}`}
        />
      )}
      <AdmissionCareer />
    </div>
  );
}

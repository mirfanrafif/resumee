import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { SideNavigation } from "./components/side-navigation";
import { profileData } from "./components/profile-data";

// Dynamic imports for code splitting
const HeroSection = dynamic(() =>
  import("./components/hero-section").then((mod) => ({
    default: mod.HeroSection,
  }))
);

const TechStackSection = dynamic(() =>
  import("./components/tech-stack-section").then((mod) => ({
    default: mod.TechStackSection,
  }))
);

const ExperienceSection = dynamic(() =>
  import("./components/experience-section").then((mod) => ({
    default: mod.ExperienceSection,
  }))
);

const ProjectsSection = dynamic(() =>
  import("./components/projects-section").then((mod) => ({
    default: mod.ProjectsSection,
  }))
);

const EducationSection = dynamic(() =>
  import("./components/education-section").then((mod) => ({
    default: mod.EducationSection,
  }))
);

const SocialsSection = dynamic(() =>
  import("./components/socials-section").then((mod) => ({
    default: mod.SocialsSection,
  }))
);

// Loading component
const SectionLoader = () => (
  <div className="flex min-h-[400px] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-600"></div>
  </div>
);

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-afacad)]">
      <SideNavigation />

      <Suspense fallback={<SectionLoader />}>
        <HeroSection profile={profileData} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TechStackSection techStack={profileData.techStack} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection experiences={profileData.experiences} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection projects={profileData.projects} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <EducationSection
          education={profileData.education}
          volunteer={profileData.volunteer}
        />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SocialsSection socials={profileData.socials} />
      </Suspense>
    </div>
  );
}

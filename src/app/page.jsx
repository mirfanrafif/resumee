import React from "react";
import {
  ArrowRight,
  Book,
  Construction,
  Dribbble,
  FileStack,
  Github,
  Globe,
  Hotel,
  Instagram,
  Linkedin,
  Megaphone,
  Pin,
  School,
  Speaker,
} from "lucide-react";
import Section from "./components/section";
import { BigTitle } from "./components/big-title";
import { AnimatedGrid } from "./components/animated-grid";
import { SideNavigation } from "./components/side-navigation";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-afacad)]">
      <SideNavigation />
      <Section id="hero" className="relative overflow-hidden">
        <AnimatedGrid />
        <div className="space-y-8 relative z-10">
          <BigTitle>
            <h1 className="text-5xl lg:text-8xl font-bold">
              Performance Over <br />{" "}
              <span className="font-serif text-4xl lg:text-7xl">
                Aesthetics
              </span>
            </h1>
          </BigTitle>
          <h3 className="max-w-lg">
            Hello, my name is {profile.fullName}. I am a {profile.role}, mainly
            focused on Frontend Development. I specialize in React, Next.js,
            TypeScript, and Flutter for building modern web and mobile
            applications. I am currently working at{" "}
            {profile.experiences[0].companyName} as a{" "}
            {profile.experiences[0].role}.
          </h3>
        </div>
      </Section>

      <Section id="stack" className="bg-neutral-900 text-white">
        <div className="space-y-8">
          <BigTitle>
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-bold text-5xl lg:text-8xl">
                <FileStack size={64} className="inline-block mr-4" />
                Tech Stack
              </h2>
            </div>
          </BigTitle>
          <div className="flex flex-wrap gap-3">
            {profile.techStack.map((stack, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-transparent text-white border border-white rounded-full text-sm font-medium hover:bg-white hover:text-neutral-900 transition-all duration-200 cursor-default"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience">
        <div className="space-y-10">
          <BigTitle>
            <div className="flex flex-row gap-2 items-center">
              <Hotel size={64} />
              <h2 className="font-bold text-5xl lg:text-8xl">
                Experience & Projects
              </h2>
            </div>
          </BigTitle>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-600 translate-x-[-1px]"></div>

                {profile.experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-6 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 w-4 h-4 bg-neutral-600 dark:bg-neutral-400 rounded-full mt-1.5"></div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-bold">
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {experience.companyName}
                        </a>
                      </h4>
                      <p>{experience.role}</p>
                      <p>
                        {experience.startYear} - {experience.endYear}
                      </p>
                      <p>{experience.contract}</p>
                      <ul className="list-disc list-inside">
                        {experience.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Project</h3>
              {profile.projects.map((project, index) => (
                <div key={index}>
                  <h4 className="font-bold underline">{project.projectName}</h4>
                  <p>{project.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {project.stack.map((stack, index) => (
                      <div key={index}>- {stack}</div>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {project.url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" className="bg-neutral-900 text-white">
        <div className="space-y-10">
          <BigTitle>
            <div className="flex flex-row gap-2 items-center ">
              <School size={64} />
              <h2 className="font-bold text-5xl lg:text-8xl">
                Education & Volunteering
              </h2>
            </div>
          </BigTitle>

          <div className="flex flex-col lg:flex-row lg:gap-12 space-y-6 lg:space-y-0">
            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              {profile.education.map((education, index) => (
                <div key={index}>
                  <h4 className="font-bold underline">
                    {education.institution}
                  </h4>
                  <p>{education.major}</p>
                  <p>{education.degree}</p>
                  <p>
                    {education.startYear} - {education.endYear}
                  </p>
                  {education.gpa && <p>GPA: {education.gpa}</p>}
                </div>
              ))}
            </div>

            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-bold mb-4">Volunteering</h3>
              {profile.volunteer.map((volunteer, index) => (
                <div key={index}>
                  <h4 className="font-bold underline">
                    {volunteer.organization}
                  </h4>
                  <p>{volunteer.role}</p>
                  <p>
                    {volunteer.startYear} - {volunteer.endYear}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="socials">
        <div className="space-y-10">
          <BigTitle>
            <div className="flex flex-row gap-2 items-center">
              <Globe size={64} />
              <h2 className="font-bold text-5xl lg:text-8xl">Socials</h2>
            </div>
          </BigTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            {profile.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-8 border-2 border-neutral-300 rounded-2xl hover:border-neutral-600 hover:bg-neutral-50 transition-all duration-300 min-h-[200px]"
              >
                <div className="mb-4 dark:text-white dark:group-hover:text-black transition-colors duration-300">
                  {React.cloneElement(social.icon, { size: 48 })}
                </div>
                <span className="text-xl font-medium dark:text-white dark:group-hover:text-black transition-colors duration-300">
                  {social.name}
                </span>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight
                    size={20}
                    className="text-neutral-600 group-hover:text-black dark:text-white dark:group-hover:text-black"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

const profile = {
  fullName: "Moch. Irfan Rafif",
  role: "Fullstack Developer",
  email: "mirfanrafif17@gmail.com",
  location: "Malang, East Java, Indonesia",
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Flutter",
    "Android",
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "Dart",
    "Nest.js",
    "MongoDB",
    "Git",
    "REST APIs",
    "GitHub Actions",
    "CI/CD",
    "Shell Scripting",
    "Docker",
  ],
  socials: [
    {
      icon: <Github size={16} />,
      name: "GitHub",
      url: "https://github.com/mirfanrafif",
    },
    {
      icon: <Linkedin size={16} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mirfanrafif17/",
    },
    {
      icon: <Instagram size={16} />,
      name: "Instagram",
      url: "https://www.instagram.com/mirfanrafif/",
    },
    {
      icon: <Dribbble size={16} />,
      name: "Dribbble",
      url: "https://www.dribbble.com/mirfanrafif/",
    },
  ],
  education: [
    {
      institution: "State Polytechnic of Malang",
      major: "Informatics Engineering",
      degree: "Bachelor's Degree",
      startYear: 2018,
      endYear: 2022,
      gpa: 3.6,
    },
    {
      institution: "Bangkit Academy",
      major: "Android Development",
      degree: "Certificate",
      startYear: 2021,
      endYear: 2021,
    },
  ],
  experiences: [
    {
      companyName: "Cinema XXI",
      role: "Frontend Developer",
      startYear: "September 2024",
      endYear: "Present",
      contract: "Full-Time",
      website: "https://www.cinema21.co.id",
      description: [
        "Developing and maintaining the Cinema XXI Manager App to manage cinemas and movies.",
        "Developing the Outlet Web App to handle outlet operations.",
      ],
    },
    {
      companyName: "DeltaHQ Pte. Ltd.",
      role: "Frontend Developer",
      startYear: "March 2023",
      endYear: "September 2024",
      contract: "Full-Time",
      website: "https://deltahq.com",
      description: [
        "Developed and maintained the Property Management System and Vendor Management System to set up properties and products for customers.",
        "Integrated payment gateways for customer billing.",
        "Led the frontend team, assigned tasks, and reviewed code.",
        "Collaborated with the Product Manager to discuss features and timelines.",
      ],
    },
    {
      companyName: "Geniebook Pte. Ltd.",
      role: "Android Developer",
      startYear: "September 2022",
      endYear: "March 2023",
      contract: "Full-Time",
      website: "https://www.geniebook.com",
      description: [
        "Developed and maintained the Geniebook App to help students learn better.",
      ],
    },
    {
      companyName: "Sprado.co",
      role: "Frontend & Mobile Developer",
      startYear: "March 2022",
      endYear: "November 2022",
      contract: "Freelance",
      website: "https://sprado.co",
      description: [
        "Developed and maintained the Chatbot App that connects sales with customers.",
      ],
    },
    {
      companyName: "PT. United Tractors Tbk.",
      role: "Frontend Developer",
      startYear: "June 2021",
      endYear: "August 2021",
      contract: "Internship",
      website: "https://www.unitedtractors.com",
      description: ["Enhanced the Promotion Portal App."],
    },
  ],
  volunteer: [
    {
      organization: "Workshop Riset Informatika",
      role: "Lead, Miniclass UX",
      startYear: "November 2019",
      endYear: "November 2020",
    },
  ],
  projects: [
    {
      projectName: "Lokla",
      description:
        "Lokla is a platform that bridges developers and translators to help developers localize their apps.",
      stack: ["React", "Next.js", "Tailwind CSS", "Nest.js", "MongoDB"],
      url: "https://lokla.mirfanrafif.my.id",
    },
  ],
};

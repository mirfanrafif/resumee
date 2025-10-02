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
      <AnimatedGrid />
      <Section id="hero" className="relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          <BigTitle>
            <h1 className="text-5xl font-bold lg:text-8xl">
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

      <Section
        id="stack"
        className="bg-neutral-100 dark:bg-neutral-900 dark:text-white"
      >
        <div className="space-y-8">
          <BigTitle>
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-5xl font-bold lg:text-8xl">
                <FileStack size={64} className="mr-4 inline-block" />
                Tech Stack
              </h2>
            </div>
          </BigTitle>
          <div className="flex flex-wrap gap-3">
            {profile.techStack.map((stack, index) => (
              <span
                key={index}
                className="cursor-default rounded-full border border-black bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experiences">
        <div className="space-y-10">
          <BigTitle>
            <div className="flex flex-row items-center gap-2">
              <Hotel size={64} />
              <h2 className="text-5xl font-bold lg:text-8xl">Experiences</h2>
            </div>
          </BigTitle>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-2 top-2 w-0.5 translate-x-[-1px] bg-neutral-300 dark:bg-neutral-600"></div>

            {profile.experiences.map((experience, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 pb-8 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="relative z-10 mt-1.5 h-4 w-4 flex-shrink-0 rounded-full bg-neutral-600 dark:bg-neutral-400"></div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-bold">
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noreferrer"
                      className="underline transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {experience.companyName}
                    </a>
                  </h4>
                  <p>{experience.role}</p>
                  <p>
                    {experience.startYear} - {experience.endYear}
                  </p>
                  <p>{experience.contract}</p>
                  <ul className="list-inside list-disc">
                    {experience.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        className="bg-neutral-100 dark:bg-neutral-900 dark:text-white"
      >
        <div className="space-y-10">
          <BigTitle>
            <div className="flex flex-row items-center gap-2">
              <Construction size={64} />
              <h2 className="text-5xl font-bold lg:text-8xl">Projects</h2>
            </div>
          </BigTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {profile.projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border-2 border-black bg-transparent p-6 transition-all duration-300 hover:border-neutral-400 hover:shadow-lg dark:border-neutral-600 dark:bg-neutral-800/50"
              >
                <h4 className="mb-3 text-lg font-bold dark:text-white">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline transition-colors duration-200 hover:text-blue-400"
                    >
                      {project.projectName}
                    </a>
                  ) : (
                    project.projectName
                  )}
                </h4>
                <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((stack, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="cursor-default rounded-full border border-black bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="education">
        <div className="space-y-10">
          <BigTitle>
            <div className="flex flex-row items-center gap-2">
              <School size={64} />
              <h2 className="text-5xl font-bold lg:text-8xl">
                Education & Volunteering
              </h2>
            </div>
          </BigTitle>

          <div className="flex flex-col space-y-6 lg:flex-row lg:gap-12 lg:space-y-0">
            <div className="flex-1 space-y-4">
              <h3 className="mb-4 text-2xl font-bold">Education</h3>
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

            <div className="flex-1 space-y-4">
              <h3 className="mb-4 text-2xl font-bold">Volunteering</h3>
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

      <Section
        id="socials"
        className="bg-neutral-100 dark:bg-neutral-900 dark:text-white"
      >
        <div className="space-y-10">
          <BigTitle>
            <div className="flex flex-row items-center gap-2">
              <Globe size={64} />
              <h2 className="text-5xl font-bold lg:text-8xl">
                Have a look at my
              </h2>
            </div>
          </BigTitle>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {profile.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-neutral-300 p-8 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-50"
              >
                <div className="mb-4 transition-colors duration-300 dark:text-white dark:group-hover:text-black">
                  {React.cloneElement(social.icon, { size: 48 })}
                </div>
                <span className="text-xl font-medium transition-colors duration-300 dark:text-white dark:group-hover:text-black">
                  {social.name}
                </span>
                <div className="mt-3 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
      projectName: "DeltaEMS", // Experience Management System (Products / services that supporting hotel / property management)
      description:
        "DeltaEMS is an Experience Management System designed to streamline the operations on the supporting products and services for hotel and property management.",
      stack: ["React", "Next.js", "Tailwind CSS", "Rest API"],
      url: "https://ems.deltahq.com",
    },
    {
      projectName: "DeltaPMS",
      description:
        "DeltaPMS is a comprehensive Property Management System designed to streamline property operations, enhance tenant experiences, and optimize management efficiency.",
      stack: ["React", "Next.js", "Tailwind CSS", "Rest API"],
      url: "https://pms.deltahq.com",
    },
    {
      projectName: "Lokla",
      description:
        "Lokla is a platform that bridges developers and translators to help developers localize their apps.",
      stack: ["React", "Next.js", "Tailwind CSS", "Nest.js", "MongoDB"],
      url: "https://lokla.mirfanrafif.my.id",
    },
    {
      projectName: "Gilang Ekspedisi",
      description:
        "Gilang Ekspedisi is an app designed to streamline the process of managing shipments and deliveries for a live chicken from poultry farm to production factory, and from the production factory to the end consumer.",
      stack: ["Flutter", "Dart"],
    },
    {
      projectName: "Aloha Chatbot",
      description:
        "Aloha Chatbot is an innovative chatbot application designed to bridge communication between businesses and their customers, by assigning the customers to the relevant agents based on their inquiries.",
      stack: ["Flutter", "Dart", "Nest.js", "MySQL", "Socket.io"],
    },
  ],
};

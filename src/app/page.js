import {
  Book,
  Construction,
  Github,
  Hotel,
  Instagram,
  Linkedin,
  Megaphone,
  Pin,
  School,
  Speaker,
} from "lucide-react";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-afacad)] max-w-[1024px] mx-auto my-8 space-y-8">
      <div className="flex flex-row gap-4 items-center">
        <img
          src="https://avatars.githubusercontent.com/u/43906580?v=4"
          alt="Avatar"
          className="h-24 w-24 rounded-full"
        />

        <div>
          <h1 className="font-bold">{profile.fullName}</h1>
          <h3>{profile.role}</h3>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-row gap-2 items-center">
          <Pin size={16} />
          <h2 className="font-bold">Location</h2>
        </div>
        <p>{profile.location}</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-row gap-2 items-center">
          <Book size={16} />
          <h2 className="font-bold">Main Stack</h2>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {profile.mainStack.map((stack, index) => (
            <div key={index}>- {stack}</div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-bold">Socials</h2>
        <div className="grid grid-cols-3 gap-2">
          {profile.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-2 underline"
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-row gap-2 items-center">
          <School size={16} />
          <h2 className="font-bold">Education</h2>
        </div>
        <div className="space-y-4">
          {profile.education.map((education, index) => (
            <div key={index}>
              <h3 className="font-bold underline">{education.institution}</h3>
              <p>{education.major}</p>
              <p>{education.degree}</p>
              <p>
                {education.startYear} - {education.endYear}
              </p>
              {education.gpa && <p>GPA: {education.gpa}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-row gap-2 items-center">
          <Hotel size={16} />
          <h2 className="font-bold">Experiences</h2>
        </div>

        <div className="space-y-4">
          {profile.experiences.map((experience, index) => (
            <div key={index}>
              <h3 className="font-bold underline">{experience.companyName}</h3>
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
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-row gap-2 items-center">
          <Megaphone size={16} />
          <h2 className="font-bold">Volunteer</h2>
        </div>

        <div className="space-y-4">
          {profile.volunteer.map((volunteer, index) => (
            <div key={index}>
              <h3 className="font-bold underline">{volunteer.organization}</h3>
              <p>{volunteer.role}</p>
              <p>
                {volunteer.startYear} - {volunteer.endYear}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-row gap-2 items-center">
          <Construction size={16} />
          <h2 className="font-bold">Projects</h2>
        </div>

        <div className="space-y-4">
          {profile.projects.map((project, index) => (
            <div key={index}>
              <h3 className="font-bold underline">{project.projectName}</h3>
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
  );
}

const profile = {
  fullName: "Moch. Irfan Rafif",
  role: "Frontend Developer",
  email: "mirfanrafif17@gmail.com",
  location: "Malang, East Java, Indonesia",
  mainStack: ["React", "Next.js", "Tailwind CSS", "Flutter", "Android"],
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
  ],
  education: [
    {
      institution: "State Polytechnic of Malang",
      major: "Informatics Engineering",
      degree: "Bachelor",
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
      description: [
        "Developing and maintaining the Cinema XXI Manager App to manage the cinema and the movies.",
      ],
    },
    {
      companyName: "DeltaHQ Pte. Ltd.",
      role: "Frontend Developer",
      startYear: "March 2023",
      endYear: "September 2024",
      contract: "Full-Time",
      description: [
        "Developing and maintaining the Property Management System and Vendor Management System to setup property and products for the customers.",
        "Setting up the payment gateway for the customers to pay the bills.",
        "Leading the Frontend team to assign tasks and review the code.",
        "Work with the Product Manager to discuss the features and the timeline.",
      ],
    },
    {
      companyName: "Geniebook Pte. Ltd.",
      role: "Android Developer",
      startYear: "September 2022",
      endYear: "March 2023",
      contract: "Full-Time",
      description: [
        "Developing and maintaining the Geniebook App that help the students to learn better.",
      ],
    },
    {
      companyName: "Sprado.co",
      role: "Frontend & Mobile Developer",
      startYear: "March 2022",
      endYear: "Novenber 2022",
      contract: "Freelance",
      description: [
        "Developing and maintaining the Chatbot App that connect the sales with the customers.",
      ],
    },
    {
      companyName: "PT. United Tractors Tbk.",
      role: "Frontend Developer",
      startYear: "June 2021",
      endYear: "Aug 2021",
      contract: "Internship",
      description: ["Enhancing the Promition Portal App"],
    },
  ],
  volunteer: [
    {
      organization: "Workshop Riset Informatika",
      role: "Lead at Miniclass UX",
      startYear: "November 2019",
      endYear: "November 2020",
    },
  ],
  projects: [
    {
      projectName: "Lokla",
      description:
        "Lokla is a platform that bridge the developer and translator to help the developer to localize the app.",
      stack: ["React", "Next.js", "Tailwind CSS", "Nest.js", "MongoDB"],
      url: "https://lokla.mirfanrafif.my.id",
    },
  ],
};

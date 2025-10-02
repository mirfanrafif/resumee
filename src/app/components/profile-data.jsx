import React from "react";
import { Github, Linkedin, Instagram, Dribbble } from "lucide-react";

export const profileData = {
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
      projectName: "DeltaEMS",
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

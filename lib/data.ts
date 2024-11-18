import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuShoppingBag, LuShoppingCart } from "react-icons/lu";

import mazaimg from "@/public/mazaimg.png";
import iksiir from "@/public/iksiir.png";
import airbnb from "@/public/airbnb.png";
import portfolio from "@/public/vecteezy_briefcase-sign-business-bag-icon-portfolio-symbol-luggage_22597790.png";
import instagram from "@/public/instagram.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Iksiir - Software Engineer",
    location: "Remote",
    description:
      "At Iksiir, I was responsible for developing a full-stack e-commerce website, closely collaborating with the client to understand their needs and requirements. We discussed key elements such as the target audience, sales process, suppliers, and website design. I used technologies like React, Node.js, and integrated backend and frontend components to create a seamless experience. The project involved implementing various features, such as product management, payment integration, and a user-friendly interface, all tailored to the client's specifications. This experience allowed me to showcase my ability to analyze business requirements and deliver a customized solution.",
    icon: React.createElement(LuShoppingBag),
    date: "2024",
  },
  {
    title: "MazaNutribeauté - Software Engineer",
    location: "Remote",
    description:
      "At Mazanutribeauté, I was responsible for developing a full-stack e-commerce website aimed at providing beauty and wellness products to customers. I worked closely with the client to gather requirements, define the target audience, and design the sales process. Using technologies such as React, Node.js, and integrating backend services, I created a seamless and responsive platform. The project involved developing features such as product catalogs, user accounts, payment systems, and real-time data updates, all tailored to the client's business model. This experience enhanced my ability to build scalable, customer-centric solutions while collaborating with the client to meet their needs.",
    icon: React.createElement(LuShoppingCart),
    date: "2024",
  },
  {
    title: "Woby - Fullstack Developer",
    location: "Paris, France",
    description:
      "At Woby, I held the position of Fullstack Developer, contributing to the improvement of a collaborative tool designed to manage flexible workspaces and remote work. Throughout this experience, we followed an Agile methodology with two-week sprints. In terms of technology, I used AWS services such as Lambda, API Gateway, Cognito, DynamoDB, and S3. Additionally, I leveraged TypeScript to implement the requested features. For example, I developed reporting features using Node.js libraries to format and transform data into CSV files. This experience also involved various other features that I successfully implemented, further deepening my skills in AWS and TypeScript while working in an Agile team environment.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Orange - Backend Developer/Anlayst",
    location: "Arcueil, France",
    description:
      "At Orange, I held a backend developer and a analyst position, focusing on the development of several features later used by internal teams. Throughout this experience, I worked with technologies such as Node.js, Express, Google Cloud, Google Analytics, and Data Studio. My role primarily involved designing features that met the needs of various internal teams. This included creating solutions with Node.js and Express, leveraging Google Cloud services, setting up Google Analytics for tracking and analysis, and creating interactive reports through Data Studio. My time at Orange not only allowed me to contribute to the company’s internal toolset but also provided hands-on experience with a range of technologies central to modern web development.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Loria - Fullstack Developer",
    location: "Nancy, France",
    description:
      "I completed an internship at Loria, where I contributed to improving a web application designed to facilitate engaging and interactive language learning for educators. The application utilized technologies such as ReactJS, artificial intelligence, REST APIs, and Material UI. My responsibilities included implementing new features to make the learning experience more captivating and dynamic. I collaborated with a team to integrate artificial intelligence and REST APIs, while using Material UI to enhance the user interface. My time at Loria allowed me to further develop my web programming skills, work with cutting-edge technologies, and collaborate within a development team.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb Clone",
    description: "",
    tags: [
      "Next.js 14",
      "App Router: React",
      "TypeScript",
      "server components",
      "TailwindCSS",
      "Vercel deploy",
    ],
    imageUrl: airbnb,
    projectLink: "https://github.com/TOUFIK-Taha98/airbnb_clone_nextjs",
  },

  {
    title: "Iksiir Paris",
    description: "",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Wordpress"],
    imageUrl: iksiir,
    projectLink: "https://www.iksiir.com/",
  },
  {
    title: "MazaNutribeauté",
    description: "",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Wordpress"],
    imageUrl: mazaimg,
    projectLink: "https://www.mazanutribeaute.fr/",
  },
  {
    title: "This Portfolio",
    description: "",
    tags: ["Next.js", "Typescript", "React", "TailwindCSS", "Framer Motion"],
    imageUrl: portfolio,
    projectLink: "https://tahadev.fr",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "AWS",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "Git",
  "Tailwind",
  "Prisma",
  "Sanity",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;

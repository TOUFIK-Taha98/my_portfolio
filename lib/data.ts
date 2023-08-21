import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import ticketBooking from "@/public/ticket-booking.png";
import wobyImg from "@/public/woby.png";
import placesApi from "@/public/places-api.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "WOBY - Fullstack Developer",
    location: "Paris, France",
    description:
      "At Woby, I worked as an apprentice for a year, contributing to the enhancement of a collaborative tool designed to manage flex office and remote work arrangements. Throughout this experience, we followed an Agile methodology with two-week sprints. In terms of technology, I utilized AWS services such as Lambda, API Gateway, Cognito, DynamoDB, and S3. Additionally, I employed TypeScript to implement the requested functionalities. For instance, I developed reporting features using Node.js libraries to format and transform data into CSV files. This experience also involved various other functionalities that I successfully implemented, further deepening my skills in AWS and TypeScript while working in an Agile team environment.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Orange - Backend Developer",
    location: "Arcueil, France",
    description:
      "At Orange, I worked as an intern for a year, focusing on developing multiple features that were subsequently utilized by internal teams. Throughout this experience, I employed technologies such as Node.js, Express, Google Cloud, Google Analytics, and Data Studio. My role primarily involved crafting functionalities that catered to the needs of various internal teams. This included building solutions using Node.js and Express, harnessing the power of Google Cloud services, implementing Google Analytics for tracking and analysis, and creating interactive reports via Data Studio. My time at Orange not only allowed me to contribute to the company's internal toolset but also enabled me to gain hands-on experience with a range of technologies central to modern web development.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Loria - Fullstack Developer",
    location: "Nancy, France",
    description:
      "I had an internship at Loria where I worked on enhancing a web application designed to facilitate fun and interactive foreign language teaching for educators. The application utilized technologies such as ReactJS, AI, REST APIs, and Material UI. My responsibilities included implementing new features to make the learning experience more engaging and dynamic. I collaborated with a team to integrate AI and REST APIs, while also utilizing Material UI to improve the user interface. My time at Loria allowed me to further develop my skills in web programming, working with cutting-edge technologies, and collaborating within a development team.",
    icon: React.createElement(FaReact),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "Woby",
    description:
      "I worked as a full-stack developer on this startup project for 1 year. Users can give public feedback to companies.",
    tags: ["AWS", "Typescript", "Jest", "Flutter", "Dart"],
    imageUrl: wobyImg,
    projectLink: "https://www.woby.co/",
  },
  {
    title: "API Places",
    description:
      "Is a tool that integrates Google Maps functionality with the data storage. This API allows users to efficiently manage and create location-based data.",
    tags: ["React", "Express", "MongoDB", "GoogleAPI", "JWT", "Mongoose"],
    imageUrl: placesApi,
    projectLink: "https://github.com/TOUFIK-Taha98/API-PLACES",
  },
  {
    title: "Ticket booking App",
    description:
      "Flutter 3.10.0 app. This ticket booking app covers Flutter for very beginners to advanced learners. It starts from very simple ui like drawing text to complex layout using stack and mixture of column and row widget.",
    tags: ["Flutter", "Dart"],
    imageUrl: ticketBooking,
    projectLink: "https://github.com/TOUFIK-Taha98/booktickets",
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

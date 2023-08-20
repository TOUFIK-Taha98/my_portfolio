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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Orange - Backend Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Loria - Fullstack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
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

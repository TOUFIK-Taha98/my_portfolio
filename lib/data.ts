import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import ticketBooking from "@/public/ticket-booking.png";
import mazaimg from "@/public/mazaimg.png";
import airbnb from "@/public/airbnb.png";
import travel from "@/public/travel-ui.png";
import trello from "@/public/trello.png";
import instagram from "@/public/instagram.png";
import placesApi from "@/public/places-api.png";

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
    title: "Woby - Développeur Fullstack",
    location: "Paris, France",
    description:
      "Chez Woby, j'ai occupé le poste d'apprenti pendant un an, contribuant à l'amélioration d'un outil collaboratif conçu pour gérer les espaces de travail flexibles et le télétravail. Tout au long de cette expérience, nous avons suivi une méthodologie Agile avec des sprints de deux semaines. En termes de technologie, j'ai utilisé les services AWS tels que Lambda, API Gateway, Cognito, DynamoDB et S3. De plus, j'ai utilisé TypeScript pour mettre en œuvre les fonctionnalités demandées. Par exemple, j'ai développé des fonctionnalités de reporting en utilisant des bibliothèques Node.js pour formater et transformer les données en fichiers CSV. Cette expérience a également impliqué diverses autres fonctionnalités que j'ai réussi à mettre en œuvre, approfondissant ainsi mes compétences en AWS et TypeScript tout en travaillant dans un environnement d'équipe Agile.",
    icon: React.createElement(LuGraduationCap),
    date: "12/2022 - 08/2023",
  },
  {
    title: "Orange - Développeur backend et Analyste",
    location: "Arcueil, France",
    description:
      "Chez Orange, j'ai occupé un poste en alternance pendant un an, me concentrant sur le développement de plusieurs fonctionnalités ultérieurement utilisées par les équipes internes. Tout au long de cette expérience, j'ai utilisé des technologies telles que Node.js, Express, Google Cloud, Google Analytics et Data Studio. Mon rôle consistait principalement à concevoir des fonctionnalités répondant aux besoins de diverses équipes internes. Cela incluait la création de solutions avec Node.js et Express, tirant parti des services de Google Cloud, la mise en place de Google Analytics pour le suivi et l'analyse, ainsi que la création de rapports interactifs via Data Studio. Mon temps chez Orange m'a non seulement permis de contribuer à l'ensemble d'outils internes de l'entreprise, mais m'a également donné une expérience pratique avec une gamme de technologies au cœur du développement web moderne",
    icon: React.createElement(CgWorkAlt),
    date: "10/2021 - 10/2022",
  },
  {
    title: "Loria - Développeur fullstack",
    location: "Nancy, France",
    description:
      "J'ai effectué un stage chez Loria où j'ai contribué à améliorer une application web conçue pour faciliter l'enseignement ludique et interactif des langues étrangères pour les éducateurs. L'application utilisait des technologies telles que ReactJS, l'intelligence artificielle, les API REST et Material UI. Mes responsabilités comprenaient la mise en œuvre de nouvelles fonctionnalités pour rendre l'expérience d'apprentissage plus captivante et dynamique. J'ai collaboré avec une équipe pour intégrer l'intelligence artificielle et les API REST, tout en utilisant Material UI pour améliorer l'interface utilisateur. Mon passage chez Loria m'a permis de développer davantage mes compétences en programmation web, de travailler avec des technologies de pointe et de collaborer au sein d'une équipe de développement.",
    icon: React.createElement(FaReact),
    date: "04/2021 - 07/2021",
  },
] as const;

export const projectsData = [
  {
    title: "Instagram Clone",
    description: "",
    tags: [
      "Next.js 14",
      "Server Actions",
      "React",
      "Prisma",
      "Stripe",
      "Tailwind",
      "shadcnUI",
      "MySQL",
    ],
    imageUrl: instagram,
    projectLink:
      "https://in-s-tagram-clone.vercel.app/login?callbackUrl=https%3A%2F%2Fin-s-tagram-clone.vercel.app%2Fdashboard",
  },
  {
    title: "Trello Clone",
    description: "",
    tags: [
      "Next.js 14",
      "Server Actions",
      "React",
      "Prisma",
      "Stripe",
      "Tailwind",
      "shadcnUI",
      "MySQL",
    ],
    imageUrl: trello,
    projectLink: "https://trello-clone-chi-six.vercel.app/",
  },
  {
    title: "Modern UI/UX Travel app",
    description: "",
    tags: ["React.js", "Next.js 13", "Tailwind CSS"],
    imageUrl: travel,
    projectLink: "https://travel-ui-ux-ten.vercel.app/",
  },

  {
    title: "Airbnb Clone",
    description: "",
    tags: [
      "Next.js 13",
      "App Router: React",
      "server components",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Cloudinary CDN",
      "Vercel deploy",
    ],
    imageUrl: airbnb,
    projectLink: "https://project-clone-nine.vercel.app/",
  },
  {
    title: "MazaNutribeauté",
    description: "",
    tags: ["Wordpress"],
    imageUrl: mazaimg,
    projectLink: "https://www.mazanutribeaute.fr/",
  },
  {
    title: "API Places",
    description: "",
    tags: ["React", "Express", "MongoDB", "GoogleAPI", "JWT", "Mongoose"],
    imageUrl: placesApi,
    projectLink: "https://github.com/TOUFIK-Taha98/API-PLACES",
  },
  {
    title: "Application de réservation de billets.",
    description: "",
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

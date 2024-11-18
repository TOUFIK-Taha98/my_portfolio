"use client";

import React from "react";
import SectionHeading from "./sections-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-justify">
        After earning my Master's degree in web development, I decided to pursue
        my passion for programming. My favorite part of programming is
        problem-solving. I enjoy the satisfaction of finally finding a solution
        to a challenge.
        <br /> My core skills include:{" "}
        <b>
          React, TypeScript, Next.js, Node.js, Flutter, Java, Spring Boot,
          MongoDB, AWS, Google Cloud, Object-Oriented Programming, MVC, MySQL,
          PostgreSQL, Prisma, NestJS.
        </b>
        <br />I am always eager to learn new technologies, and I’m constantly
        improving and refining my skills.
      </p>
    </motion.section>
  );
}

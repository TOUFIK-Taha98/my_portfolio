"use client";

import React from "react";
import SectionHeading from "./sections-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projets", 0.5);

  return (
    <section
      id="projects"
      className="mt-28 mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project key={index} {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

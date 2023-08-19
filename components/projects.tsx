import React from "react";
import SectionHeading from "./sections-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
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

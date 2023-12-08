"use client";

import React from "react";
import SectionHeading from "./sections-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("À propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Après avoir obtenu mon{" "}
        <span className="font-medium">Master en développement web</span>, j'ai
        décidé de poursuivre ma passion pour la programmation.{" "}
        <span className="italic">
          Ma partie préférée de la programmation est
        </span>{" "}
        l'aspect résolution de problèmes.{" "}
        <span className="underline">J'aime</span> la sensation de finalement
        trouver une solution à un problème. Mes compétences principales incluent{" "}
        <span className="font-medium">
          React, TypeScript, Next.js, Node.js, Flutter, MongoDB, AWS, Google
          Cloud
        </span>
        . <br />
        Je suis constamment à la recherche de nouvelles technologies à
        apprendre.
      </p>

      <p>
        <span className="italic">Quand je ne code pas</span>, j'aime jouer au
        foot, lire des livres.
      </p>
    </motion.section>
  );
}

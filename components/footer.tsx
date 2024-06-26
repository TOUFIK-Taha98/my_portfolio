import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 ">
      <small className="mb-2 block text-sm">
        &copy; 2024 Taha. Tous droits réservés.
      </small>
      <p className="text-sm">
        <span className="font-semibold">À propos de ce site web :</span>{" "}
        Construit avec React & Next.js (App Router & Server Actions),
        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, hébergé
        sur Vercel.
      </p>
    </footer>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-sm">
        &copy; 2024 Taha. All rights reserved.
      </small>
      <p className="text-sm">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, hosted on Vercel.
      </p>
    </footer>
  );
}

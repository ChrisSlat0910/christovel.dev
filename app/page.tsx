"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
export default function Page() {
  return (
    <div className="min-h-screen text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

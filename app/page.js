"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";

const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
    return (
        <main className="min-h-screen text-white selection:bg-cyan-400 selection:text-black pt-24">
            <section id="home">
                <Hero />
            </section>

            <SkillsGrid />

            <section
                id="projects"
                className="scroll-mt-24"
            >
                <Projects />
            </section>

            {/* ID: "contact" */}
            <section
                id="contact"
                className="scroll-mt-24"
            >
                <Contact />
            </section>

            <Footer />
        </main>
    );
}

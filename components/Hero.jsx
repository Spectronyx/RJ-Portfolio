// app/page.js

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        // ADD pt-24 (padding-top: 6rem) TO THIS LINE
        <main className="min-h-screen text-white selection:bg-cyan-400 selection:text-black pt-24">

            <section id="home"> {/* No scroll-margin needed here, main has padding */}
                <Hero />
            </section>

            <Skills />

            <section id="projects" className="scroll-mt-24">
                <Projects />
            </section>

            <section id="contact" className="scroll-mt-24">
                <Contact />
            </section>
            //This is teh footer section
            <Footer />
        </main>
    );
}
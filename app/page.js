import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

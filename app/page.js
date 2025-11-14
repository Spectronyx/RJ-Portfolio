import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen text-white selection:bg-cyan-400 selection:text-black">
            {/* ID: "home" */}
            <section
                id="home"
                className="scroll-mt-24"
            >
                <Hero />
            </section>

            <Skills />

            {/* ID: "projects" */}
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

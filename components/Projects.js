"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs,
    FaPython,
    FaLock,
    FaEnvelope,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiReplit,
    SiPostgresql,
    SiFlask,
    SiOpenai,
} from "react-icons/si";

// 1. YOUR PROJECT DATA
const projects = [
    // --- NEW PROJECTS ---
    {
        id: 1,
        title: "Secure File Management",
        description:
            "OS project with multi-level authentication, encryption, and threat detection (CSE316).",
        tech: [<FaLock />, <SiReplit />],
        link: "#",
        github: "#",
        color: "from-red-500 to-orange-600",
    },
    {
        id: 2,
        title: "Pathfinding Visualizer",
        description:
            "Interactive React app visualizing BFS & DFS algorithms with real-time animations.",
        tech: [<FaReact />, <SiExpress />, <SiPostgresql />],
        link: "#",
        github: "#",
        color: "from-cyan-400 to-blue-600",
    },
    {
        id: 3,
        title: "AI Mail Summarizer",
        description:
            "NLP-based assistant that summarizes incoming emails and extracts deadlines automatically.",
        tech: [<FaPython />, <SiFlask />, <SiOpenai />, <FaEnvelope />],
        link: "#",
        github: "#",
        color: "from-purple-500 to-indigo-600",
    },

    // --- PREVIOUS MERN PROJECTS ---
    {
        id: 4,
        title: "Room Rent Manager",
        description:
            "MERN app to manage buildings, rooms, and tenant payments with Admin/Student roles.",
        tech: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
        link: "#",
        github: "#",
        color: "from-green-400 to-emerald-600",
    },
    {
        id: 5,
        title: "Twitter Sentiment Analysis",
        description:
            "ML model analyzing tweet sentiments, integrated with a Python/React dashboard.",
        tech: [<FaPython />, <FaReact />, <SiTailwindcss />],
        link: "#",
        github: "#",
        color: "from-blue-400 to-indigo-600",
    },
    {
        id: 6,
        title: "JWT Auth System",
        description:
            "Secure authentication system with Access/Refresh tokens and Bcrypt hashing.",
        tech: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
        link: "#",
        github: "#",
        color: "from-pink-500 to-rose-600",
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen py-20 px-6 md:px-20 relative z-10">
            {/* SECTION HEADING */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span className="text-cyan-400">Work</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Here are some of the projects I've built. Hover over the
                    cards to see the 3D effect.
                </p>
            </motion.div>

            {/* PROJECTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                        viewport={{ once: true }}
                        className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400/50 transition-all group transform  duration-300 hover:scale-105"
                    >
                        {/* CARD HEADER: Gradient Line */}
                        <div
                            className={`h-2 w-full rounded-full bg-linear-to-r ${project.color} mb-6`}
                        ></div>

                        {/* CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        {/* FOOTER: Tech Stack & Buttons */}
                        <div>
                            {/* Tech Icons */}
                            <div className="flex gap-3 text-gray-400 text-xl mb-6">
                                {project.tech.map((icon, i) => (
                                    <span
                                        key={i}
                                        className="hover:text-white transition-colors"
                                    >
                                        {icon}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                >
                                    <FaGithub size={18} /> Code
                                </a>
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Live Demo <FaExternalLinkAlt size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

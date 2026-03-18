"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaLock,
    FaEnvelope,
    FaReact,
    FaNodeJs,
    FaPython,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiPostgresql,
    SiFlask,
    SiOpenai,
} from "react-icons/si";

const projects = [
    {
        id: 1,
        title: "Secure File Management",
        description:
            "A comprehensive operating systems project focused on multi-level authentication, advanced encryption, and proactive threat detection (CSE316). It provides a secure environment for managing sensitive files with granular access controls.",
        tech: [<FaLock />, <FaPython />],
        link: "https://securefilemanager.onrender.com",
        github: "https://github.com/Spectronyx/SecureFileManager",
        color: "from-red-500 to-orange-600",
    },
    {
        id: 2,
        title: "Pathfinding Visualizer",
        description:
            "An interactive web application built with React that visualizes complex algorithms like BFS & DFS. It features real-time animations, customizable grids, and obstacle placement to help students better understand graph traversal.",
        tech: [<FaReact />, <SiExpress />, <SiPostgresql />],
        link: "https://grafalgovisualizer.netlify.app/",
        github: "https://github.com/Spectronyx/BFS_DFS-Visualizer",
        color: "from-cyan-400 to-blue-600",
    },
    {
        id: 3,
        title: "AI Mail Summarizer",
        description:
            "A smart NLP-based assistant that automatically processes incoming emails, generates concise summaries, and extracts important deadlines. Built with Python and OpenAI integration to streamline personal inbox management.",
        tech: [<FaPython />, <SiFlask />, <SiOpenai />, <FaEnvelope />],
        link: "#",
        github: "",
        color: "from-purple-500 to-indigo-600",
    },
    {
        id: 4,
        title: "Room Rent Manager",
        description:
            "A full-stack MERN application designed to manage buildings, individual rooms, and tenant payment tracking. It features dedicated Admin and Student dashboards with automated billing and status updates.",
        tech: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
        link: "https://rent-manager-app.vercel.app/dashboard",
        github: "https://github.com/Spectronyx/rent-manager-app",
        color: "from-green-400 to-emerald-600",
    },
    {
        id: 5,
        title: "IMDB Sentiment Analysis",
        description:
            "A powerful machine learning model that analyzes real-time IMDB reviews sentiments. Integrated with a dynamic Python/React dashboard for visualizing public opinion trends and keyword distributions.",
        tech: [<FaPython />, <FaReact />, <SiTailwindcss />],
        link: "https://github.com/Spectronyx/IMDB-Sentiment-Analysis",
        github: "https://github.com/Spectronyx/IMDB-Sentiment-Analysis",
        color: "from-blue-400 to-indigo-600",
    },
    {
        id: 6,
        title: "JWT Auth System",
        description:
            "A robust and secure authentication system implementing JSON Web Tokens (JWT) with Access and Refresh token logic. It includes Bcrypt hashing, secure cookie storage, and scalable user management.",
        tech: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
        link: "https://authentication-system-rouge.vercel.app/",
        github: "https://github.com/Spectronyx/Authentication-System",
        color: "from-pink-500 to-rose-600",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 px-6 md:px-20 relative z-10 scroll-mt-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-24"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Featured <span className="text-cyan-400">Projects</span>
                </h2>
                <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-400 max-w-2xl mx-auto italic">
                    A selection of my recent work across various domains of
                    software engineering.
                </p>
            </motion.div>

            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${
                            index % 2 === 0 ?
                                "md:flex-row"
                            :   "md:flex-row-reverse"
                        } gap-12 items-center`}
                    >
                        {/* PROJECT VISUAL/GRADIENT */}
                        <div className="w-full md:w-1/2 group cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className={`relative h-64 md:h-80 rounded-3xl bg-linear-to-br ${project.color} overflow-hidden flex items-center justify-center p-8`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                <div className="relative text-white flex gap-6 text-7xl md:text-8xl opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                                    {project.tech.map((icon, i) => (
                                        <span key={i}>{icon}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* PROJECT CONTENT */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-white hover:text-cyan-400 transition-colors inline-block cursor-pointer">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
                                >
                                    <FaGithub
                                        size={20}
                                        className="group-hover:scale-110 transition-transform"
                                    />
                                    <span>Source Code</span>
                                </a>
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all group"
                                >
                                    <span>Live Demo</span>
                                    <FaExternalLinkAlt
                                        size={16}
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

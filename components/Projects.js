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
        tech: [<FaLock key="lock" />, <FaPython key="python" />],
        link: "https://securefilemanager.onrender.com",
        github: "https://github.com/Spectronyx/SecureFileManager",
        color: "from-rose-500 to-orange-600",
    },
    {
        id: 2,
        title: "Pathfinding Visualizer",
        description:
            "An interactive web application built with React that visualizes complex algorithms like BFS & DFS. It features real-time animations, customizable grids, and obstacle placement to help students better understand graph traversal.",
        tech: [<FaReact key="react" />, <SiExpress key="express" />, <SiPostgresql key="pg" />],
        link: "https://grafalgovisualizer.netlify.app/",
        github: "https://github.com/Spectronyx/BFS_DFS-Visualizer",
        color: "from-cyan-400 to-blue-600",
    },
    {
        id: 3,
        title: "AI Mail Summarizer",
        description:
            "A smart NLP-based assistant that automatically processes incoming emails, generates concise summaries, and extracts important deadlines. Built with Python and OpenAI integration to streamline personal inbox management.",
        tech: [<FaPython key="python" />, <SiFlask key="flask" />, <SiOpenai key="openai" />, <FaEnvelope key="mail" />],
        link: "#",
        github: "",
        color: "from-purple-500 to-indigo-600",
    },
    {
        id: 4,
        title: "Room Rent Manager",
        description:
            "A full-stack MERN application designed to manage buildings, individual rooms, and tenant payment tracking. It features dedicated Admin and Student dashboards with automated billing and status updates.",
        tech: [<SiMongodb key="mongo" />, <SiExpress key="express" />, <FaReact key="react" />, <FaNodeJs key="node" />],
        link: "https://rent-manager-app.vercel.app/dashboard",
        github: "https://github.com/Spectronyx/rent-manager-app",
        color: "from-green-400 to-emerald-600",
    },
    {
        id: 5,
        title: "IMDB Sentiment Analysis",
        description:
            "A powerful machine learning model that analyzes real-time IMDB reviews sentiments. Integrated with a dynamic Python/React dashboard for visualizing public opinion trends and keyword distributions.",
        tech: [<FaPython key="python" />, <FaReact key="react" />, <SiTailwindcss key="tailwind" />],
        link: "https://github.com/Spectronyx/IMDB-Sentiment-Analysis",
        github: "https://github.com/Spectronyx/IMDB-Sentiment-Analysis",
        color: "from-blue-400 to-indigo-600",
    },
    {
        id: 6,
        title: "JWT Auth System",
        description:
            "A robust and secure authentication system implementing JSON Web Tokens (JWT) with Access and Refresh token logic. It includes Bcrypt hashing, secure cookie storage, and scalable user management.",
        tech: [<FaNodeJs key="node" />, <SiExpress key="express" />, <SiMongodb key="mongo" />],
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-32"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Featured <span className="text-cyan-400">Projects</span>
                </h2>
                <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mb-8"></div>
                <p className="text-gray-400 max-w-2xl mx-auto italic text-lg">
                    A selection of my recent work across various domains of
                    software engineering.
                </p>
            </motion.div>

            <div className="flex flex-col gap-40">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } gap-16 items-center`}
                    >
                        {/* PROJECT VISUAL/GRADIENT */}
                        <div className="w-full md:w-1/2 group cursor-pointer relative">
                            <div className={`absolute -inset-4 bg-linear-to-r ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity rounded-full`}></div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`relative h-80 md:h-[400px] rounded-[2rem] bg-linear-to-br ${project.color} overflow-hidden shadow-2xl flex items-center justify-center p-12 border border-white/10`}
                            >
                                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div className="relative text-white flex gap-8 text-7xl md:text-9xl opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out">
                                    {project.tech.map((icon, i) => (
                                        <span key={i} className="drop-shadow-2xl">{icon}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* PROJECT CONTENT */}
                        <div className="w-full md:w-1/2 space-y-8">
                            <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs">
                                Project {index + 1}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-6 pt-6">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-bold hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group scale-100 hover:scale-105 active:scale-95"
                                >
                                    <FaGithub size={22} className="group-hover:rotate-12 transition-transform" />
                                    <span>Code</span>
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-8 py-3 rounded-full bg-cyan-400 text-black font-bold shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:bg-white hover:text-black transition-all group scale-100 hover:scale-105 active:scale-95"
                                >
                                    <span>Live Preview</span>
                                    <FaExternalLinkAlt size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

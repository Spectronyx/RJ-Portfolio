"use client";

import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaJava,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiNextdotjs,
    SiTailwindcss,
    SiPostgresql,
    SiTypescript,
} from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
];

// Double the array so we have a seamless loop
const marqueeSkills = [...skills, ...skills];

export default function Skills() {
    return (
        <section className="py-20 relative z-10 overflow-hidden">
            <div className="text-center mb-12">
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-medium">
                    Technologies & Tools
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* FADE MASKS (To hide the edges smoothly) */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-neutral-950 to-transparent z-20"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neutral-950 to-transparent z-20"></div>

                {/* THE ANIMATION TRACK */}
                <motion.div
                    className="flex gap-16 min-w-max pr-16" // pr-16 ensures the last item has the same gap as the others
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30, // Increased duration for a slower, classier scroll
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 group cursor-default"
                        >
                            <span className="text-4xl text-gray-700 group-hover:text-cyan-400 transition-colors duration-300">
                                {skill.icon}
                            </span>
                            {/* Text only appears on hover for a cleaner look */}
                            <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

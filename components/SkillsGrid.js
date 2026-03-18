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
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
];

export default function SkillsGrid() {
    return (
        <section id="skills" className="py-24 relative z-10 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">Skills & Technologies</h2>
                    <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center justify-center gap-4"
                        >
                            <span className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                {skill.icon}
                            </span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

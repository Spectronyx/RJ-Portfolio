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
    { name: "React", icon: <FaReact />, color: "text-blue-400", glow: "group-hover:shadow-blue-500/20" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", glow: "group-hover:shadow-white/10" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", glow: "group-hover:shadow-green-500/20" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-400", glow: "group-hover:shadow-gray-400/20" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", glow: "group-hover:shadow-green-600/20" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500", glow: "group-hover:shadow-blue-500/20" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-500", glow: "group-hover:shadow-yellow-500/20" },
    { name: "Java", icon: <FaJava />, color: "text-red-500", glow: "group-hover:shadow-red-500/20" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400", glow: "group-hover:shadow-cyan-400/20" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600", glow: "group-hover:shadow-blue-600/20" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500", glow: "group-hover:shadow-orange-500/20" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-400", glow: "group-hover:shadow-blue-400/20" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export default function SkillsGrid() {
    return (
        <section id="skills" className="py-24 relative z-10 scroll-mt-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Skills & Technologies</h2>
                    <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center justify-center gap-4 relative overflow-hidden shadow-2xl ${skill.glow}`}
                        >
                            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className={`text-6xl ${skill.color} group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                                {skill.icon}
                            </span>
                            <span className="text-sm font-bold tracking-widest text-gray-400 group-hover:text-white uppercase transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

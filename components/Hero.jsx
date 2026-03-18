"use client";

import { motion } from "framer-motion";
import { FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <h2 className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
                    Welcome to my portfolio
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                    I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Rajneesh Sharma</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                    A passionate Full Stack Developer specializing in building exceptional digital experiences. 
                    I focus on creating robust, scalable, and user-centric applications using the MERN stack.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                        <FaExternalLinkAlt size={16} />
                        View Resume
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaFileDownload size={16} />
                        Download
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";

// Magnetic effect helper component
function Magnetic({ children }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;
        x.set(distanceX * 0.4);
        y.set(distanceY * 0.4);
    };

    const mouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            {/* BACKGROUND AURA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl relative z-10"
            >
                <motion.h2 
                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                    animate={{ opacity: 1, letterSpacing: "0.5em" }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-cyan-400 font-medium uppercase text-xs mb-6"
                >
                    Welcome to my portfolio
                </motion.h2>

                <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]">
                    I'm <br className="md:hidden" />
                    <motion.span 
                        animate={{ 
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                        Rajneesh Sharma
                    </motion.span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                    A <span className="text-white font-medium">Full Stack Developer</span> dedicated to crafting 
                    digital experiences that are as robust as they are beautiful.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    <Magnetic>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                        >
                            <span className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                <FaExternalLinkAlt size={14} />
                                View Resume
                            </span>
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a
                            href="/resume.pdf"
                            download
                            className="group relative flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:border-cyan-400/50"
                        >
                            <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                                <FaFileDownload size={14} />
                                Download
                            </span>
                        </a>
                    </Magnetic>
                </div>
            </motion.div>
        </section>
    );
}
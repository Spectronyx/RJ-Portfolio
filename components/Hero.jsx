"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 overflow-hidden">

            {/* LEFT SIDE: TEXT */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 text-center md:text-left z-10"
            >
                <h2 className="text-xl md:text-2xl text-cyan-400 font-semibold mb-4">
                    Hello, I am
                </h2>

                {/* GRADIENT NAME */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-500">
                    Rajneesh Sharma
                </h1>

                {/* TYPEWRITER EFFECT */}
                <div className="text-2xl md:text-4xl font-bold text-gray-300 mb-8 h-[60px]">
                    <span>I am a </span>
                    <TypeAnimation
                        sequence={[
                            "MERN Stack Developer",
                            1000, // Wait 1s
                            "AI/ML Enthusiast",
                            1000,
                            "Problem Solver",
                            1000,
                            "Next.js Enthusiast",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-cyan-400"
                    />
                </div>

                <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                    I craft responsive, high-performance web applications with modern technologies.
                    Let's turn your ideas into digital reality.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <button className="px-8 py-3 rounded-full bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]">
                        View Projects
                    </button>
                    <button className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all">
                        Contact Me
                    </button>
                </div>
            </motion.div>


            {/* RIGHT SIDE: IMAGE / AVATAR */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative z-10"
            >
                {/* GLOWING CIRCLE BEHIND IMAGE */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* The Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>

                    {/* The Image Container */}
                    <div className="relative w-full h-full rounded-full border-4 border-white/10 bg-black overflow-hidden">
                        {/* PLACEHOLDER IMAGE - Replace 'src' with your actual photo later */}
                        <Image
                            src="/myphoto.jpg"
                            alt="Rajneesh Avatar"
                            fill
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
                scrolled 
                ? "bg-neutral-950/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
                : "bg-transparent border-b border-transparent"
            }`}
        >
            <Link
                href="#home"
                className="text-2xl font-bold text-white tracking-tighter cursor-pointer flex items-center gap-1 group"
            >
                Rajneesh<span className="text-cyan-400 group-hover:rotate-12 transition-transform inline-block">.</span>
            </Link>

            <div className="hidden md:flex gap-8 items-center">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative group py-2"
                    >
                        <span className="text-gray-400 group-hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">
                            {link.name}
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
                <a
                    href="https://github.com/Spectronyx/RJ-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                    title="View GitHub Repository"
                >
                    <FaGithub size={20} />
                </a>
            </div>

            <div className="md:hidden text-white text-xl cursor-pointer p-2 bg-white/5 rounded-lg border border-white/10">
                ☰
            </div>
        </motion.nav>
    );
}

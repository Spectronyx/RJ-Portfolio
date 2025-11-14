"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// UPDATE THESE LINKS
const navLinks = [
    { name: "Home", href: "#home" }, // Points to Hero
    { name: "Projects", href: "#projects" }, // Points to Projects
    { name: "Contact", href: "#contact" }, // Points to Contact
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 
                 bg-neutral-950/50 backdrop-blur-md border-b border-white/5"
        >
            <Link
                href="#home"
                className="text-2xl font-bold text-white tracking-tighter cursor-pointer"
            >
                Rajneesh<span className="text-cyan-400">.</span>
            </Link>

            <div className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative group py-2"
                    >
                        <span className="text-gray-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">
                            {link.name}
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Mobile Menu Icon (Visual only for now) */}
            <div className="md:hidden text-white text-xl cursor-pointer">☰</div>
        </motion.nav>
    );
}

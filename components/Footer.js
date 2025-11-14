"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative z-10 py-8 border-t border-white/10 bg-black/20 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright Text */}
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Rajneesh Sharma. All rights
                    reserved.
                </p>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

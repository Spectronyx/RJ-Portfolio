"use client";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
    FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
    return (
        <section className="py-24 px-6 md:px-20 relative z-10 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
                {/* LEFT SIDE: INFO */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <h2 className="text-5xl font-bold text-white">
                        Let's <span className="text-cyan-400">Connect</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        I am currently looking for new opportunities and
                        collaborations. Whether you have a question or just want
                        to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                            <div className="p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                                <FaEnvelope size={24} />
                            </div>
                            <span className="text-lg">
                                rajneesh.sharma@example.com
                            </span>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <a
                                href="#"
                                className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="#"
                                className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                            >
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE: THE FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
                >
                    <form className="space-y-6">
                        {/* NAME INPUT */}
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* EMAIL INPUT */}
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* MESSAGE INPUT */}
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                placeholder="Hey Rajneesh, I have a project for you..."
                            ></textarea>
                        </div>

                        {/* SEND BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 rounded-lg hover:opacity-90 transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                        >
                            Send Message <FaPaperPlane />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

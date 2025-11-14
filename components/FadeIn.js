"use client"; // <--- THIS MUST BE LINE 1. No comments above it.

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            // 2. The initial state (invisible and slightly lower)
            initial={{
                opacity: 0,
                y: 20,
            }}
            // 3. The target state (fully visible and in place)
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            // 4. Animation settings (duration, easing, and delay)
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut",
            }}
            // 5. Only animate once (don't hide it again when scrolling up)
            viewport={{
                once: true,
                margin: "-50px",
            }}
            // Pass through any Tailwind classes we might want to add later
            className={className}
        >
            {" "}
            {children}{" "}
        </motion.div>
    );
}

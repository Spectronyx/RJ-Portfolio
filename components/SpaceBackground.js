"use client";

import { motion } from "framer-motion";

export default function SubtleBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-neutral-950 flex items-center justify-center">
            {/* 1. THE BREATHING GRID PATTERN */}
            <motion.div
                // ANIMATION: Pulse the opacity smoothly
                animate={{
                    opacity: [0.1, 0.25, 0.1], // Goes from faint -> slightly visible -> faint
                }}
                transition={{
                    duration: 5, // 5 seconds for one full breath
                    repeat: Infinity,
                    ease: "easeInOut", // Smooth sine-wave motion
                }}
                // STYLE: The Grid Pattern
                className="absolute inset-0 h-full w-full bg-neutral-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] will-change-opacity"
            ></motion.div>

            {/* 2. THE VIGNETTE MASK (Static) */}
            {/* We keep this static so the darkness at the edges feels solid/grounded */}
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
    );
}

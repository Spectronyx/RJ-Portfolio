"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function SpaceBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out mouse movement for a premium feel
    const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

    // Subtle parallax for the grid - moves opposite to mouse
    const translateX = useTransform(springX, (curr) => curr * -0.05);
    const translateY = useTransform(springY, (curr) => curr * -0.05);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020617] overflow-hidden pointer-events-none">
            {/* 1. CURSOR SPOTLIGHT / HALO */}
            <motion.div
                style={{
                    left: springX,
                    top: springY,
                    x: "-50%",
                    y: "-50%",
                }}
                className="absolute w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] opacity-40 will-change-transform"
            />

            {/* 2. INTERACTIVE GRID PATTERN */}
            <motion.div
                style={{
                    x: translateX,
                    y: translateY,
                }}
                className="absolute inset-[-10%] h-[120%] w-[120%] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] will-change-transform opacity-30"
            />

            {/* 3. DYNAMIC GLOWING ORBS (Deeper layers) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[180px] will-change-transform"
            />
            
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[200px] will-change-transform"
            />

            {/* 4. OVERLAY VIGNETTE */}
            <div className="absolute inset-0 bg-neutral-950/20 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,transparent_0%,#000_100%)]"></div>
        </div>
    );
}

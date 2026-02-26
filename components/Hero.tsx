"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
    const images = [
        "https://images.unsplash.com/photo-1581665805846-6ac29c299f28?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=christian-gabele-_Rfe-TmIOr8-unsplash.jpg",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sean-pollock-PhYq704ffdA-unsplash.jpg", // Placeholder image 1
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=toa-heftiba-_UIVmIBB3JU-unsplash.jpg", // Placeholder image 2
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-[60vh] min-h-[500px] text-white flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImageIndex} // Key changes to force re-render and re-trigger animations
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 10, repeat: Infinity, repeatType: "reverse" },
                    }}
                    alt="Dubai skyline or related content"
                    className="absolute inset-0 w-full h-full object-cover"
                    src={images[currentImageIndex]}
                />
            </AnimatePresence>
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold leading-tight"
                >
                    Unlock Your Financial Potential
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-3xl font-light leading-tight mt-4 max-w-3xl mx-auto"
                >
                    Expertly managed investments for a secure future, right from the heart of Canada.
                </motion.h2>
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-[#8B0000] hover:bg-red-800 text-white font-semibold py-3 px-8 rounded transition-colors shadow-lg hover:shadow-red-900/50"
                >
                    Get in Touch
                </motion.button>
            </div>
        </section>
    );
}

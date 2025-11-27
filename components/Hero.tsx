"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] text-white flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                alt="Dubai skyline with Burj Khalifa"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYa1hNqavnBnYKh3Tvy-f5UnCwTVfsWZ5r8EYAI5l9ILqeLvGF56xBCRH8oNoavryS3Pc0X8UljK2GojiqdrDW91sFttanD295NW5hD5Sgt6j3KOR5tphi-kHExDefFVWwWdTWk1RB7zml_YdTW01FU4Bchv58ujfIBS9Ukxav4n1hq97eUc40HVGYXHdax53NDH5hGQEa3WYy-N7L9k-hGJ6cKGrn7HnsMrX8osM7BYaQfiWNs7uhjnXa5z4yAM43zO_NLQLTgxg"
            />
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold leading-tight"
                >
                    Licensed and Regulated from UAE
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold leading-tight mt-2"
                >
                    Financial Authority and Federal Government Law
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

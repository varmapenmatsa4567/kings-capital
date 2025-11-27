"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, prefix = "", suffix = "", delay = 0 }: { value: number, prefix?: string, suffix?: string, delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => `${prefix}${Math.round(current)}${suffix}`);

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                spring.set(value);
            }, delay * 1000);
        }
    }, [isInView, value, delay, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Facts() {
    return (
        <section className="py-16 bg-[#8B0000] text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="material-icons-outlined text-4xl mb-2 opacity-80">public</span>
                        <h3 className="text-4xl font-bold mb-1">
                            <AnimatedNumber value={25} suffix="+" delay={0.1} />
                        </h3>
                        <p className="text-sm opacity-80">Countries Served</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="material-icons-outlined text-4xl mb-2 opacity-80">business</span>
                        <h3 className="text-4xl font-bold mb-1">
                            <AnimatedNumber value={500} suffix="+" delay={0.2} />
                        </h3>
                        <p className="text-sm opacity-80">Corporate Clients</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="material-icons-outlined text-4xl mb-2 opacity-80">savings</span>
                        <h3 className="text-4xl font-bold mb-1">
                            <AnimatedNumber value={2} prefix="$" suffix="B+" delay={0.3} />
                        </h3>
                        <p className="text-sm opacity-80">Assets Managed</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="material-icons-outlined text-4xl mb-2 opacity-80">verified</span>
                        <h3 className="text-4xl font-bold mb-1">
                            <AnimatedNumber value={15} suffix="+" delay={0.4} />
                        </h3>
                        <p className="text-sm opacity-80">Years Experience</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

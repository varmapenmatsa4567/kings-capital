"use client";

import { motion } from "framer-motion";
import { MdGroups, MdHub, MdHandshake, MdInsights, MdSpeed } from "react-icons/md";

export default function WhyKings() {
    return (
        <section className="py-16 sm:py-24 bg-gray-900 text-gray-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4 text-amber-400 tracking-wide"
                    >
                        Why Aarman Capital
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base max-w-3xl mx-auto"
                    >
                        Discover the core strengths that set Aarman Capital apart and drive our success.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <MdGroups size={40} className="mb-4 mx-auto text-amber-400" />
                        <h4 className="font-bold text-md text-gray-100">Experienced Team</h4>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <MdHub size={40} className="mb-4 mx-auto text-amber-400" />
                        <h4 className="font-bold text-md text-gray-100">Extensive Network</h4>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <MdHandshake size={40} className="mb-4 mx-auto text-amber-400" />
                        <h4 className="font-bold text-md text-gray-100">Active Sponsors</h4>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <MdInsights size={40} className="mb-4 mx-auto text-amber-400" />
                        <h4 className="font-bold text-md text-gray-100">Strategic Partnership</h4>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <MdSpeed size={40} className="mb-4 mx-auto text-amber-400" />
                        <h4 className="font-bold text-md text-gray-100">Quick Execution</h4>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

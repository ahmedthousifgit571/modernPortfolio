"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useRef } from "react";

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax for background text
    const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // Arc animation progress
    const arcProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

    return (
        <section
            ref={containerRef}
            id="experience"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
        >
            {/* Parallax background text */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute top-1/4 right-0 text-[12vw] font-black whitespace-nowrap pointer-events-none select-none text-white/[0.02] -z-10"
            >
                EXPERIENCE
            </motion.div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Work <span className="text-muted-foreground font-light italic">Experience</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        My professional journey in software development
                    </p>
                </motion.div>

                {/* Timeline with Arc Visualization */}
                <div className="relative">
                    {/* Dotted Arc SVG - Similar to Porty */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none hidden md:block">
                        <svg
                            viewBox="0 0 400 600"
                            className="w-full h-full absolute left-0 top-0"
                            style={{ maxWidth: "400px", margin: "0 auto" }}
                        >
                            <motion.path
                                d="M 350 50 Q 380 300 200 550"
                                fill="none"
                                stroke="rgba(204, 255, 0, 0.2)"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {/* Experience Cards */}
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 80
                            }}
                            className="relative mb-12"
                        >
                            {/* Main Experience Card */}
                            <motion.div
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border p-6 md:p-10 hover:border-primary/30 transition-all duration-500"
                            >
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                    <div>
                                        {/* Role pill */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                                            {exp.title}
                                        </motion.div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                            {exp.company}
                                        </h3>
                                        <p className="text-muted-foreground">{exp.period}</p>
                                    </div>

                                    {/* Company logo placeholder */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-border flex items-center justify-center"
                                    >
                                        <span className="text-2xl font-bold text-primary">CD</span>
                                    </motion.div>
                                </div>

                                {/* Highlights Grid */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {exp.highlights.map((highlight, hIndex) => (
                                        <motion.div
                                            key={hIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.5 + hIndex * 0.1,
                                                type: "spring"
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                transition: { duration: 0.2 }
                                            }}
                                            className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="w-2 h-2 rounded-full bg-primary" />
                                                <h4 className="font-semibold text-foreground">
                                                    {highlight.title}
                                                </h4>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {highlight.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            type: "spring",
                            stiffness: 80
                        }}
                    >
                        <motion.div
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border p-6 md:p-10 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-4"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                                        Education
                                    </motion.div>

                                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                                        {portfolioData.education.degree}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {portfolioData.education.institution}
                                    </p>
                                </div>
                                <span className="text-primary font-mono text-lg">
                                    {portfolioData.education.period}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

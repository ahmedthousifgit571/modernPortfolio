"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight, Stethoscope, MessageCircle, Music, ShoppingCart } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { useRef } from "react";

const projectIcons = [Stethoscope, MessageCircle, Music, ShoppingCart];

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax for background text
    const bgTextY = useTransform(scrollYProgress, [0, 1], [200, -200]);

    return (
        <section
            ref={containerRef}
            id="projects"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
        >
            {/* Parallax background text */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute top-1/3 left-0 text-[12vw] font-black whitespace-nowrap pointer-events-none select-none text-white/[0.02] -z-10"
            >
                PROJECTS DONE
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
                        Projects <span className="text-muted-foreground font-light italic">Done</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A showcase of my design projects, highlighting my skills and experience.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-8">
                    {portfolioData.projects.map((project, index) => {
                        const Icon = projectIcons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 80
                                }}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500">
                                    {/* Project Image Area */}
                                    <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                                        {/* Floating mockup/icon */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.3 + index * 0.1,
                                                type: "spring"
                                            }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            {/* Phone mockup style display */}
                                            <div className="relative">
                                                {/* Main phone mockup */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05, y: -10 }}
                                                    transition={{ duration: 0.4, type: "spring" }}
                                                    className="relative w-48 md:w-64 h-80 md:h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[30px] p-2 shadow-2xl shadow-black/50 border border-gray-700/50"
                                                >
                                                    {/* Dynamic Island */}
                                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10" />

                                                    {/* Screen */}
                                                    <div className={`w-full h-full rounded-[24px] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                                        <Icon className="w-16 h-16 text-primary/60" />
                                                    </div>
                                                </motion.div>

                                                {/* Secondary floating element */}
                                                <motion.div
                                                    animate={{ y: [0, -10, 0] }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="absolute -right-8 top-1/4 w-32 h-20 bg-card/90 backdrop-blur rounded-xl border border-border p-3 shadow-xl"
                                                >
                                                    <div className="flex gap-1 mb-2">
                                                        {project.tags.map((tag, i) => (
                                                            <span key={i} className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] rounded-full">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-1">
                                                        {[...Array(3)].map((_, i) => (
                                                            <div key={i} className="h-1 bg-muted-foreground/20 rounded flex-1" />
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>

                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                {project.tags.join(", ").toLowerCase()}
                                            </p>
                                        </div>

                                        {/* Action button */}
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="relative"
                                        >
                                            <Link
                                                href={project.liveUrl || project.githubUrl}
                                                target="_blank"
                                                className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                                            >
                                                <ArrowUpRight className="w-6 h-6 group-hover:text-primary-foreground transition-colors duration-300" />
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Server, Database, Cloud, Code, Palette, Terminal, Globe } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { useRef, useState } from "react";

const skillCategories = [
    {
        title: "Frontend",
        subtitle: "Web Design",
        icon: Layers,
        skills: portfolioData.skills.frontend,
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Backend",
        subtitle: "Server Side",
        icon: Server,
        skills: portfolioData.skills.backend,
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Database",
        subtitle: "Data Management",
        icon: Database,
        skills: portfolioData.skills.database,
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "DevOps & Cloud",
        subtitle: "Infrastructure",
        icon: Cloud,
        skills: portfolioData.skills.devops,
        color: "from-orange-500/20 to-red-500/20"
    },
];

const toolIcons = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "TS" },
    { name: "AWS", icon: "☁️" },
    { name: "PostgreSQL", icon: "🐘" },
];

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax for background text
    const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
        >
            {/* Parallax background text */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute top-1/4 left-0 text-[15vw] font-black whitespace-nowrap pointer-events-none select-none text-white/[0.02] -z-10"
            >
                MY SERVICES
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Technical <span className="text-muted-foreground font-light italic">Skills</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Phone Mockup with Skills - Similar to Porty */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                        className="relative w-full lg:w-1/2"
                    >
                        <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] mx-auto bg-gradient-to-b from-gray-900 to-black rounded-[45px] p-3 shadow-2xl shadow-black/50 border border-gray-800/50">
                            {/* Dynamic Island */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

                            {/* Screen */}
                            <div className="relative w-full h-full bg-black rounded-[35px] overflow-hidden">
                                {/* Category tabs */}
                                <div className="absolute top-8 left-4 right-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {skillCategories.map((cat, i) => (
                                        <motion.button
                                            key={i}
                                            onClick={() => setActiveCategory(i)}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === i
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-gray-800 text-gray-400"
                                                }`}
                                        >
                                            <cat.icon className="w-3 h-3" />
                                            {cat.title}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Active category content */}
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-20 left-4 right-4 bottom-4"
                                >
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${skillCategories[activeCategory].color} border border-white/10 h-full`}>
                                        <h3 className="text-lg font-bold mb-1 text-white">
                                            {skillCategories[activeCategory].title}
                                        </h3>
                                        <p className="text-xs text-white/60 mb-4">
                                            {skillCategories[activeCategory].subtitle}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {skillCategories[activeCategory].skills.map((skill, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.2, delay: i * 0.03 }}
                                                    className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating badges around phone */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-1/4 hidden md:flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur rounded-xl border border-border shadow-xl"
                        >
                            <Code className="w-4 h-4 text-primary" />
                            <span className="text-xs font-medium">Clean Code</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 bottom-1/4 hidden md:flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur rounded-xl border border-border shadow-xl"
                        >
                            <Palette className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-medium">Modern UI</span>
                        </motion.div>
                    </motion.div>

                    {/* Bento Grid of Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.1,
                                        type: "spring"
                                    }}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    onClick={() => setActiveCategory(index)}
                                    className={`relative overflow-hidden rounded-2xl p-5 cursor-pointer transition-all duration-300 ${activeCategory === index
                                            ? "bg-primary text-primary-foreground border-2 border-primary"
                                            : "bg-card border border-border hover:border-primary/30"
                                        }`}
                                >
                                    {/* Icon */}
                                    <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${activeCategory === index
                                            ? "bg-primary-foreground/20"
                                            : "bg-primary/10"
                                        }`}>
                                        <category.icon className={`w-5 h-5 ${activeCategory === index
                                                ? "text-primary-foreground"
                                                : "text-primary"
                                            }`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold mb-1">{category.title}</h3>

                                    {/* Subtitle */}
                                    <p className={`text-xs ${activeCategory === index
                                            ? "text-primary-foreground/70"
                                            : "text-muted-foreground"
                                        }`}>
                                        {category.skills.length} technologies
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tools row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mt-4 p-5 bg-card rounded-2xl border border-border"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-semibold">Core Tools</h4>
                                <span className="text-xs text-muted-foreground">
                                    Daily drivers
                                </span>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                {toolIcons.map((tool, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.1 }}
                                        className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-lg cursor-pointer hover:bg-primary/20 transition-colors duration-300"
                                        title={tool.name}
                                    >
                                        {tool.icon}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// React Icons imports for real skill icons
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiSocketdotio,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiFirebase,
    SiAmazon,
    SiVercel,
    SiDocker,
    SiKubernetes,
    SiNginx,
    SiCloudinary,
    SiRazorpay,
    SiAppwrite,
} from "react-icons/si";
import { FaDatabase, FaCloud, FaStream } from "react-icons/fa";

// Define all skills with their icons and categories
const allSkills = [
    // Frontend Skills
    { name: "HTML", icon: SiHtml5, category: "Frontend", color: "#E34F26" },
    { name: "CSS", icon: SiCss3, category: "Frontend", color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend", color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend", color: "#3178C6" },
    { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend", color: "#FFFFFF" },
    { name: "Redux", icon: SiRedux, category: "Frontend", color: "#764ABC" },
    { name: "Zustand", icon: SiReact, category: "Frontend", color: "#764ABC" },
    { name: "Tanstack Query", icon: SiReact, category: "Frontend", color: "#FF4154" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
    { name: "Shadcn UI", icon: SiReact, category: "Frontend", color: "#FFFFFF" },
    { name: "Material UI", icon: SiReact, category: "Frontend", color: "#007FFF" },

    // Backend Skills
    { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#339933" },
    { name: "Express", icon: SiExpress, category: "Backend", color: "#FFFFFF" },
    { name: "NestJS", icon: SiNestjs, category: "Backend", color: "#E0234E" },
    { name: "Socket.io", icon: SiSocketdotio, category: "Backend", color: "#FFFFFF" },
    { name: "Stream", icon: FaStream, category: "Backend", color: "#FF4B4B" },
    { name: "Cloudinary", icon: SiCloudinary, category: "Backend", color: "#3448C5" },
    { name: "Razorpay", icon: SiRazorpay, category: "Backend", color: "#02042B" },
    { name: "Celigo", icon: FaCloud, category: "Backend", color: "#00B388" },

    // Database Skills
    { name: "MongoDB", icon: SiMongodb, category: "Database", color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Database", color: "#4169E1" },
    { name: "NeonDB", icon: SiPostgresql, category: "Database", color: "#00E5CC" },
    { name: "Prisma", icon: SiPrisma, category: "Database", color: "#2D3748" },
    { name: "Drizzle", icon: FaDatabase, category: "Database", color: "#C5F74F" },
    { name: "Appwrite", icon: SiAppwrite, category: "Database", color: "#FD366E" },
    { name: "Firebase", icon: SiFirebase, category: "Database", color: "#FFCA28" },

    // DevOps & Cloud Skills
    { name: "AWS", icon: SiAmazon, category: "DevOps", color: "#FF9900" },
    { name: "AWS Bedrock", icon: SiAmazon, category: "DevOps", color: "#FF9900" },
    { name: "Render", icon: FaCloud, category: "DevOps", color: "#46E3B7" },
    { name: "Vercel", icon: SiVercel, category: "DevOps", color: "#FFFFFF" },
    { name: "Docker", icon: SiDocker, category: "DevOps", color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, category: "DevOps", color: "#326CE5" },
    { name: "Nginx", icon: SiNginx, category: "DevOps", color: "#009639" },
];

// Animation variants for staggered entrance
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax for background elements
    const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
        >
            {/* Animated background gradient */}
            <motion.div
                style={{ opacity: bgOpacity }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
            />

            {/* Parallax background text */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute top-1/4 left-0 text-[15vw] font-black whitespace-nowrap pointer-events-none select-none text-white/[0.02] -z-10"
            >
                MASTERED TOOLS
            </motion.div>

            {/* Floating orbs for ambiance */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
            />

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
                        Mastered <span className="text-muted-foreground font-light italic">Tools</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Proficient in industry-standard technologies, <br className="hidden sm:block" />
                        frameworks, and development tools.
                    </p>
                </motion.div>

                {/* Skills Grid - Pill-shaped cards like the reference */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
                >
                    {allSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 17 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative"
                        >
                            {/* Skill Card - Pill shape with icon */}
                            <div className="relative flex flex-col items-center justify-center p-6 rounded-[2rem] bg-gradient-to-b from-gray-900/80 to-gray-950/90 border border-gray-800/50 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300 hover:border-gray-700/80 h-full min-h-[140px]">
                                {/* Glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`,
                                    }}
                                />

                                {/* Icon container with glow */}
                                <motion.div
                                    whileHover={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10 mb-3"
                                >
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300"
                                        style={{
                                            boxShadow: `0 0 20px ${skill.color}30`,
                                        }}
                                    >
                                        <skill.icon
                                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: skill.color }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Skill name */}
                                <h4 className="relative z-10 text-sm font-semibold text-white/90 text-center group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </h4>

                                {/* Category label */}
                                <span className="relative z-10 mt-1 text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300 uppercase tracking-wider">
                                    {skill.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom stats or summary */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 text-center"
                >
                    {[
                        { label: "Frontend Tools", count: allSkills.filter(s => s.category === "Frontend").length },
                        { label: "Backend Tools", count: allSkills.filter(s => s.category === "Backend").length },
                        { label: "Database Tools", count: allSkills.filter(s => s.category === "Database").length },
                        { label: "DevOps Tools", count: allSkills.filter(s => s.category === "DevOps").length },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -5 }}
                            className="px-8 py-4 rounded-2xl bg-card/50 backdrop-blur border border-border/50"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="block text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
                            >
                                {stat.count}+
                            </motion.span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, Building2, Stethoscope, MessageCircle, Music, ShoppingCart } from "lucide-react";

// Project icons mapping
const projectIcons = [Building2, Stethoscope, MessageCircle, Music, ShoppingCart];

// Gradient backgrounds for cards - adapted to your lime theme
const projectGradients: [number, number][] = [
    [40, 55],   // Amber/Gold for Golden Bricks
    [75, 90],   // Lime-ish for healthcare
    [180, 200], // Cyan for chat
    [90, 120],  // Green for music
    [30, 50],   // Orange for e-commerce
];

const cardVariants: Variants = {
    offscreen: {
        y: 300,
        opacity: 0,
    },
    onscreen: {
        y: 50,
        opacity: 1,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h: number) => `hsl(${h}, 70%, 50%)`;

interface ProjectCardProps {
    project: typeof portfolioData.projects[0];
    index: number;
    hueA: number;
    hueB: number;
}

function ProjectCard({ project, index, hueA, hueB }: ProjectCardProps) {
    const router = useRouter();
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
    const Icon = projectIcons[index] || Stethoscope;

    const handleClick = () => {
        router.push(`/projects/${project.slug}`);
    };

    return (
        <motion.div
            className="overflow-hidden flex justify-center items-center relative pt-5 mb-8 cursor-pointer"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            onClick={handleClick}
        >
            {/* Splash background with clip path - now with image */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
                }}
            >
                {/* Project screenshot image */}
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                ) : (
                    <div
                        className="absolute inset-0"
                        style={{ background }}
                    />
                )}
                {/* Gradient overlay for better visibility */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 50%, ${hue(hueA)}80 100%)`
                    }}
                />
            </div>

            {/* Card */}
            <motion.div
                className="relative w-[300px] h-[430px] flex flex-col justify-between p-6 rounded-[20px] bg-card border border-border group hover:border-primary/50 transition-all duration-300"
                style={{
                    boxShadow:
                        "0 0 1px hsl(0deg 0% 0% / 0.2), 0 0 2px hsl(0deg 0% 0% / 0.2), 0 0 4px hsl(0deg 0% 0% / 0.2), 0 0 8px hsl(0deg 0% 0% / 0.2), 0 0 16px hsl(0deg 0% 0% / 0.2)",
                    transformOrigin: "10% 60%",
                }}
                variants={cardVariants}
            >
                {/* Top section with icon */}
                <div>
                    {/* Icon container */}
                    <motion.div
                        className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Icon className="w-10 h-10 text-primary" />
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                    </p>
                </div>

                {/* Bottom section with tech stack */}
                <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-0.5 text-[10px] font-medium rounded bg-muted text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-muted text-muted-foreground">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-primary/60 italic">
                            Click to view details →
                        </span>
                        <div className="flex gap-2">
                            {project.liveUrl && (
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            )}
                            <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

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
                        A showcase of my design projects, highlighting my skills and experience. Scroll down to reveal each project.
                    </p>
                </motion.div>

                {/* Scroll-triggered Project Cards */}
                <div className="mx-auto max-w-[500px] pb-[100px]">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            index={index}
                            hueA={projectGradients[index]?.[0] ?? 75}
                            hueB={projectGradients[index]?.[1] ?? 90}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

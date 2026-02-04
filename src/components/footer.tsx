"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Link from "next/link";

const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { icon: Github, href: portfolioData.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
];

export function Footer() {
    return (
        <footer className="relative py-16 px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border p-8 md:p-12"
                >
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        {/* Left Side - Branding */}
                        <div>
                            <Link href="#home" className="inline-block mb-6">
                                <span className="text-3xl font-bold text-primary">.Ahmed</span>
                            </Link>
                            <p className="text-muted-foreground max-w-sm mb-6">
                                Full Stack Developer crafting exceptional digital experiences with modern technologies.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target={social.href.startsWith("http") ? "_blank" : undefined}
                                        aria-label={social.label}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Links */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
                                <ul className="space-y-3">
                                    {footerLinks.slice(0, 3).map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4 text-foreground">More</h4>
                                <ul className="space-y-3">
                                    {footerLinks.slice(3).map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border mb-8" />

                    {/* Copyright & Credits */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Ahmed Thousif. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                            Built with
                            <span className="text-primary">Next.js</span>
                            &
                            <span className="text-primary">Framer Motion</span>
                        </p>
                    </div>
                </motion.div>

                {/* Bottom text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mt-8"
                >
                    <p className="text-xs text-muted-foreground/50">
                        Designed & Developed with 💚
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

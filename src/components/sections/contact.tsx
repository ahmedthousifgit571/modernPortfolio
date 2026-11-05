"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Eyebrow } from "@/components/ui/primitives";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

const channels = [
    { label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { label: "Phone", value: portfolioData.phone, href: `tel:${portfolioData.phone.replace(/\s/g, "")}` },
    { label: "LinkedIn", value: "in/ahmed-thousif", href: portfolioData.linkedin, external: true },
    { label: "GitHub", value: "ahmedthousifgit571", href: portfolioData.github, external: true },
];

function Field({
    label,
    name,
    type = "text",
    textarea,
}: {
    label: string;
    name: string;
    type?: string;
    textarea?: boolean;
}) {
    const cls =
        "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-7 text-lg text-fg outline-none transition-colors duration-300 placeholder:text-transparent focus:border-lime";
    return (
        <label className="relative block">
            {textarea ? (
                <textarea name={name} required rows={4} placeholder={label} className={cn(cls, "resize-none")} />
            ) : (
                <input name={name} type={type} required placeholder={label} className={cls} />
            )}
            <span className="pointer-events-none absolute left-0 top-7 origin-left text-lg text-muted transition-all duration-300 ease-out-expo peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.18em] peer-focus:text-lime peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.18em] peer-focus:uppercase peer-[:not(:placeholder-shown)]:uppercase font-mono">
                {label}
            </span>
        </label>
    );
}

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const send = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setStatus("sending");
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                formRef.current,
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" }
            );
            setStatus("sent");
            formRef.current.reset();
        } catch (err) {
            console.error("Email failed", err);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden py-28 md:py-44">
            <div className="container-x relative">
                <div data-anim="fade">
                    <Eyebrow>Contact</Eyebrow>
                </div>
                <h2
                    data-anim="chars"
                    className="mt-6 max-w-[13ch] font-display text-[clamp(3.25rem,10vw,10.5rem)] font-semibold leading-[0.86] tracking-[-0.05em]"
                >
                    Let&apos;s build something <em className="font-serif font-normal text-lime">great</em>
                </h2>

                <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-12">
                    {/* Direct channels */}
                    <div className="lg:col-span-5">
                        <Magnetic strength={0.18}>
                            <a
                                href={`mailto:${portfolioData.email}`}
                                data-anim="fade"
                                className="group relative inline-flex items-center gap-4 font-display text-[clamp(1.35rem,2.6vw,2.25rem)] font-medium tracking-[-0.02em]"
                            >
                                <span className="relative">
                                    {portfolioData.email}
                                    <span className="absolute -bottom-1 left-0 h-px w-full bg-fg/25" />
                                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-lime transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
                                </span>
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-black transition-transform duration-500 ease-out-expo group-hover:rotate-45">
                                    <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
                                </span>
                            </a>
                        </Magnetic>

                        <ul data-anim="stagger" className="mt-14">
                            {channels.slice(1).map((c) => (
                                <li key={c.label} className="border-t border-line last:border-b">
                                    <a
                                        href={c.href}
                                        target={c.external ? "_blank" : undefined}
                                        rel={c.external ? "noopener noreferrer" : undefined}
                                        className="group flex items-center justify-between gap-4 py-5"
                                    >
                                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{c.label}</span>
                                        <span className="flex items-center gap-2 text-fg/85 transition-colors duration-300 group-hover:text-lime">
                                            {c.value}
                                            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p data-anim="fade" className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                            {portfolioData.location} · Working worldwide
                        </p>
                    </div>

                    {/* Form */}
                    <div data-anim="fade" data-delay="0.1" className="lg:col-span-6 lg:col-start-7">
                        <div className="rounded-[2rem] bg-white/[0.03] p-1.5 ring-1 ring-white/10">
                            <form
                                ref={formRef}
                                onSubmit={send}
                                className="space-y-6 rounded-[calc(2rem-0.375rem)] bg-surface p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] md:p-10"
                            >
                                <p className="font-display text-2xl font-semibold tracking-[-0.02em]">Tell me about your project</p>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Field label="Your name" name="user_name" />
                                    <Field label="Your email" name="user_email" type="email" />
                                </div>
                                <Field label="What are we building?" name="message" textarea />

                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="group/pill inline-flex items-center gap-3 rounded-full bg-lime py-1.5 pl-6 pr-1.5 text-sm font-medium text-black transition-transform duration-500 ease-out-expo active:scale-[0.97] disabled:opacity-70"
                                    >
                                        {status === "sending" ? "Sending…" : "Send message"}
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 ease-out-expo group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5">
                                            {status === "sending" ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                                            )}
                                        </span>
                                    </button>
                                    <p aria-live="polite" className="text-sm">
                                        {status === "sent" && (
                                            <span className="inline-flex items-center gap-2 text-lime">
                                                <Check className="h-4 w-4" /> Message sent — I&apos;ll reply soon.
                                            </span>
                                        )}
                                        {status === "error" && (
                                            <span className="text-red-400">
                                                Something went wrong. Email me directly instead.
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

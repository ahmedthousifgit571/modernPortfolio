import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Eyebrow, PillLink, RevealImage, splitTitle } from "@/components/ui/primitives";
import { Footer } from "@/components/footer";
import { ScrollAnimations } from "@/components/motion/scroll-animations";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
    return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);
    if (!project) return {};
    const description = project.description.length > 158 ? `${project.description.slice(0, 155).trimEnd()}…` : project.description;
    return {
        title: splitTitle(project.title).name,
        description,
        openGraph: { title: project.title, description, images: [{ url: project.image.src }] },
    };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const index = portfolioData.projects.findIndex((p) => p.slug === slug);
    if (index === -1) notFound();

    const project = portfolioData.projects[index];
    const next = portfolioData.projects[(index + 1) % portfolioData.projects.length];
    const { name, subtitle } = splitTitle(project.title);
    const nextTitle = splitTitle(next.title);
    const isStore = project.liveUrl?.includes("play.google.com");

    // Break the long description into readable paragraphs (~2 sentences each)
    // (split only on ". Capital" so names like "Next.js" stay intact)
    const sentences = project.description.split(/(?<=[.!?])\s+(?=[A-Z])/);
    const paragraphs: string[] = [];
    for (let i = 0; i < sentences.length; i += 2) paragraphs.push(sentences.slice(i, i + 2).join("").trim());

    return (
        <>
            {/* Minimal header */}
            <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
                <nav className="flex w-full max-w-max items-center gap-1 rounded-full border border-white/10 bg-black/55 p-1.5 backdrop-blur-xl">
                    <Link
                        href="/#projects"
                        className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-fg/80 transition-colors hover:text-fg"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-x-0.5" strokeWidth={1.5} />
                        All projects
                    </Link>
                    <Link href="/" className="px-3.5 font-display text-lg font-bold tracking-tight text-lime">
                        .Ahmed
                    </Link>
                </nav>
            </header>

            <main>
                {/* Title */}
                <section className="container-x pb-14 pt-36 md:pb-20 md:pt-48">
                    <div data-anim="fade" className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Eyebrow>{project.category}</Eyebrow>
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                            {String(index + 1).padStart(2, "0")} / {String(portfolioData.projects.length).padStart(2, "0")}
                        </span>
                    </div>
                    <h1
                        data-anim="lines"
                        className="mt-8 max-w-[16ch] font-display text-[clamp(3rem,9vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.045em]"
                    >
                        {name}
                    </h1>
                    {subtitle && (
                        <p data-anim="fade" data-delay="0.25" className="mt-6 font-serif text-2xl italic text-fg/60 md:text-4xl">
                            {subtitle}
                        </p>
                    )}

                    {/* Meta strip */}
                    <dl data-anim="stagger" data-delay="0.3" className="mt-14 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:mt-20 md:grid-cols-4">
                        <div>
                            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Category</dt>
                            <dd className="mt-2">{project.category}</dd>
                        </div>
                        <div>
                            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Focus</dt>
                            <dd className="mt-2">{project.tags.slice(0, 2).join(" · ")}</dd>
                        </div>
                        <div>
                            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Stack</dt>
                            <dd className="mt-2">{project.tech.length} technologies</dd>
                        </div>
                        <div className="col-span-2 flex flex-wrap items-start gap-3 md:col-span-1 md:justify-end">
                            {project.liveUrl && (
                                <PillLink href={project.liveUrl} external>
                                    {isStore ? "Play Store" : "Visit site"}
                                </PillLink>
                            )}
                            {project.githubUrl && (
                                <PillLink
                                    href={project.githubUrl}
                                    external
                                    variant="ghost"
                                    icon={<Github className="h-4 w-4" strokeWidth={1.5} />}
                                >
                                    Code
                                </PillLink>
                            )}
                        </div>
                    </dl>
                </section>

                {/* Hero image */}
                <section className="px-2 md:px-4">
                    <RevealImage
                        src={project.image}
                        alt={project.title}
                        priority
                        sizes="100vw"
                        className="mx-auto aspect-[16/10] max-w-[1600px] rounded-[1.25rem] md:rounded-[2.25rem]"
                    />
                </section>

                {/* Overview */}
                <section className="container-x grid gap-10 py-24 md:py-36 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32">
                            <div data-anim="fade">
                                <Eyebrow>Overview</Eyebrow>
                            </div>
                            <ul data-anim="stagger" className="mt-8 flex flex-wrap gap-2">
                                {project.tags.map((t) => (
                                    <li key={t} className="rounded-full bg-lime/10 px-3 py-1 font-mono text-[11px] text-lime">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-8 lg:col-span-8">
                        {paragraphs.map((p, i) => (
                            <p
                                key={i}
                                data-anim="fade"
                                className={
                                    i === 0
                                        ? "font-display text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.02em]"
                                        : "text-lg leading-relaxed text-muted md:text-xl"
                                }
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Stack */}
                <section className="container-x pb-24 md:pb-36">
                    <div data-anim="fade">
                        <Eyebrow>Built with</Eyebrow>
                    </div>
                    <ul className="mt-10">
                        {project.tech.map((t, i) => (
                            <li key={t} className="group relative flex items-baseline justify-between py-5 md:py-6">
                                <span data-anim="line" data-delay={String(i * 0.05)} className="absolute inset-x-0 top-0 h-px bg-line" />
                                <span className="font-display text-[clamp(1.75rem,4.5vw,4rem)] font-semibold tracking-[-0.035em] text-fg/80 transition-[color,transform] duration-500 ease-out-expo group-hover:translate-x-3 group-hover:text-lime">
                                    {t}
                                </span>
                                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Next project */}
                <section className="border-t border-line">
                    <Link
                        href={`/projects/${next.slug}`}
                        data-cursor="Next"
                        className="group container-x grid items-center gap-10 py-20 md:grid-cols-12 md:py-28"
                    >
                        <div className="md:col-span-7">
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Next project</p>
                            <p className="mt-5 font-display text-[clamp(2.75rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.045em] transition-colors duration-500 group-hover:text-lime">
                                {nextTitle.name}
                            </p>
                            <span className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-black">
                                <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                            </span>
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:col-span-5">
                            <Image
                                src={next.image}
                                alt={next.title}
                                fill
                                placeholder="blur"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                className="object-cover object-top transition-transform duration-[1.4s] ease-out-expo group-hover:scale-105"
                            />
                        </div>
                    </Link>
                </section>
            </main>

            <Footer />
            <ScrollAnimations />
        </>
    );
}

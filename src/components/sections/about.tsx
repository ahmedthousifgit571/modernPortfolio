import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { Eyebrow } from "@/components/ui/primitives";

function projectImage(slug: string) {
    return portfolioData.projects.find((p) => p.slug === slug)!.image;
}

/** Small rounded image that sits inline with the statement text. */
function Pill({ slug, alt }: { slug: string; alt: string }) {
    return (
        <span
            data-pill
            className="relative mx-[0.12em] inline-block h-[0.82em] w-[1.7em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline ring-1 ring-white/15"
        >
            <Image src={projectImage(slug)} alt={alt} fill sizes="140px" className="object-cover object-top" />
        </span>
    );
}

function startYear() {
    const period = portfolioData.experience[0]?.period ?? "";
    const year = parseInt(period.match(/\d{4}/)?.[0] ?? "", 10);
    return Number.isFinite(year) ? year : new Date().getFullYear();
}

export function About() {
    const uniqueTech = new Set(Object.values(portfolioData.skills).flat()).size;
    const years = Math.max(1, new Date().getFullYear() - startYear());

    const stats = [
        { value: portfolioData.projects.length, suffix: "", label: "Projects shipped" },
        { value: 50, suffix: "+", label: "Happy clients" },
        { value: years, suffix: "+", label: "Years in production" },
        { value: uniqueTech, suffix: "+", label: "Technologies" },
    ];

    return (
        <section id="about" className="relative py-28 md:py-44">
            <div className="container-x">
                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-3">
                        <div data-anim="fade">
                            <Eyebrow>About me</Eyebrow>
                        </div>
                    </div>

                    <div className="lg:col-span-9">
                        <p
                            data-anim="words-scrub"
                            className="font-display text-[clamp(1.85rem,4.4vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.025em]"
                        >
                            I&apos;m Ahmed, a full stack engineer at Cloud Destinations. I build cinematic websites{" "}
                            <Pill slug="thrill-mill" alt="Thrill Mill website" /> CRMs, billing systems and AI agents{" "}
                            <Pill slug="senseimage-drone" alt="SenseImage website" /> that are fast, scalable and
                            obsessively detailed.
                        </p>

                        <div className="mt-14 grid gap-8 text-base leading-relaxed text-muted md:mt-20 md:grid-cols-2 md:text-lg">
                            {portfolioData.about.paragraphs.map((p, i) => (
                                <p key={i} data-anim="fade" data-delay={String(i * 0.1)}>
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <dl className="mt-24 grid grid-cols-2 md:mt-32 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <div key={s.label} className="relative pb-2 pr-6 pt-8">
                            <span data-anim="line" data-delay={String(i * 0.1)} className="absolute inset-x-0 top-0 h-px bg-line" />
                            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                                <span className="text-lime">0{i + 1}</span> — {s.label}
                            </dt>
                            <dd className="mt-4 font-display text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-none tracking-[-0.04em]">
                                <span data-anim="count" data-to={s.value} data-delay={String(i * 0.08)}>
                                    {s.value}
                                </span>
                                <span className="text-lime">{s.suffix}</span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

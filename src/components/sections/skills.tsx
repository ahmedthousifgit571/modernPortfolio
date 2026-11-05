import type { IconType } from "react-icons";
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
    SiNodedotjs, SiExpress, SiNestjs, SiSocketdotio, SiMongodb, SiPostgresql, SiPrisma,
    SiFirebase, SiVercel, SiDocker, SiKubernetes, SiNginx, SiCloudinary, SiRazorpay,
    SiAppwrite, SiPython, SiFastapi, SiReactquery, SiShadcnui, SiMui, SiDrizzle, SiRender, SiLangchain,
} from "react-icons/si";
import { FaAws, FaDatabase, FaCloud, FaStream, FaRobot, FaProjectDiagram, FaCubes } from "react-icons/fa";
import { portfolioData } from "@/lib/data";
import { Eyebrow } from "@/components/ui/primitives";

// Icon + brand colour (used on hover). Unknown skills fall back to a neutral icon.
const icons: Record<string, [IconType, string]> = {
    HTML: [SiHtml5, "#E34F26"],
    CSS: [SiCss3, "#2965F1"],
    JavaScript: [SiJavascript, "#F7DF1E"],
    TypeScript: [SiTypescript, "#3178C6"],
    React: [SiReact, "#61DAFB"],
    "Next.js": [SiNextdotjs, "#FFFFFF"],
    Redux: [SiRedux, "#9B6BDF"],
    Zustand: [FaCubes, "#E8B04B"],
    "Tanstack Query": [SiReactquery, "#FF4154"],
    "Tailwind CSS": [SiTailwindcss, "#38BDF8"],
    "Shadcn UI": [SiShadcnui, "#FFFFFF"],
    "Material UI": [SiMui, "#007FFF"],
    "Node.js": [SiNodedotjs, "#5FA04E"],
    Express: [SiExpress, "#FFFFFF"],
    NestJS: [SiNestjs, "#E0234E"],
    "Socket.io": [SiSocketdotio, "#FFFFFF"],
    Stream: [FaStream, "#005FFF"],
    Cloudinary: [SiCloudinary, "#3448C5"],
    Razorpay: [SiRazorpay, "#3395FF"],
    Celigo: [FaCloud, "#00B388"],
    Python: [SiPython, "#FFD43B"],
    FastAPI: [SiFastapi, "#009688"],
    "Vector DB": [FaDatabase, "#00E5CC"],
    LangGraph: [FaProjectDiagram, "#FF6B6B"],
    LangChain: [SiLangchain, "#3CB4A0"],
    Agno: [FaRobot, "#CCFF00"],
    MongoDB: [SiMongodb, "#47A248"],
    PostgreSQL: [SiPostgresql, "#4169E1"],
    NeonDB: [SiPostgresql, "#00E599"],
    Prisma: [SiPrisma, "#FFFFFF"],
    Drizzle: [SiDrizzle, "#C5F74F"],
    Appwrite: [SiAppwrite, "#FD366E"],
    Firebase: [SiFirebase, "#FFCA28"],
    AWS: [FaAws, "#FF9900"],
    "AWS Bedrock": [FaAws, "#FF9900"],
    Render: [SiRender, "#FFFFFF"],
    Vercel: [SiVercel, "#FFFFFF"],
    Docker: [SiDocker, "#2496ED"],
    Kubernetes: [SiKubernetes, "#326CE5"],
    Nginx: [SiNginx, "#009639"],
};

const groups: { key: keyof typeof portfolioData.skills; title: string; blurb: string }[] = [
    { key: "frontend", title: "Frontend", blurb: "Interfaces, motion & design systems" },
    { key: "backend", title: "Backend", blurb: "APIs, realtime & integrations" },
    { key: "ai", title: "AI & Agents", blurb: "RAG, agent graphs & LLM tooling" },
    { key: "database", title: "Data", blurb: "Relational, document & vector stores" },
    { key: "devops", title: "Cloud & DevOps", blurb: "Deploy, scale & observe" },
];

export function Skills() {
    return (
        <section id="skills" className="relative py-28 md:py-44">
            <div className="container-x">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-8">
                        <div data-anim="fade">
                            <Eyebrow>Skills</Eyebrow>
                        </div>
                        <h2
                            data-anim="chars"
                            className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.045em]"
                        >
                            The <em className="font-serif font-normal text-lime">toolkit</em>
                        </h2>
                    </div>
                    <p data-anim="fade" data-delay="0.15" className="max-w-xs text-muted md:col-span-4 md:justify-self-end">
                        The stack I reach for to take an idea from first sketch to production.
                    </p>
                </div>

                <div className="mt-20 md:mt-28">
                    {groups.map((g, gi) => (
                        <div key={g.key} className="group/row relative grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-12">
                            <span data-anim="line" className="absolute inset-x-0 top-0 h-px bg-line" />
                            <div data-anim="fade" className="md:col-span-4">
                                <span className="font-mono text-xs text-lime">0{gi + 1}</span>
                                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] transition-colors duration-500 md:text-[2.75rem] md:leading-none md:text-fg/50 md:group-hover/row:text-fg">
                                    {g.title}
                                </h3>
                                <p className="mt-3 text-sm text-muted">{g.blurb}</p>
                            </div>
                            <ul data-anim="stagger" className="flex flex-wrap content-start gap-2.5 md:col-span-8">
                                {portfolioData.skills[g.key].map((name) => {
                                    const [Icon, color] = icons[name] ?? [FaCubes, "#ccff00"];
                                    return (
                                        <li
                                            key={name}
                                            style={{ "--brand": color } as React.CSSProperties}
                                            className="group/chip flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] py-2 pl-2.5 pr-4 text-sm text-fg/80 transition-[border-color,background-color,color] duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-fg"
                                        >
                                            <Icon
                                                aria-hidden="true"
                                                className="h-[18px] w-[18px] text-fg/45 transition-colors duration-300 group-hover/chip:text-[var(--brand)] group-hover/row:text-[var(--brand)]"
                                            />
                                            {name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                    <span data-anim="line" className="block h-px bg-line" />
                </div>
            </div>
        </section>
    );
}

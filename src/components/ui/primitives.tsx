import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Eyebrow — tiny label that precedes section headings                 */
/* ------------------------------------------------------------------ */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <p
            className={cn(
                "inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted",
                className
            )}
        >
            <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
            {children}
        </p>
    );
}

/* ------------------------------------------------------------------ */
/* PillLink — rounded CTA with the arrow nested in its own circle      */
/* ------------------------------------------------------------------ */
type PillProps = {
    href: string;
    children: React.ReactNode;
    variant?: "lime" | "ghost" | "light";
    external?: boolean;
    icon?: React.ReactNode;
    className?: string;
};

export function PillLink({ href, children, variant = "lime", external, icon, className }: PillProps) {
    const styles = {
        lime: "bg-lime text-black",
        light: "bg-fg text-black",
        ghost: "bg-white/[0.04] text-fg ring-1 ring-inset ring-white/12 hover:bg-white/[0.08]",
    }[variant];
    const bubble = {
        lime: "bg-black/10",
        light: "bg-black/10",
        ghost: "bg-white/10",
    }[variant];

    const content = (
        <>
            <span className="pl-1">{children}</span>
            <span
                className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-out-expo group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 group-hover/pill:scale-105",
                    bubble
                )}
            >
                {icon ?? <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />}
            </span>
        </>
    );

    const cls = cn(
        "group/pill inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-medium transition-[transform,background-color] duration-500 ease-out-expo active:scale-[0.97]",
        styles,
        className
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                {content}
            </a>
        );
    }
    // In-page anchors: plain <a> so Lenis handles the smooth scroll
    if (href.startsWith("#")) {
        return (
            <a href={href} className={cls}>
                {content}
            </a>
        );
    }
    return (
        <Link href={href} className={cls}>
            {content}
        </Link>
    );
}

/* ------------------------------------------------------------------ */
/* RevealImage — wipe-in + inner zoom-settle + scroll parallax         */
/* ------------------------------------------------------------------ */
export function RevealImage({
    src,
    alt,
    sizes,
    className,
    imgClassName,
    priority,
    parallax = true,
}: {
    src: StaticImageData;
    alt: string;
    sizes: string;
    className?: string;
    imgClassName?: string;
    priority?: boolean;
    parallax?: boolean;
}) {
    return (
        <div data-anim="clip" className={cn("relative overflow-hidden bg-surface", className)}>
            <div
                data-anim={parallax ? "parallax" : undefined}
                data-speed="0.07"
                className={cn("absolute inset-x-0", parallax ? "-top-[8%] h-[116%]" : "inset-y-0")}
            >
                <Image
                    data-anim-inner
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    priority={priority}
                    placeholder="blur"
                    className={cn("object-cover object-top", imgClassName)}
                />
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Section heading helper — split a "Name — subtitle" project title     */
/* ------------------------------------------------------------------ */
export function splitTitle(title: string): { name: string; subtitle?: string } {
    const [name, ...rest] = title.split(" — ");
    return { name, subtitle: rest.join(" — ") || undefined };
}

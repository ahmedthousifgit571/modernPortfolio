"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export type FolderItem = { id: string; image: StaticImageData; alt: string };

const darken = (hex: string, percent: number) => {
    const n = parseInt(hex.replace("#", ""), 16);
    const f = (c: number) => Math.max(0, Math.min(255, Math.floor(c * (1 - percent))));
    return `#${((1 << 24) + (f((n >> 16) & 255) << 16) + (f((n >> 8) & 255) << 8) + f(n & 255)).toString(16).slice(1)}`;
};

// Fanned-out position of each paper when the folder is open / hovered
const FAN = [
    "translate(-120%, -70%) rotate(-15deg)",
    "translate(10%, -70%) rotate(15deg)",
    "translate(-50%, -100%) rotate(5deg)",
];
const PAPER_SIZE = ["w-[70%] h-[80%]", "w-[80%] h-[80%]", "w-[90%] h-[80%]"];
const PAPER_BG = ["#e6e6e6", "#f2f2f2", "#ffffff"];

/**
 * Lime folder holding up to three project thumbnails. Fans open on hover;
 * when `emptied` the thumbnails hide (they've "flown out" to the showcase).
 * Each paper carries `data-flip-id` so GSAP Flip can animate it into place.
 */
export function Folder({
    color = "#ccff00",
    size = 1,
    items = [],
    open = false,
    emptied = false,
    label,
    onClick,
}: {
    color?: string;
    size?: number;
    items?: FolderItem[];
    open?: boolean;
    emptied?: boolean;
    label: string;
    onClick?: () => void;
}) {
    const [hovered, setHovered] = useState(false);
    const paperRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isOpen = open || hovered;
    const back = darken(color, 0.12);

    const onPaperMove = (e: React.PointerEvent<HTMLDivElement>, i: number) => {
        const el = paperRefs.current[i];
        if (!el || !isOpen) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${(e.clientX - (r.left + r.width / 2)) * 0.15}px`);
        el.style.setProperty("--my", `${(e.clientY - (r.top + r.height / 2)) * 0.15}px`);
    };
    const onPaperLeave = (i: number) => {
        const el = paperRefs.current[i];
        el?.style.setProperty("--mx", "0px");
        el?.style.setProperty("--my", "0px");
    };

    return (
        <div style={{ transform: `scale(${size})` }}>
            <div
                role="button"
                tabIndex={0}
                aria-expanded={open}
                aria-label={`${open ? "Close" : "Open"} ${label}`}
                onClick={onClick}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onClick?.();
                    }
                }}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                className={cn(
                    "group relative cursor-pointer transition-transform duration-300 ease-out-expo",
                    isOpen ? "-translate-y-2" : "hover:-translate-y-2"
                )}
            >
                <div className="relative h-[80px] w-[100px] rounded-[0_10px_10px_10px]" style={{ backgroundColor: back }}>
                    <span
                        className="absolute bottom-[98%] left-0 z-0 h-[10px] w-[30px] rounded-[5px_5px_0_0]"
                        style={{ backgroundColor: back }}
                    />

                    {[0, 1, 2].map((i) => {
                        const item = items[i];
                        return (
                            <div
                                key={i}
                                ref={(el) => {
                                    paperRefs.current[i] = el;
                                }}
                                data-flip-id={item?.id}
                                onPointerMove={(e) => onPaperMove(e, i)}
                                onPointerLeave={() => onPaperLeave(i)}
                                className={cn(
                                    "absolute bottom-[10%] left-1/2 z-20 overflow-hidden rounded-[10px] shadow-lg transition-[transform,opacity] duration-300 ease-out-expo",
                                    PAPER_SIZE[i],
                                    emptied && "opacity-0"
                                )}
                                style={{
                                    backgroundColor: PAPER_BG[i],
                                    transform: isOpen
                                        ? `${FAN[i]} translate(var(--mx, 0px), var(--my, 0px))`
                                        : "translate(-50%, 10%)",
                                }}
                            >
                                {item && (
                                    <Image
                                        src={item.image}
                                        alt=""
                                        fill
                                        sizes="140px"
                                        className="pointer-events-none select-none object-cover object-top"
                                    />
                                )}
                            </div>
                        );
                    })}

                    {/* Front flaps */}
                    {[15, -15].map((skew) => (
                        <div
                            key={skew}
                            className="absolute z-30 h-full w-full origin-bottom rounded-[5px_10px_10px_10px] transition-transform duration-300 ease-out-expo"
                            style={{
                                backgroundColor: color,
                                transform: isOpen ? `skew(${skew}deg) scaleY(0.6)` : undefined,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

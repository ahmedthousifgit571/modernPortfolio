"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

let lastPath: string | null = null;

/**
 * Lime curtain that wipes away on client-side page changes
 * (skipped on the very first load so the hero intro plays clean).
 */
export default function Template({ children }: { children: React.ReactNode }) {
    const curtain = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useGSAP(() => {
        const navigated = lastPath !== null && lastPath !== pathname;
        lastPath = pathname;
        if (!navigated || prefersReducedMotion()) return;

        gsap.timeline()
            .set(curtain.current, { display: "flex", yPercent: 0 })
            .to(curtain.current, { yPercent: -100, duration: 1, ease: "expo.inOut", delay: 0.1 })
            .set(curtain.current, { display: "none" });
    });

    return (
        <>
            <div
                ref={curtain}
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-[60] hidden items-center justify-center bg-lime"
            >
                <span className="font-display text-3xl font-bold tracking-tight text-black">.Ahmed</span>
            </div>
            {children}
        </>
    );
}

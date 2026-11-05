"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

let lenisInstance: Lenis | null = null;

/** The active Lenis instance (null when reduced motion is on). */
export function getLenis() {
    return lenisInstance;
}

/** Smoothly scroll to a selector / element / position, falling back to native scroll. */
export function scrollToTarget(target: string | HTMLElement | number, offset = 0) {
    const lenis = getLenis();
    if (lenis) {
        lenis.scrollTo(target, { offset, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
        return;
    }
    if (typeof target === "number") {
        window.scrollTo({ top: target });
        return;
    }
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ block: "start" });
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        if (prefersReducedMotion()) return;

        const lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 1,
            anchors: { offset: -24 },
            autoRaf: false,
        });
        lenisInstance = lenis;

        lenis.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tick);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);

    // New page → start at the top (unless we're jumping to a #hash)
    useEffect(() => {
        if (window.location.hash) return;
        lenisInstance?.scrollTo(0, { immediate: true, force: true });
    }, [pathname]);

    return <>{children}</>;
}

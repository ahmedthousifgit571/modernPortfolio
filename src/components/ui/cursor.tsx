"use client";

import { useRef } from "react";
import { gsap, useGSAP, hasFinePointer } from "@/lib/gsap";

/**
 * A blended dot that trails the pointer and morphs into a labelled lime
 * bubble over anything marked with `data-cursor="Label"`.
 * Only mounts its behaviour for mouse / trackpad users.
 */
export function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const bubbleRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        if (!hasFinePointer()) return;
        const dot = dotRef.current!;
        const bubble = bubbleRef.current!;

        gsap.set([dot, bubble], { xPercent: -50, yPercent: -50, autoAlpha: 0 });
        gsap.set(bubble, { scale: 0 });

        const dotX = gsap.quickTo(dot, "x", { duration: 0.25, ease: "power3" });
        const dotY = gsap.quickTo(dot, "y", { duration: 0.25, ease: "power3" });
        const bubX = gsap.quickTo(bubble, "x", { duration: 0.6, ease: "power3" });
        const bubY = gsap.quickTo(bubble, "y", { duration: 0.6, ease: "power3" });

        let visible = false;
        let mode: "default" | "link" | "label" = "default";

        const onMove = (e: PointerEvent) => {
            if (!visible) {
                visible = true;
                gsap.set([dot, bubble], { x: e.clientX, y: e.clientY });
                gsap.to(dot, { autoAlpha: 1, duration: 0.3 });
            }
            dotX(e.clientX);
            dotY(e.clientY);
            bubX(e.clientX);
            bubY(e.clientY);
        };

        const setMode = (next: typeof mode, label?: string) => {
            if (next === mode && next !== "label") return;
            mode = next;
            if (next === "label") {
                if (labelRef.current) labelRef.current.textContent = label ?? "";
                gsap.to(bubble, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.out", overwrite: "auto" });
                gsap.to(dot, { scale: 0, duration: 0.3, overwrite: "auto" });
            } else {
                gsap.to(bubble, { autoAlpha: 0, scale: 0, duration: 0.35, ease: "power3.out", overwrite: "auto" });
                gsap.to(dot, { scale: next === "link" ? 3.2 : 1, duration: 0.4, ease: "expo.out", overwrite: "auto" });
            }
        };

        const onOver = (e: PointerEvent) => {
            const target = e.target as Element | null;
            const labelled = target?.closest<HTMLElement>("[data-cursor]");
            if (labelled) return setMode("label", labelled.dataset.cursor);
            if (target?.closest("a, button, [role='button'], input, textarea, label")) return setMode("link");
            setMode("default");
        };

        const onLeaveWindow = () => {
            visible = false;
            gsap.to([dot, bubble], { autoAlpha: 0, duration: 0.3 });
            mode = "default";
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        document.addEventListener("pointerover", onOver, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeaveWindow);

        return () => {
            window.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerover", onOver);
            document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
        };
    });

    return (
        <>
            <div
                ref={dotRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[70] h-2.5 w-2.5 rounded-full bg-white mix-blend-difference invisible"
            />
            <div
                ref={bubbleRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[70] flex h-24 w-24 items-center justify-center rounded-full bg-lime text-black invisible"
            >
                <span ref={labelRef} className="font-mono text-[11px] font-medium uppercase tracking-[0.18em]" />
            </div>
        </>
    );
}

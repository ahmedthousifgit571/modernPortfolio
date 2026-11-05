import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText, Flip, useGSAP);
    gsap.defaults({ ease: "expo.out", duration: 1.1 });
    ScrollTrigger.config({ ignoreMobileResize: true });
}

/** True when the visitor asked the OS for less motion. */
export function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True for mouse / trackpad users (custom cursor + magnetic effects). */
export function hasFinePointer() {
    return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export { gsap, ScrollTrigger, SplitText, Flip, useGSAP };

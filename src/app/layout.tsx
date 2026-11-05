import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Instrument_Serif, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Cursor } from "@/components/ui/cursor";

const display = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
    display: "swap",
});

const sans = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
    display: "swap",
});

const mono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

// Hero name (matches the original iPhone hero)
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "600"],
    display: "swap",
});

const serif = Instrument_Serif({
    variable: "--font-instrument",
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Ahmed Thousif — Full Stack Developer",
        template: "%s — Ahmed Thousif",
    },
    description:
        "Full Stack Developer building cinematic websites, CRMs, billing software, mobile apps and AI agents with Next.js, React, Node.js and the cloud.",
    keywords: ["Full Stack Developer", "Next.js", "React", "Node.js", "GSAP", "AI Agents", "Portfolio", "Ahmed Thousif"],
    authors: [{ name: "Ahmed Thousif" }],
    openGraph: {
        title: "Ahmed Thousif — Full Stack Developer",
        description: "Cinematic websites, CRMs, billing software and AI agents — built fast and shipped to production.",
        type: "website",
    },
};

export const viewport: Viewport = {
    themeColor: "#000000",
    colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${display.variable} ${sans.variable} ${mono.variable} ${serif.variable} ${poppins.variable}`}
        >
            <head>
                {/* Marks JS as available before paint so entrance animations don't flash */}
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
            </head>
            <body>
                <SmoothScroll>{children}</SmoothScroll>
                <Cursor />
            </body>
        </html>
    );
}

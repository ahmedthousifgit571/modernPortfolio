import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { Showreel } from "@/components/sections/showreel";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ScrollAnimations } from "@/components/motion/scroll-animations";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <About />
                <Showreel />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
            </main>
            <Footer />
            {/* Must stay last: activates every data-anim on the page */}
            <ScrollAnimations />
        </>
    );
}

# Ahmed Thousif - Portfolio

A cinematic, high-performance personal portfolio built with Next.js 16, Tailwind CSS 4, GSAP and Lenis — black + lime, kinetic typography and scroll-driven motion throughout.


## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, static generation)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [GSAP](https://gsap.com/) — ScrollTrigger, SplitText, Flip (+ `@gsap/react`)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/), synced to the GSAP ticker
- **Images:** `next/image` (AVIF/WebP, responsive sizes, blur placeholders)
- **Fonts:** Bricolage Grotesque, Geist, Geist Mono, Instrument Serif via `next/font`
- **Icons:** Lucide, React Icons
- **Contact form:** EmailJS


## ✨ Features

- 🎬 **Kinetic hero:** split-letter name reveal over a feathered portrait; the name slides apart on scroll.
- 🔭 **Zoom showreel:** a pinned collage of real project screenshots that zooms to full-screen.
- 📁 **Folder → showcase flight:** opening a project folder flies its thumbnails into the list (GSAP Flip).
- ✍️ **Declarative scroll motion:** add `data-anim="lines|chars|fade|stagger|clip|parallax|line|count|words-scrub"` to any element.
- 🖱️ **Custom cursor & magnetic buttons** on mouse/trackpad devices.
- ♿ **Respects `prefers-reduced-motion`** — smooth scroll and animations switch off, content stays visible.
- ⚡ **Fast:** static pages, optimised images, no animation work for offscreen sections.


## 📂 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx              # Fonts, metadata, smooth scroll, cursor, grain
│   ├── template.tsx            # Lime curtain page transition
│   ├── page.tsx                # Home page (section order)
│   └── projects/[slug]/        # Statically generated case-study pages
├── assets/                     # Optimised images (profile + projects/*.webp)
├── components/
│   ├── motion/scroll-animations.tsx  # data-anim engine
│   ├── providers/smooth-scroll.tsx   # Lenis + ScrollTrigger sync
│   ├── sections/               # Hero, Marquee, About, Showreel, Projects, …
│   ├── ui/                     # Cursor, Magnetic, Folder, primitives
│   ├── navbar.tsx
│   └── footer.tsx
└── lib/
    ├── data.ts                 # All content — projects, skills, experience
    └── gsap.ts                 # Plugin registration + helpers
```


## ➕ Adding a project

1. Save a screenshot (ideally 2400×1500, 16:10) to `src/assets/projects/<slug>.webp` (PNG/JPG also work — Next optimises them).
2. In `src/lib/data.ts`, import it at the top: `import mySiteImg from "@/assets/projects/my-site.webp";`
3. Add an entry to `projects` with `image: mySiteImg` and a `category` from `projectCategories`.

The folder counts, project page and SEO metadata are generated automatically.


## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ahemd-portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.


## 📜 Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Runs the built production server.
-   `npm run lint`: Runs ESLint to check for code quality.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!


## 📄 License

[MIT](LICENSE)
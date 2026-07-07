export const portfolioData = {
    name: "Ahmed Thousif",
    initials: "AT",
    title: "Full Stack Developer",
    tagline: "Building exceptional digital experiences with modern technologies",
    email: "ahmedthousif9388@gmail.com",
    phone: "+91 8139057899",
    linkedin: "https://www.linkedin.com/in/ahmed-thousif/",
    github: "https://github.com/ahmedthousifgit571/",

    about: {
        lead: "I'm a passionate Full Stack Developer with a strong foundation in building scalable, user-centric web applications using modern technologies.",
        paragraphs: [
            "Currently working at Cloud Destinations as a Full Stack Engineer, I specialize in creating seamless digital experiences from concept to deployment. My expertise spans across frontend technologies like React.js and Next.js, backend frameworks like Node.js and NestJS, and cloud services including AWS.",
            "I recently contributed to building an Agentic AI platform integrating AWS Bedrock Agents for conversational HR workflows, showcasing my ability to work with cutting-edge AI technologies."
        ]
    },

    stats: [
        { number: "5+", label: "Projects" },
        { number: "1+", label: "Years Exp" },
        { number: "15+", label: "Technologies" },
    ],

    education: {
        degree: "B.E. in Computer Science Engineering",
        institution: "Crescent University, Chennai",
        period: "2019 - 2023"
    },

    experience: [
        {
            title: "Full Stack Engineer",
            company: "Cloud Destinations",
            period: "June 2024 - Present",
            highlights: [
                {
                    title: "Agentic AI Platform",
                    description: "Contributed as Full Stack Developer using React.js (frontend) and NestJS (backend), integrating AWS Bedrock Agents for conversational HR workflows"
                },
                {
                    title: "Admin Analytics Dashboard",
                    description: "Built analytics-driven admin dashboard using React.js, Redux, and Material UI for real-time insights"
                },
                {
                    title: "Calendar Management System",
                    description: "Developed secure REST APIs using Node.js, Express, OAuth 2.0, and MongoDB for calendar integrations"
                },
                {
                    title: "Data Integration",
                    description: "Managed enterprise data flows using Celigo iPaaS, integrating NetSuite, Shopify, and Salesforce"
                }
            ]
        }
    ],

    projects: [
        {
            slug: "architecture-firm",
            title: "Atelier — Architecture Firm Website",
            description: "Architecture is a visual craft, yet most firm websites reduce years of design work to static grids and lifeless thumbnails — losing the very clients they're meant to impress. I built a cinematic web experience for an architecture firm that treats the website itself as a piece of architecture: full-bleed project imagery, buttery-smooth Lenis scrolling, and GSAP-driven scroll storytelling that reveals spaces the way you'd walk through them. Sections pin, parallax, and transition like scenes in a film, giving each project room to breathe while keeping the visitor moving toward enquiry. Built on Next.js and React with Tailwind CSS for a precise, minimal design language, and deployed on Vercel for fast global delivery — the result is a portfolio that sells the firm's design sensibility before a single word is read.",
            tags: ["Client Work", "Architecture", "Cinematic", "Frontend"],
            tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Lenis", "Vercel"],
            liveUrl: "https://architeture-firm.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/architetureFirm",
            gradient: "from-stone-600/20 to-neutral-600/20",
            image: "/arc-2.png"
        },
        {
            slug: "mgm-hospital",
            title: "MGM Hospital — Hospital Management & Doctor Booking App",
            description: "Hospitals lose patients to friction — long queues, manual scheduling, and no way to confirm an appointment without a phone call. I built MGM Hospital, a full-stack hospital management platform that lets patients browse doctors, check live availability, and book appointments online in a few clicks. The booking flow is backed by Razorpay for secure online payments and automated WhatsApp notifications that confirm and remind patients of their appointments, cutting down no-shows and front-desk workload. On the backend, a Node.js/Express API manages doctors, schedules, and bookings against a PostgreSQL database via Supabase, while the React frontend uses GSAP, Framer Motion, and Lenis for smooth, polished scroll and page transitions. The result is an end-to-end booking experience — from choosing a doctor to paying and getting notified — wrapped in a fast, modern interface.",
            tags: ["Client Work", "Healthcare", "Full Stack", "Payments"],
            tech: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "Razorpay", "Framer Motion", "Lenis", "GSAP"],
            liveUrl: "https://mgm-hospital.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/MGM_Hospital.git",
            gradient: "from-rose-600/20 to-pink-600/20",
            image: "/mgm.png"
        },
        {
            slug: "faizura-trading",
            title: "Faizura Trading — Money Exchange Singapore",
            description: "Singapore's money exchange market is crowded and trust is everything. Faizura Trading needed more than a website — they needed a brand presence that would convert visitors into customers in a high-stakes financial niche. I built a premium, cinematic marketing website with live exchange rates, frame-scrub scroll storytelling (120 WebP canvas frames), and an SEO-first architecture targeting Singapore's competitive forex search intent. The result: a production-grade web experience that builds trust, ranks for local search, and drives real enquiries.",
            tags: ["Client Work", "FinTech", "Singapore", "Cinematic"],
            tech: ["Next.js", "TypeScript", "GSAP", "Lenis", "Framer Motion", "Tailwind CSS", "Frankfurter API", "Vercel"],
            liveUrl: "https://faizura-trading.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/FaizuraTrading",
            gradient: "from-emerald-600/20 to-teal-600/20",
            image: "/moneyExchange.png"
        },
        {
            slug: "btech-tutor",
            title: "Btech Tutor — Engineering Education Platform",
            description: "B.Tech students across Kerala were struggling to find reliable, syllabus-aligned study material in one place — scattered PDFs, outdated resources, and zero guidance for GATE. I built Btech Tutor: a full-stack education platform and CMS that serves branch-level GATE coaching (ECE, EEE, Instrumentation), KTU scheme-aware subject pages (2019 & 2024), mock tests, PYQs, and video links — all managed through a protected admin dashboard. The platform also handles student enquiries via email, moderated reviews, faculty profiles, and city-specific SEO landing pages to capture local search traffic across Kerala.",
            tags: ["EdTech", "CMS", "Full Stack", "SEO"],
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Resend", "Supabase", "GSAP", "Lenis", "Tailwind CSS"],
            liveUrl: "https://btec-tutor.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/BtecTutor",
            gradient: "from-blue-600/20 to-indigo-600/20",
            image: "/btechTutor.png"
        },
        {
            slug: "golden-bricks",
            title: "Golden Bricks — Client Business Website",
            description: "Modern business website built for a client with stunning scroll-based animations, responsive design, and optimized performance. Deployed on Vercel for fast global delivery.",
            tags: ["Client Work", "Business"],
            tech: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
            liveUrl: "https://golden-bricks.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/GoldenBricks",
            gradient: "from-amber-600/20 to-yellow-600/20",
            image: "/goldenBricks.png"
        },
        {
            slug: "brunel-steel",
            title: "Brunel Steel — Industrial Web Platform",
            description: "A production-ready industrial platform built for scale. Dynamic content management, cloud infrastructure, and SEO optimization — delivered as a complete business solution, not just a website.",
            tags: ["Client Work", "Industrial", "Full Stack", "CMS"],
            tech: ["React", "FastAPI", "MongoDB", "Tailwind CSS", "AWS", "EmailJS"],
            liveUrl: "https://brunel-steel-buildings.vercel.app/",
            gradient: "from-slate-600/20 to-zinc-600/20",
            image: "/steelWebsite.png"
        },
        {
            slug: "saravana-transport-billing",
            title: "Sree Saravana Transport — Billing & Invoice System",
            description: "Sree Saravana Transport was running their entire freight operations on handwritten slips — manual Lorry Receipts, no payment tracking, and zero visibility across branches. I built a full-stack billing and booking management system that digitized their day-to-day operations end to end. Staff can now create bookings with consignor/consignee details, auto-generate sequential LR numbers, print professional branded invoices, and track payment status (PAID / TO PAY) in real time. The admin dashboard surfaces today's collection, pending amounts, and total bookings at a glance — giving ownership full operational control for the first time.",
            tags: ["Client Work", "Billing Software", "Transport", "Admin"],
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "Tailwind CSS", "react-to-print", "Neon"],
            liveUrl: "https://saravana-travels-pcqs.vercel.app/login?callbackUrl=%2Fbooking%2Fnew",
            githubUrl: "https://github.com/ahmedthousifgit571/saravanaTravels",
            gradient: "from-orange-600/20 to-amber-600/20",
            image: "/billingSoftware.png"
        },
        {
            slug: "doctor-appointment-booking",
            title: "Acupuncture Clinic Website",
            description: "Full-stack appointment booking system with role-based access control (RBAC) for users, doctors, and admins. Built with PostgreSQL and Prisma ORM.",
            tags: ["Full Stack", "Healthcare"],
            tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
            liveUrl: "https://miaat.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/MIAAT",
            gradient: "from-blue-600/20 to-purple-600/20",
            image: "/doctorBooking.png"
        },
        {
            slug: "chatify-real-time-chat",
            title: "Chatify — Real-Time Chat Application",
            description: "Real-time chat and video call platform with 1-on-1 & group calls, screen sharing, message reactions, and theme customization.",
            tags: ["Real-time", "Video Call"],
            tech: ["React", "Socket.IO", "Stream", "MongoDB"],
            liveUrl: "https://streamify-p7e2.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/connext",
            gradient: "from-cyan-600/20 to-blue-600/20",
            image: "/chatify.png"
        },
        {
            slug: "tunehive-music-streaming",
            title: "TuneHive — Music Streaming Platform",
            description: "Spotify-inspired full-stack music app with Clerk authentication, real-time chat, dynamic playback, and mobile-responsive design.",
            tags: ["Music", "Streaming"],
            tech: ["React", "TypeScript", "Clerk", "Socket.IO"],
            liveUrl: "https://tune-hive-ns4f.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/tuneHive",
            gradient: "from-green-600/20 to-emerald-600/20",
            image: "/tunehive.png"
        },
        {
            slug: "fullstack-ecommerce",
            title: "Full-Stack E-Commerce Platform",
            description: "Complete e-commerce solution with Razorpay payment integration, admin dashboard, and deployed on AWS EC2 with clean MVC architecture.",
            tags: ["E-Commerce", "AWS"],
            tech: ["Node.js", "MongoDB", "Razorpay", "AWS EC2"],
            githubUrl: "https://github.com/ahmedthousifgit571/ecommerce",
            gradient: "from-orange-600/20 to-red-600/20",
            image: "/shoesEcommerce.png"
        }
    ],

    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Zustand", "Tanstack Query", "Tailwind CSS", "Shadcn UI", "Material UI"],
        backend: ["Node.js", "Express", "NestJS", "Socket.io", "Stream", "Cloudinary", "Razorpay", "Celigo"],
        database: ["MongoDB", "PostgreSQL", "NeonDB", "Prisma", "Drizzle", "Appwrite", "Firebase"],
        devops: ["AWS", "AWS Bedrock", "Render", "Vercel", "Docker", "Kubernetes", "Nginx"]
    },

    certifications: [
        {
            title: "Celigo Builder Core Certification",
            description: "Certified in building, configuring, and managing integrations using Celigo's iPaaS platform"
        }
    ]
};

export type PortfolioData = typeof portfolioData;

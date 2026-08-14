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

    projectCategories: ["Cinematic Experience", "Websites", "CRMs", "Mobile Apps", "AI Agents", "Mini Projects"],

    projects: [
        {
            slug: "project-hulk",
            category: "Cinematic Experience",
            title: "Project Hulk — Personal Fitness Coach Website",
            description: "A personal fitness coach can transform bodies in the gym, but online they often blend into a sea of generic templates that fail to capture the energy of their training. Project Hulk fixes that. I built a bold, high-impact website that sells the coach's intensity from the first scroll: powerful full-screen visuals, GSAP animations that hit like a workout, and Lenis smooth scrolling that keeps the experience fluid from hero to enquiry. Built with Next.js and TypeScript for a fast, type-safe foundation and styled with Tailwind CSS for a sharp, athletic design language, the site turns casual visitors into training clients by making the coach's brand feel as strong as the results they deliver.",
            tags: ["Client Work", "Fitness", "Cinematic", "Frontend"],
            tech: ["Next.js", "TypeScript", "GSAP", "Lenis", "Tailwind CSS"],
            liveUrl: "https://www.project-hulk.com",
            githubUrl: "https://github.com/ahmedthousifgit571/personaltrainer",
            gradient: "from-green-600/20 to-lime-600/20",
            image: "/fitness.png"
        },
        {
            slug: "architecture-firm",
            category: "Cinematic Experience",
            title: "Atelier — Architecture Firm Website",
            description: "Architecture is a visual craft, yet most firm websites reduce years of design work to static grids and lifeless thumbnails — losing the very clients they're meant to impress. I built a cinematic web experience for an architecture firm that treats the website itself as a piece of architecture: full-bleed project imagery, buttery-smooth Lenis scrolling, and GSAP-driven scroll storytelling that reveals spaces the way you'd walk through them. Sections pin, parallax, and transition like scenes in a film, giving each project room to breathe while keeping the visitor moving toward enquiry. Built on Next.js and React with Tailwind CSS for a precise, minimal design language, and deployed on Vercel for fast global delivery — the result is a portfolio that sells the firm's design sensibility before a single word is read.",
            tags: ["Client Work", "Architecture", "Cinematic", "Frontend"],
            tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Lenis", "Vercel"],
            liveUrl: "https://www.srripositivebuilders.com",
            githubUrl: "https://github.com/ahmedthousifgit571/architetureFirm",
            gradient: "from-stone-600/20 to-neutral-600/20",
            image: "/arc-2.png"
        },
        {
            slug: "mgm-hospital",
            category: "Cinematic Experience",
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
            category: "Cinematic Experience",
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
            slug: "bemap-travel",
            category: "Websites",
            title: "beMap Travel — Travel Agency Website",
            description: "Travel agencies sell an experience, not a product, so a generic template website undersells the destinations before a customer even reaches out. I built beMap Travel, a cinematic marketing website that brings the agency's tours and destinations to life with immersive full-screen imagery, GSAP-driven scroll animations, and Lenis smooth scrolling that makes browsing feel like flipping through a travel brochure. Built with Next.js and Tailwind CSS for a fast, polished frontend and deployed on Vercel for reliable global delivery, the site turns casual visitors into enquiries by making every destination feel worth booking.",
            tags: ["Client Work", "Travel", "Cinematic", "Frontend"],
            tech: ["Next.js", "Tailwind CSS", "GSAP", "Lenis", "Vercel"],
            liveUrl: "https://be-map-travel-website.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/beMap-travel-website",
            gradient: "from-sky-600/20 to-cyan-600/20",
            image: "/beMap.png"
        },
        {
            slug: "golden-bricks",
            category: "Websites",
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
            slug: "doctor-appointment-booking",
            category: "Websites",
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
            slug: "btech-tutor",
            category: "CRMs",
            title: "Btech Tutor — Engineering Education Platform",
            description: "B.Tech students across Kerala were struggling to find reliable, syllabus-aligned study material in one place — scattered PDFs, outdated resources, and zero guidance for GATE. I built Btech Tutor: a full-stack education platform and CMS that serves branch-level GATE coaching (ECE, EEE, Instrumentation), KTU scheme-aware subject pages (2019 & 2024), mock tests, PYQs, and video links — all managed through a protected admin dashboard. The platform also handles student enquiries via email, moderated reviews, faculty profiles, and city-specific SEO landing pages to capture local search traffic across Kerala.",
            tags: ["EdTech", "CMS", "Full Stack", "SEO"],
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Resend", "Supabase", "GSAP", "Lenis", "Tailwind CSS"],
            liveUrl: "https://www.btechtutor.com",
            githubUrl: "https://github.com/ahmedthousifgit571/BtecTutor",
            gradient: "from-blue-600/20 to-indigo-600/20",
            image: "/btechTutor.png"
        },
        {
            slug: "brunel-steel",
            category: "CRMs",
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
            category: "CRMs",
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
            slug: "jobzinda",
            category: "Mobile Apps",
            title: "Jobzinda — Freelancer Marketplace App",
            description: "Freelancers outside the big-city platforms struggle to find work, and local clients have no easy way to discover skilled people right in their neighbourhood. Jobzinda solves both sides of that problem. It is a mobile marketplace where freelancers discover like-minded professionals in their locality, connect and chat with them in real time, and either hire for a project or get hired by clients. Users can also generate earnings by posting ads, and businesses use the platform to promote their services and find on-demand talent nearby. Built with Flutter for a smooth cross-platform experience and powered by a Node.js and Express backend with MongoDB, the app is live on the Google Play Store as Jobzinda.",
            tags: ["Mobile App", "Marketplace", "Freelancing", "Chat"],
            tech: ["Flutter", "Node.js", "Express", "MongoDB"],
            liveUrl: "https://play.google.com/store/apps/details?id=com.jobZinda.customers",
            gradient: "from-violet-600/20 to-purple-600/20",
            image: "/jobzinda.png"
        },
        {
            slug: "techvest-ai",
            category: "AI Agents",
            title: "techVestAi — Multi-Agent Financial Strategy Platform",
            description: "An AI-powered financial advisory platform based on RAG (Retrieval-Augmented Generation), knowledge base, and the Agno framework. It features a Multi-Agent Engine powered by Agno & Groq (Llama-3.3-70b) with distinct specialized agents working in unison:\n\n• Profiler Agent: Calculates exact investable surplus from income, fixed expenses, and natural language query overrides.\n• Educator Agent (RAG): Queries a local ChromaDB vector database containing Indian tax laws (Old vs New Regime), RSU perquisite taxes, and capital gains rules.\n• Market Analyst Agent: Fetches real-time ETF price quotes (NIFTYBEES.NS, MON100.NS) via yfinance.\n• Synthesizer Agent: Validates and outputs a structured financial strategy with Pydantic JSON schemas.\n⚡ Real-Time SSE Thinking Stream: Streams live agent reasoning and tool invocation steps directly to the frontend using Server-Sent Events (SSE).",
            tags: ["AI Agent", "RAG", "Multi-Agent Engine", "FinTech", "FastAPI"],
            tech: ["Agno Framework", "Groq (Llama-3.3-70b)", "ChromaDB", "FastAPI", "Pydantic", "Next.js", "yfinance", "SSE"],
            githubUrl: "https://github.com/ahmedthousifgit571/techVestAi",
            gradient: "from-cyan-600/20 to-emerald-600/20",
            image: "/techVest.png"
        },
        {
            slug: "rag-application",
            category: "AI Agents",
            title: "RAG Application — Intelligent PDF Document Q&A Engine",
            description: "A full-stack RAG solution featuring a FastAPI backend and Next.js frontend that allows users to upload PDF documents and ask context-aware questions. Answers are grounded strictly in the document's actual content and streamed back token-by-token in real time.\n\n• Backend: Built with FastAPI, handling PDF parsing, vector retrieval, and token streaming. Deployed on Render.\n• Frontend: Built with Next.js and deployed on Vercel for an intuitive, live-streaming chat experience.",
            tags: ["AI", "RAG", "FastAPI", "PDF Q&A", "Token Streaming"],
            tech: ["FastAPI", "Next.js", "Python", "LangChain", "Render", "Vercel"],
            liveUrl: "https://rag-application-weld.vercel.app/",
            githubUrl: "https://github.com/ahmedthousifgit571/rag-application-backend",
            gradient: "from-blue-600/20 to-teal-600/20",
            image: "/ragApplication.png"
        },
        {
            slug: "chatify-real-time-chat",
            category: "Mini Projects",
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
            category: "Mini Projects",
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
            category: "Mini Projects",
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

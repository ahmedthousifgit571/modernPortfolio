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
            slug: "doctor-appointment-booking",
            title: "Doctor Appointment Booking Platform",
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

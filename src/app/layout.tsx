import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmed Thousif | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Node.js, Next.js, and Cloud Technologies. Building scalable web applications with modern technologies.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Next.js", "AWS", "Portfolio", "Ahmed Thousif"],
  authors: [{ name: "Ahmed Thousif" }],
  openGraph: {
    title: "Ahmed Thousif | Full Stack Developer",
    description: "Building exceptional digital experiences with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

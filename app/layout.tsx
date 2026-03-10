import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ritunj Kaushik | Full Stack Developer",
  description: "Results-driven Full Stack Developer with 1+ year building scalable web applications and enterprise SaaS platforms. Expert in MERN stack, TypeScript, Next.js, and cloud technologies.",
  keywords: ["Full Stack Developer", "React", "Node.js", "TypeScript", "MERN Stack", "AWS", "Portfolio"],
  authors: [{ name: "Ritunj Kaushik" }],
  openGraph: {
    title: "Ritunj Kaushik | Full Stack Developer",
    description: "Expert Full Stack Developer specializing in MERN stack, cloud technologies, and scalable web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
